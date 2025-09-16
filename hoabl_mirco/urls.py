
from django.contrib import admin
from django.shortcuts import render
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
import home
from home import views 
from django.utils.translation import gettext_lazy as _
from django.urls import path
from django.views.generic import TemplateView

from django.views.generic import RedirectView


urlpatterns = [
    path('', include('home.urls')),
    path('home/', include('home.urls')),
    path('privacy-policy', views.privacy_policy, name='privacy-policy'),
    path('logout/',RedirectView.as_view(url = '/admin/logout/')),
    
    path('submit-form/', views.submit_form, name='submit_form'),
    path('thank-you/', lambda request: render(request, 'thank_you.html'), name='thank_you'),
   
    
    path('ckeditor/', include('ckeditor_uploader.urls')),
    path('admin/', admin.site.urls),

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
