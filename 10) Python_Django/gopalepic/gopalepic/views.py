from django.http import HttpResponse
from django.shortcuts import render
def home(request):
# return HttpResponse("hi , soniji aaj python padh rahe hai")
  return render(request,'index.html')

def about(request):
 return HttpResponse('ye about section hai')

def contact(request):
 return HttpResponse("yaad kr leya kr mujhe mere bhai")
