from django.urls import path
from .views import  *

urlpatterns = [
    path('authors',listar_autores),
    
    #### GET E POST
    path('autores',AutoresView.as_view()),
    path('editoras', EditorasView.as_view()),
    path('livros',LivrosView.as_view()),

    ##### UPDATE e DELET
    path('autor/<int:pk>',AutoresDetailView.as_view()),
    path('editora/<int:pk>',editoresDetailView.as_view()),
    path('livro/<int:pk>', LivrosDetailView.as_view()),


]
