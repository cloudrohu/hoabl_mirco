from django.db import models

# Create your models here.


class Response(models.Model):
    name = models.CharField(max_length=100,blank=True,null=True)
    email = models.EmailField(blank=True,null=True)
    phone = models.CharField(max_length=15,blank=True,null=True)

    created_at = models.DateTimeField(auto_now_add=True,blank=True,null=True)  # sets once when created
    updated_at = models.DateTimeField(auto_now=True,blank=True,null=True)  

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Response'
        ordering = ['-created_at']
        # ordering = ['-id']    