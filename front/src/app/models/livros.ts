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
    desconto?:string|null,
    disponivel?:string|null,
    dimensoes?:string|null,
    peso?:string|null,
}