from django.db import models


class Result(models.Model):
    submittedTime = models.DateTimeField(auto_now_add=True)
    email = models.EmailField(max_length=100)
    birthday = models.DateField()
    pretaxIncome = models.IntegerField()
    investReason = models.CharField(max_length=50)
    lookingFor = models.CharField(max_length=200, default="[]", blank=True)
