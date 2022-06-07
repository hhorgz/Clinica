from django.db import models

# Create your models here.
class Patient(models.Model):
    name = models.CharField(max_length=500)
    age = models.IntegerField(default=0)
    birth_date = models.DateField()
    sex = models.CharField(max_length=1, default='M')

class AppointmentType(models.Model):
    type = models.CharField(max_length=100)
    estimated_time = models.TimeField

class AppointmentStatus(models.Model):
    status = models.CharField(max_length=50)

class Appointment(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    appointment_type = models.ForeignKey(AppointmentType, on_delete=models.CASCADE)
    status = models.ForeignKey(AppointmentStatus, on_delete=models.CASCADE)
    scheduled_date = models.DateTimeField('appointment date')