from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    # ajouter des champs personnalisés ici plus tard
    pass

    def __str__(self):
        return self.username
