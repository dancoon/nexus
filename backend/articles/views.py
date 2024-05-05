from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from drf_yasg.utils import swagger_auto_schema
from rest_framework.permissions import AllowAny, IsAuthenticated
from . import models

from . import serializers


# Create your views here.
@swagger_auto_schema(
    tags=["articles"],
    methods=["GET", "PUT", "DELETE"],
    responses={
        200: serializers.ArticleSerializer,
        404: "Article not found",
        403: "You do not have permission to perform this action.",
    },
)
@api_view(["GET", "PUT", "DELETE"])
@permission_classes([AllowAny])
def article_detail(request, slug):
    """
    Get the article detail by slug.
    Update the article by slug.
    Delete the article by slug.
    """
    try:
        article = models.Article.objects.get(slug=slug)
    except models.Article.DoesNotExist:
        return Response(
            {"detail": "Article not found"}, status=status.HTTP_404_NOT_FOUND
        )

    if (request.method != "GET" and request.user != article.author) or (
        not article.public and request.user != article.author
    ):
        return Response(
            {"detail": "You do not have permission to perform this action."},
            status=status.HTTP_403_FORBIDDEN,
        )

    # Get Article
    if request.method == "GET":
        serializer = serializers.ArticleSerializer(article)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # Update article
    elif request.method == "PUT":
        serializer = serializers.ArticleSerializer(article, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Delete article
    elif request.method == "DELETE":
        article.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@swagger_auto_schema(tags=["articles"], methods=["GET", "POST"])
@api_view(["GET", "POST"])
@permission_classes([AllowAny])
def articles_list(request):
    """
    List all articles.
    Create a new article.
    """
    # List all articles
    if request.method == "GET":
        paginator = PageNumberPagination()
        articles = models.Article.objects.filter(public=True, published=True)
        result_page = paginator.paginate_queryset(articles, request)
        serializer = serializers.ArticleSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)

    # Create a new article
    elif request.method == "POST":
        serializer = serializers.ArticleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
