export interface  Livros{
    id:number
    titulo:string;
    subtitulo?: string|null;
    autor?:|null;
    editora?: string|null;
    isbn?:string|null;
    descricao?:string|null;
    idioma?:string|null;
    ano?:string|null;
    paginas?:string|null;
    preco ?:string|null;
    estoque?:string|null;
    







class Livro(models.Model):
    titulo = models.CharField(max_length=50)
    subtitulo = models.CharField(max_length=255)    
    autor = models.ForeignKey(Autor, on_delete=models.CASCADE)
    editora = models.ForeignKey(Editora, on_delete=models.CASCADE)      #Ligado à tabela de editoras
    isbn = models.CharField(max_length=255)	                            #Código ISBN (único por edição)
    descricao = models.TextField()	                                    #Resumo ou sinopse do livro
    idioma = models.CharField(max_length=255, default="Português")	    #Ex: Português, Inglês
    ano = models.IntegerField()	                                        #IntegerField	Ano de publicação
    paginas = models.IntegerField()         	                        #IntegerField	Número de páginas
    preco = models.DecimalField(max_digits=10, decimal_places=2) 	    #DecimalField	Preço de venda
    estoque = models.IntegerField()	                                    #IntegerField	Quantidade disponível
    desconto = models.DecimalField(max_digits=10, decimal_places=2)	    #DecimalField (opcional)	Valor percentual de desconto
    disponivel = models.BooleanField(default=True)	                    #BooleanField	Se está ativo no catálogo
    dimensoes =	models.CharField(max_length=255)                        #CharField	Tamanho físico do livro
    peso =	models.DecimalField(max_digits=10, decimal_places=2)        #DecimalField	Peso em gramas, se for físico
    