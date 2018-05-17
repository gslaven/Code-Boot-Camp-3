from django.http import HttpResponse
# Create your views here.


def index(request):
    return HttpResponse("Hello, world. You're at the %s index page." % request.get_full_path())

def detail(request, param_id):
    return HttpResponse("Detail of %s as requested by  %s" % (param_id, request.get_full_path()))

