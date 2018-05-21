from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.template import loader

from .models import Address
from .models import Company
from .models import Job
from .models import Phone
from .models import Reference
from .models import School
from .models import Skill
from .models import Resume


def varDataObject(param_request_path):
    varPathString = templateFolder(param_request_path)
    if varPathString.lower() == "reference":
        # Check to see if this is a REFERENCE request
        zReturnVal = Reference
    elif varPathString.lower() == "job":
        # Check to see if this is a JOB request
        zReturnVal = Job
    elif varPathString.lower() == "company":
        # Check to see if this is a JOB request
        zReturnVal = Company
    elif varPathString.lower() == "skill":
        # Check to see if this is a Skill request
        zReturnVal = SKill
    else:
        # Ref failed, so make this a full resume request
        zReturnVal = Resume
    return zReturnVal


def templateFolder(param_request_path):
    varPathArray = param_request_path.lower().split('/')
    zReturnVal = varPathArray[3]
    if zReturnVal == "":
        # If the return val is blank, then this is a straight resume 
        # request and not a part of a resume (job, comp, skill) request
        zReturnVal = "Resume"
    return zReturnVal


def index(request):
    latest = varDataObject(request.path).objects.order_by('-created_at')
    context = {'latest': latest, }
    return render(request,
                  templateFolder(request.path) + '/index.html',
                  context)


def detail(request, param_id):
    detailObj = get_object_or_404(varDataObject(request.path), pk=param_id)
    return render(
        request,
        templateFolder(request.path) + '/detail.html',
        {'detailObj': detailObj}
    )