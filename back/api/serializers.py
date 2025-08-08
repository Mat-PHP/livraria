from rest_framework import serializers
from. models import Autor

class Autorserializer(serializers.ModelSerializer):
    class Meta:
        model= Autor
        fields='__all__'
        