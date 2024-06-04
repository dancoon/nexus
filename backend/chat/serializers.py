from rest_framework import serializers
from . import models
from django.contrib.auth import get_user_model


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = "__all__"


class MessageSerializer(serializers.ModelSerializer):
    sender = UserSerializer()

    class Meta:
        model = models.Message
        fields = ["sender", "text", "attachment", "created_at"]


class ConversationSerializer(serializers.ModelSerializer):
    initiator = UserSerializer()
    recipient = UserSerializer()
    message_set = MessageSerializer(many=True)

    class Meta:
        model = models.Conversation
        fields = ["initiator", "recipient", "message_set", "created_at"]
