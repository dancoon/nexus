from django.contrib import admin
from . import models


# Register your models here.
@admin.register(models.Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ["id", "title", "author"]


@admin.register(models.Topic)
class TopicAdmin(admin.ModelAdmin):
    list_display = ["name", "slug"]
