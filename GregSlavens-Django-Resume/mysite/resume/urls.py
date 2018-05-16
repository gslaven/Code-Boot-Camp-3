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
    # ex: /Resume/
    path('', views.index, name='index'),
    re_path(r'^(?i)address/', views.address_index, name='address_index'),
    # re_path(r'^(?i)company/', views.index, name='index'),
    # re_path(r'^(?i)job/', views.index, name='index'),
    re_path(r'^(?i)phone/', views.index, name='index'),
    # re_path(r'^(?i)reference/', views.index, name='index'),
    # re_path(r'^(?i)school/', views.index, name='index'),
    # re_path(r'^(?i)skill/', views.index, name='index'),
    # Singlets of each type (ie: company 1)
    re_path(r'^(?i)address/<int:param_id>/', views.detail, name='detail'),
    re_path(r'^(?i)phone/<int:param_id>/detail', views.detail, name='detail'),
    # ex: /Resume/5/results/
    re_path(r'^(?i)<int:param_id>/results/', views.results, name='results'),
    # ex: /Resume/5/vote/
    re_path(r'^(?i)<int:param_id>/vote/', views.vote, name='vote'),
]