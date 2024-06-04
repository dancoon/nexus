from django.db import models


# Create your models here.
class Conversation(models.Model):
    initiator = models.ForeignKey(
        "users.CustomUser",
        on_delete=models.SET_NULL,
        related_name="conversations_initiated",
        null=True,
    )
    recipient = models.ForeignKey(
        "users.CustomUser",
        on_delete=models.SET_NULL,
        related_name="conversations_received",
        null=True,
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ("initiator", "recipient")
        ordering = ("-created_at",)

    def __str__(self):
        return f"{self.initiator} started a conversation with {self.recipient}"


class Message(models.Model):
    conversation = models.ForeignKey(
        "Conversation", on_delete=models.CASCADE, related_name="messages"
    )
    sender = models.ForeignKey(
        "users.CustomUser", on_delete=models.SET_NULL, related_name="messages", null=True
    )
    text = models.TextField()
    attachment = models.FileField(upload_to="attachments/", null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ("-created_at",)

    def __str__(self):
        return f"{self.sender} said: {self.text}"

