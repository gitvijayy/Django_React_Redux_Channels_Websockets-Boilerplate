from django.urls import path, include


from rest_framework import routers

from .api import ChatViewSet


router = routers.DefaultRouter()
router.register('chat', ChatViewSet, 'chat')
router.register('api/chat', ChatViewSet, 'chat')

urlpatterns = router.urls
