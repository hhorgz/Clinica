from dataclasses import field
from django.contrib.auth.models import User, Group
from clinic.models import Patient, AppointmentType, AppointmentStatus, Appointment
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

class PatientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Patient
        fields = ['id', 'name', 'age', 'birth_date', 'sex']

class AppointmentTypeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = AppointmentType
        fields = ['id', 'type', 'estimated_time']

class AppointmentStatusSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = AppointmentStatus
        fields = ['id', 'status']

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ['id', 'patient', 'appointment_type', 'status', 'scheduled_date', 'comment']