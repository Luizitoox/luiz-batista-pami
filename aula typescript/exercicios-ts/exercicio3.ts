//Exercicio de Interface
interface Livros {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

//Criando um objeto do tipo Livro
let novo_livro: Livros = {
    titulo: 'A Revolta dos Perversos',
    autor: 'Luiz Batista',
    anoPublicacao: 24.09
}

//Utilizando função para o interface Livros
function exibirLivros(livros: Livros): void {
    console.log (`Título: ${livros.titulo}`);
    console.log (`Autor: ${livros.autor}`);
    console.log (`Publicação: ${livros.anoPublicacao}`);
}