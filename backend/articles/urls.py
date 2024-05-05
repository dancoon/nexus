from django.urls import include, path
from . import views

app_name = "articles"

urlpatterns = [
    path("", views.articles_list, name="articles-list"),
    path("<slug:slug>/", views.article_detail, name="article-detail"),

]
