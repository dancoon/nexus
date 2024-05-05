from rest_framework import serializers
from .models import Article, Comment
from taggit.serializers import TagListSerializerField, TaggitSerializer


class ArticleSerializer(TaggitSerializer, serializers.HyperlinkedModelSerializer):
    topic = serializers.SlugRelatedField(slug_field="slug", read_only=True)
    tags = TagListSerializerField()

    class Meta:
        model = Article
        fields = "__all__"
        extra_kwargs = {
            "url": {"view_name": "articles:article-detail"},
        }
        read_only_fields = [
            "slug",
            "author",
            "likes",
            "comments",
            "date_published",
            "minutes_to_read",
        ]


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
