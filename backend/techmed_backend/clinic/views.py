from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.response import Response
from django.http import JsonResponse
from clinic.serializers import AppointmentSerializer, AppointmentStatusSerializer, AppointmentTypeSerializer, UserSerializer, GroupSerializer, PatientSerializer
from clinic.models import Patient, AppointmentType, AppointmentStatus, Appointment
from clinic.utils.DateUtils import calculateAge

# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

class PatientViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows patients to be viewed or edited
    """
    queryset = Patient.objects.all().order_by('-name')
    serializer_class = PatientSerializer
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request):
        patient = request.data
        # Must calculate age before creating patient
        try:
            patient['age'] = calculateAge(patient['birth_date'])
        except:
            return Response('Something went wrong when trying to calculate age', status = 500)
        # Validate serializer
        serializer = PatientSerializer(data = patient)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = 201)
        # Something went wrong
        return JsonResponse(serializer.errors, status = 500)

            

class AppointmentTypeViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows appointment types to be viewed or edited
    """
    queryset = AppointmentType.objects.all()
    serializer_class = AppointmentTypeSerializer
    permission_classes = [permissions.IsAuthenticated]

class AppointmentStatusViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows appointment status to be viewed or edited
    """
    queryset = AppointmentStatus.objects.all()
    serializer_class = AppointmentStatusSerializer
    permission_classes = [permissions.IsAuthenticated]

class AppointmentViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows appointments to be viewed or edited
    """
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    permission_classes = [permissions.IsAuthenticated]
