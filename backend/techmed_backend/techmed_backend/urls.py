"""techmed_backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import include, path
#TODO: OAUTH
from django.contrib import admin
#TODO: OAUTH
from rest_framework import routers, generics, permissions, serializers
# from oauth2_provider.contrib.rest_framework import TokenHasReadWriteScope, TokenHasScope
from clinic import views
#TODO: OAUTH
admin.autodiscover()

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'patients', views.PatientViewSet)
router.register(r'doctors', views.DoctorViewSet)
router.register(r'appointmentTypes', views.AppointmentTypeViewSet)
router.register(r'appointmentStatuses', views.AppointmentStatusViewSet)
router.register(r'appointments', views.AppointmentViewSet)

urlpatterns = [
    # path('polls/', include('polls.urls')),
    path('admin/', admin.site.urls),
    # path('o/', include('oauth2_provider.urls', namespace='oauth2_provider')),
    path('', include(router.urls)),
    # path('api-auth', include('rest_framework.urls', namespace='rest_framework'))
]
