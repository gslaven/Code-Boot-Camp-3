from django.http import HttpResponse
from .models import Address
from .models import Company
from .models import Job
from .models import Phone
from .models import Reference
from .models import School
from .models import Skill

# def index(request):
#     return HttpResponse("Hello, world. You're at the %s index page." % request.get_full_path())


def index(request):
    latest = Company.objects.order_by('-created_at')[:5]
    output = ''.join(var.name for var in latest)
    return HttpResponse(output + output)


# def index(request):
#     latest_addresses = Address.objects.order_by('-created_at')[:5]
#     output = ', '.join([
#         add.street + ', ' + add.city + ',' + add.state
#         for add in latest_addresses])
#     return HttpResponse(output)


def detail(request, param_id):
    return HttpResponse("Detail of %s as requested by  %s" % (param_id, request.get_full_path()))
