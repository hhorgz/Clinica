from email.policy import default
from django.db import models

SEX_CHOICES = [
    ('M', 'Masculino'),
    ('F', 'Femenino')
]

class Patient(models.Model):
    name = models.CharField(max_length=500)
    age = models.IntegerField(default=0)
    birth_date = models.DateField('YYYY-MM-DD')
    sex = models.CharField(max_length=1, default='M', choices=SEX_CHOICES)
    # TODO: Add CUI and make a unique constraint on this field

class AppointmentType(models.Model):
    type = models.CharField(max_length=100)
    estimated_time = models.IntegerField('duration in minutes', default=0)

class AppointmentStatus(models.Model):
    status = models.CharField(max_length=50)

class Appointment(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    appointment_type = models.ForeignKey(AppointmentType, on_delete=models.CASCADE)
    status = models.ForeignKey(AppointmentStatus, on_delete=models.CASCADE)
    scheduled_date = models.DateTimeField('appointment date YYYY-MM-DD HH:mm:ss')
    comment = models.CharField(max_length=500, null=True)