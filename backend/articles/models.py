from django.db import models
from django.utils.translation import gettext_lazy as _
from taggit.managers import TaggableManager
import re
from django.utils.text import slugify
from django_ckeditor_5.fields import CKEditor5Field


# Create your models here.
class Topic(models.Model):
    name = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    class Meta:
        ordering = ["-created_at"]


class Article(models.Model):
    title = CKEditor5Field("Text", config_name="extends")
    content = CKEditor5Field("Text", config_name="extends")
    topic = models.ForeignKey("articles.Topic", on_delete=models.CASCADE, null=True)
    cover_image_url = models.ImageField(upload_to="images/articles/")
    slug = models.SlugField(unique=True, db_index=True)
    author = models.ForeignKey("users.CustomUser", on_delete=models.CASCADE)
    likes = models.PositiveIntegerField(_("likes"), default=0)
    comments = models.PositiveIntegerField(_("comments"), default=0)
    tags = TaggableManager()
    public = models.BooleanField(_("public"), default=True)
    published = models.BooleanField(_("published"), default=False)
    date_published = models.DateTimeField(null=True, blank=True)
    minutes_to_read = models.PositiveIntegerField(_("minutes to read"), default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.title

    def calculate_minutes_to_read(self):
        # Calculate the number of words in the article content
        word_count = len(re.findall(r"\w+", self.content))
        average_reading_speed = 200  # Adjust as needed
        minutes_to_read = max(1, round(word_count / average_reading_speed))
        return minutes_to_read


class Comment(models.Model):
    content = models.TextField()
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
    author = models.ForeignKey("users.CustomUser", on_delete=models.CASCADE)
    parent_comment = models.ForeignKey(
        "self", on_delete=models.CASCADE, null=True, blank=True
    )
    likes = models.PositiveIntegerField(_("likes"), default=0)
    replies = models.PositiveIntegerField(_("replies"), default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.content

    class Meta:
        ordering = ["-created_at"]


class ArticleLike(models.Model):
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
    user = models.ForeignKey("users.CustomUser", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user} likes {self.article}"

    class Meta:
        unique_together = ["article", "user"]


class CommentLike(models.Model):
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE)
    user = models.ForeignKey("users.CustomUser", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user} likes {self.comment}"

    class Meta:
        unique_together = ["comment", "user"]
