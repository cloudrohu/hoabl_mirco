from django.contrib import admin
from .models import *

# Register your models here.

class ResponseAdmin(admin.ModelAdmin):
    list_display = ('name','email', 'phone','created_at','updated_at',)
admin.site.register(Response, ResponseAdmin)