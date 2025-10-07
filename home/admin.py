from django.contrib import admin
import admin_thumbnails
from .models import *

@admin_thumbnails.thumbnail('web_image')
class WebSliderAdmin(admin.ModelAdmin):
    list_display = ['title', 'web_image_thumbnail']

@admin_thumbnails.thumbnail('web_image')
class OverviewAdmin(admin.ModelAdmin):
    list_display = ['title', 'web_image_thumbnail']

@admin_thumbnails.thumbnail('web_image')
class GalleryAdmin(admin.ModelAdmin):
    list_display = ['title', 'web_image_thumbnail']

@admin_thumbnails.thumbnail('icone')
class AmenitiesAdmin(admin.ModelAdmin):
    list_display = ['title', 'icone_thumbnail']

@admin_thumbnails.thumbnail('icone')
class USPAdmin(admin.ModelAdmin):
    list_display = ['title', 'icone_thumbnail']

@admin_thumbnails.thumbnail('qr_image')
class MahareraAdmin(admin.ModelAdmin):
    list_display = ['title', 'qr_image_thumbnail']

admin.site.register(Setting)
admin.site.register(Web_Slider, WebSliderAdmin)
admin.site.register(Overview, OverviewAdmin)
admin.site.register(About_Us)
admin.site.register(Unique_Selling_Proposition, USPAdmin)
admin.site.register(Configuration)
admin.site.register(Amenities, AmenitiesAdmin)
admin.site.register(Gallery, GalleryAdmin)
admin.site.register(Bookingopen)
admin.site.register(Welcometo)
admin.site.register(Location)
admin.site.register(Maharera, MahareraAdmin)
admin.site.register(Reraaditional)
admin.site.register(Why_Invest)
