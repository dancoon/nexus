from django.shortcuts import redirect, render
from . import models, serializers
from rest_framework.decorators import api_view
from django.db.models import Q
from rest_framework.response import Response


# Create your views here.
@api_view(["POST"])
def start_conversation(request):
    recipient_id = request.data.get("recipient_id")
    try:
        recipient = models.User.objects.get(pk=recipient_id)
    except models.User.DoesNotExist:
        return Response({"error": "Recipient not found"}, status=404)
    
    conversation = models.Conversation.objects.filter(Q(initiator=request.user, recipient=recipient) | Q(initiator=recipient, recipient=request.user)).first()
   
    if conversation:
        return redirect("get_conversation", conversation_id=conversation.id)
    else:
        conversation = models.Conversation.objects.create(initiator=request.user, recipient=recipient)
        return Response(serializers.ConversationSerializer(conversation).data)


@api_view(["GET"])
def get_conversation(request, conversation_id):
    try:
        conversation = models.Conversation.objects.get(pk=conversation_id)
    except models.Conversation.DoesNotExist:
        return Response({"error": "Conversation not found"}, status=404)
    return Response(serializers.ConversationSerializer(conversation).data)


@api_view(["GET"])
def get_conversations(request):
    conversations = models.Conversation.objects.filter(Q(initiator=request.user) | Q(recipient=request.user))
    return Response(serializers.ConversationSerializer(conversations, many=True).data)