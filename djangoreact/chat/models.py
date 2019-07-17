from django.db import models

# Create your models here.


class Chat(models.Model):
    name = models.CharField(max_length=500, blank=True)
    message = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
