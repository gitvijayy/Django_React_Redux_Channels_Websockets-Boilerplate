from rest_framework import generics, viewsets, permissions
from rest_framework.response import Response
from .serializers import ChatSerializer
from .models import Chat


class ChatViewSet(viewsets.ModelViewSet):
    queryset = Chat.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ChatSerializer
