from django.db import models


# Create your models here.


class Event(models.Model):
    title = models.CharField(max_length=255)
    tag_line = models.CharField(max_length=255)
    ticket_Price = models.PositiveIntegerField()
    disc = models.CharField(max_length=1000)
    venue = models.CharField(max_length=255)
    date = models.DateField(blank=True, null=True)
    time_of_event = models.TimeField()
    status = models.BooleanField(default=False)
    image = models.ImageField(upload_to='uploaded/images/')



