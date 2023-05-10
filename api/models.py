from django.db import models

# Create your models here.
class Question(models.Model):
    user_id = models.CharField(max_length=15, null=False)
    title = models.CharField(max_length=300, null=False)
    question = models.CharField(max_length=300, null=False)
    created_at = models.DateTimeField(auto_now_add=True)

class User(models.Model):
    user_id = models.CharField(max_length=15, null=False, unique=True)
    password = models.CharField(max_length=15, null=False)