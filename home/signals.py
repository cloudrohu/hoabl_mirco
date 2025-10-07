from django.db.models.signals import post_save
from django.dispatch import receiver
from PIL import Image
import os

from .models import (
    Setting, Web_Slider, Overview, Unique_Selling_Proposition,
    Amenities, Gallery, Welcometo, Maharera
)

THUMBNAIL_SIZE = (300, 300)
MAX_SIZE_MB = 2

def get_file_size_mb(path):
    """Get file size in MB"""
    return os.path.getsize(path) / (1024 * 1024)

def compress_and_thumbnail(image_path):
    """Compress image to WEBP and generate a thumbnail."""
    if not image_path or not os.path.exists(image_path):
        return None, None

    img = Image.open(image_path)
    img = img.convert('RGB')

    # Resize agar image 2MB se badi hai
    if get_file_size_mb(image_path) > MAX_SIZE_MB:
        img.thumbnail((1600, 1600))

    webp_path = image_path.rsplit('.', 1)[0] + '.webp'
    img.save(webp_path, format='WEBP', quality=70)

    thumb_img = img.copy()
    thumb_img.thumbnail(THUMBNAIL_SIZE)
    thumb_path = image_path.rsplit('.', 1)[0] + '_thumb.webp'
    thumb_img.save(thumb_path, format='WEBP', quality=80)

    # Purani file hata do
    if os.path.exists(image_path):
        os.remove(image_path)

    return webp_path, thumb_path

def process_image_field(instance, field_name):
    """Handle compression for a specific image field."""
    image_field = getattr(instance, field_name)
    if image_field and not str(image_field).lower().endswith('.webp'):
        if hasattr(image_field, 'path'):
            webp_path, thumb_path = compress_and_thumbnail(image_field.path)
            if webp_path:
                relative_webp_path = image_field.name.rsplit('.', 1)[0] + '.webp'
                setattr(instance, field_name, relative_webp_path)
                instance.save(update_fields=[field_name])


# ✅ 1. Setting Model
@receiver(post_save, sender=Setting)
def compress_setting_images(sender, instance, **kwargs):
    for field in ['configuration_bg', 'logo', 'logo_2', 'icon', 'virtual_site_visit']:
        process_image_field(instance, field)


# ✅ 2. Web_Slider Model
@receiver(post_save, sender=Web_Slider)
def compress_web_slider_images(sender, instance, **kwargs):
    for field in ['web_image', 'mobile_image']:
        process_image_field(instance, field)


# ✅ 3. Overview Model
@receiver(post_save, sender=Overview)
def compress_overview_images(sender, instance, **kwargs):
    for field in ['web_image', 'mobile_image']:
        process_image_field(instance, field)


# ✅ 4. Unique_Selling_Proposition Model
@receiver(post_save, sender=Unique_Selling_Proposition)
def compress_usp_images(sender, instance, **kwargs):
    for field in ['icone', 'icone2']:
        process_image_field(instance, field)


# ✅ 5. Amenities Model
@receiver(post_save, sender=Amenities)
def compress_amenities_images(sender, instance, **kwargs):
    process_image_field(instance, 'icone')


# ✅ 6. Gallery Model
@receiver(post_save, sender=Gallery)
def compress_gallery_images(sender, instance, **kwargs):
    process_image_field(instance, 'web_image')


# ✅ 7. Welcometo Model
@receiver(post_save, sender=Welcometo)
def compress_welcome_images(sender, instance, **kwargs):
    process_image_field(instance, 'web_image')


# ✅ 8. Maharera Model
@receiver(post_save, sender=Maharera)
def compress_maharera_images(sender, instance, **kwargs):
    process_image_field(instance, 'qr_image')
