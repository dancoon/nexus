from django.urls import path
from . import views


app_name = "chat"

urlpatterns = [
    path("start/", views.start_conversation, name="start_convo"),
    path("<int:convo_id>/", views.get_conversation, name="get_conversation"),
    path("", views.get_conversations, name="conversations"),
]
