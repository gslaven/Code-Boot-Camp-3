"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
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
from django.urls import include, path, re_path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('<int:param_id>/', views.detail, name='detail'),
    re_path(r'^(?i)resume/',
            include('resume.urls_Resume')),
    re_path(r'^(?i)company/',
            include('resume.urls_Company')),
    re_path(r'^(?i)job/',
            include('resume.urls_Job')),
    re_path(r'^(?i)reference/',
            include('resume.urls_Reference')),
    re_path(r'^(?i)skill/',
            include('resume.urls_Skill')),
    re_path(r'^(?i)summary/',
            include('resume.urls_Summary')),
]
