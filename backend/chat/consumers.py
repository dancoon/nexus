import base64
import json
import secrets
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
from django.core.files.base import ContentFile
from django.conf import settings
from django.core.exceptions import ObjectDoesNotExist

from users.models import CustomUser
from .models import Message, Conversation
from .serializers import MessageSerializer

class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.room_name = self.scope["url_route"]["kwargs"]["room_name"]
        self.room_group_name = f"chat_{self.room_name}"

        # Join room group
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name, self.channel_name
        )
        self.accept()
        print(f"Connected to {self.room_group_name}")

    def disconnect(self, close_code):
        # Leave room group
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name, self.channel_name
        )
        print(f"Disconnected from {self.room_group_name} with close code {close_code}")

    # Receive message from WebSocket
    def receive(self, text_data=None, bytes_data=None):
        try:
            # parse the json data into dictionary object
            text_data_json = json.loads(text_data)

            # Send message to room group
            chat_type = {"type": "chat_message"}
            return_dict = {**chat_type, **text_data_json}
            async_to_sync(self.channel_layer.group_send)(
                self.room_group_name,
                return_dict,
            )
        except json.JSONDecodeError as e:
            print(f"JSON decode error: {e}")
        except Exception as e:
            print(f"Error in receive: {e}")

    # Receive message from room group
    def chat_message(self, event):
        try:
            text_data_json = event.copy()
            text_data_json.pop("type")
            message, attachment = (
                text_data_json["message"],
                text_data_json.get("attachment"),
            )

            conversation = Conversation.objects.get(id=int(self.room_name))
            sender = self.scope['user']

            if not sender.is_authenticated:
                raise ValueError("User not authenticated")

            # Attachment
            if attachment:
                file_str, file_ext = attachment["data"], attachment["format"]

                file_data = ContentFile(
                    base64.b64decode(file_str), name=f"{secrets.token_hex(8)}.{file_ext}"
                )
                _message = Message.objects.create(
                    sender=sender,
                    attachment=file_data,
                    text=message,
                    conversation=conversation,
                )
            else:
                _message = Message.objects.create(
                    sender=sender,
                    text=message,
                    conversation=conversation,
                )

            serializer = MessageSerializer(instance=_message)
            # Send message to WebSocket
            self.send(
                text_data=json.dumps(
                    serializer.data
                )
            )
        except ObjectDoesNotExist:
            print(f"Conversation with id {self.room_name} does not exist")
        except Exception as e:
            print(f"Error in chat_message: {e}")
