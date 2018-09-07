from rest_framework import serializers
from api.models import Result
import json


class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Result
        fields = ('id', 'submittedTime', 'email', 'birthday', 'pretaxIncome', 'investReason', 'lookingFor')