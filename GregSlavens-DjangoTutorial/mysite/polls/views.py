from django.http import HttpResponse

def index(request):
    return HttpResponse("WHAT UP WORLD!!!!! You're at the polls index.")