from django.shortcuts import render, redirect
from django.db import connection
from .forms import SearchForm
from django.core.paginator import Paginator
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login, authenticate, logout
from .models import User

def homepage(request):
    ind = 0
    input_email = ""
    input_pass = ""
    if request.method == "POST":
        input_email = request.POST.get("email")
        input_pass = request.POST.get("password")
        if len(input_email) > 7:
            print(input_email)
            if not(User.objects.filter(email=input_email).exists()):
                user = User(email=input_email, password=input_pass)
                user.save()
                print("Reg Success")
            ind = 1
    return render(
        request=request, template_name="index.html", context={"ind": ind}
    )
