from django.dispatch import receiver
from django.db.models.signals import post_save, post_delete, pre_save
from django.dispatch import receiver
from .models import Article, ArticleLike, Comment
from django.utils.text import slugify
from bs4 import BeautifulSoup


# Signal to update minutes_to_read in Article model before saving
@receiver(pre_save, sender=Article)
def update_minutes_to_read(sender, instance, **kwargs):
    instance.minutes_to_read = instance.calculate_minutes_to_read()


# Signal to update likes count in Article model when ArticleLike is saved or deleted
@receiver(post_save, sender=ArticleLike)
@receiver(post_delete, sender=ArticleLike)
def update_article_likes_count(sender, instance, **kwargs):
    article = instance.article
    if kwargs.get("created", True):
        article.likes += 1
    else:
        article.likes -= 1
    article.save()


# Signal to update comments count in Article model when Comment is saved or deleted
@receiver(post_save, sender=Comment)
@receiver(post_delete, sender=Comment)
def update_article_comments_count(sender, instance, **kwargs):
    article = instance.article
    if kwargs.get("created", True):
        article.comments += 1
    else:
        article.comments -= 1
    article.save()


# Signal to update article's slug when created
@receiver(post_save, sender=Article)
def create_article_slug(sender, instance, created, **kwargs):
    # instance title is in hml format and needs to be stripped so as to get the actual title
    if created:
        soup = BeautifulSoup(instance.title, "html.parser")
        instance.slug = f"{slugify(soup.get_text())}-{instance.id}"
        instance.save()


# Signal to update article's slug when title updated
@receiver(pre_save, sender=Article)
def update_article_slug(sender, instance, **kwargs):
    if instance.pk:
        soup = BeautifulSoup(instance.title, "html.parser")
        instance.slug = f"{slugify(soup.get_text())}-{instance.id}"


# Signal to update the replies count in Comment model
@receiver(pre_save, sender=Comment)
def update_comment_replies_count(sender, instance, **kwargs):
    if instance.parent_comment is not None:  # Check if it's a reply
        # Retrieve all replies for the parent comment
        replies_count = Comment.objects.filter(
            parent_comment=instance.parent_comment
        ).count()
        # Update the parent comment's replies count
        instance.parent_comment.replies = replies_count
        instance.parent_comment.save()
