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
from django.conf.urls import url

from . import views

urlpatterns = [
        path('', views.index, name='index'),
        path('<int:param_id>/', views.detail, name='detail'),
        url(r'^(?i)resume/',
                include('resumes.urls_Resume')),
        url(r'^(?i)company/',
                include('resumes.urls_Company')),
        url(r'^(?i)job/',
                include('resumes.urls_Job')),
        url(r'^(?i)reference/',
                include('resumes.urls_Reference')),
        url(r'^(?i)skill/',
                include('resumes.urls_Skill')),
        url(r'^(?i)summary/',
                include('resumes.urls_Summary')),
]
