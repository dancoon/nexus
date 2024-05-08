from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Article, Comment
from taggit.serializers import TagListSerializerField, TaggitSerializer


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ["id", "email"]


class ArticleSerializer(TaggitSerializer, serializers.HyperlinkedModelSerializer):
    topic = serializers.SlugRelatedField(slug_field="slug", read_only=True)
    tags = TagListSerializerField()
    author = AuthorSerializer(read_only=True)

    class Meta:
        model = Article
        fields = [
            "id",
            "url",
            "title",
            "content",
            "topic",
            "cover_image_url",
            "slug",
            "author",
            "likes",
            "comments",
            "tags",
            "public",
            "published",
            "date_published",
            "minutes_to_read",
            "created_at",
            "updated_at",
        ]
        extra_kwargs = {
            "url": {"view_name": "articles:article-detail", "lookup_field": "slug"},
        }
        read_only_fields = [
            "slug",
            "url",
            "author",
            "likes",
            "comments",
            "date_published",
            "minutes_to_read",
        ]

    # Override the create method to set the author field to the current user
    def create(self, validated_data):
        validated_data["author"] = self.context["request"].user
        return super().create(validated_data)


class CommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comment
        fields = [
            "url",
            "id",
            "content",
            "article",
            "author",
            "parent_comment",
            "likes",
            "replies",
            "created_at",
            "updated_at",
        ]
