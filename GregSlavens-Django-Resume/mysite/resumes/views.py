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
from .models import ResumeType
from .models import Summary


def funDataObject(param_request_path):
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
        zReturnVal = Skill
    elif varPathString.lower() == "summary":
        # Check to see if this is a summary request
        zReturnVal = Summary
    elif varPathString.lower() == "resume":
        # Check to see if this is a Resume request
        zReturnVal = Resume
    else:
        # Ref failed, so make this a resume request as a failsafe
        zReturnVal = Resume
    return zReturnVal


def templateFolder(param_request_path):
    varPathArray = param_request_path.lower().split('/')
    zReturnVal = ""
    if varPathArray.__len__() == 3:
        # If the varPathArray = 3 (basically "blank"),
        # then this is a straight resume.
        # request is not a resume so make it something else (job, comp, skill) request
        zReturnVal = "resume"
    else:
        # Else serve up what Django was asking for
        zReturnVal = varPathArray[2]
    return zReturnVal


def index(request):
    varDataObject = funDataObject(request.path).objects
    context = {'varDataObject': varDataObject, }
    return render(request,
        templateFolder(request.path) + '/index.html',
        context)


def detail(request, param_id):
    varDataObject = get_object_or_404(funDataObject(request.path), pk=param_id)
    return render(
        request,
        templateFolder(request.path) + '/detail.html',
        {'varDataObject': varDataObject}
    )
