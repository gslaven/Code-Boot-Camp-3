from django.http import HttpResponse
# Create your views here.


def index(request):
    return HttpResponse("Hello, world. You're at the %s index page." % request.get_full_path())


def address_index(request):
    return HttpResponse("address_index. You're at the %s index page." % request.get_full_path())


def detail(request, param_id):
    return HttpResponse("Detail of %s" % param_id)


# def detail(request, param_id):
#     return HttpResponse("You're looking at question %s on page %s." % (param_id, request.get_full_path()))


def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)


def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)
