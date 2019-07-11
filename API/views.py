from django.shortcuts import render

from django.http import JsonResponse
from rest_framework import generics
from .models import Event
from .serializers import EventSerializer


# def names(request):
#   return JsonResponse({'names': ['William', 'Rod', 'Grant']})

class EventList(generics.ListCreateAPIView):
  queryset = Event.objects.all()
  serializer_class = EventSerializer
