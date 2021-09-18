from django.shortcuts import render


# Create your views here.
def openPage(request):
    return render(request, 'web.html', {})

def aboutPage(request):
    return render(request,'about.html')

def videosPage(request):
    return render(request,'videos.html')