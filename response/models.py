from django.db import models

# Create your models here.


class Response(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)

    created_at = models.DateTimeField(auto_now_add=True,blank=True,null=True)  # sets once when created
    updated_at = models.DateTimeField(auto_now=True,blank=True,null=True)  

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Response'
        ordering = ['-created_at']
        # ordering = ['-id']    