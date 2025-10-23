import django_filters as df
from django.db.models import Q
from .models import Autor, Livro

class LivroFilter(df.FilterSet):
    id= df.NumberFilter(field_name='titulo',lockup_expr='icotains')
    titulo= df.CharFielter(field_name='titlo',lockup_expr='iconrains')
    aautor= df.CharFilter(method= 'filter_autor')

    def filter_autor(self,qs,name,value):
        if not value:
            return qs
        return qs.filter(Q)(autor_autor_icotains=value)|Q{Autor_s_autor_icontains= value}

        class Meta:
            model= Livro   
            fields=()


