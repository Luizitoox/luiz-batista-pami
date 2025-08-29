let n1 = 14;
let n2 = 5;
// Pascal Case = NomeVAriavel (primeira letra da palavra é sempre maiuscula)
//Camel Case = nomrVariavelm (primeira letra da palavra é minuscula e o restante começa com maiuscula)
//Kabad Case = nome-variavel (tanto faz se comaça com minuscula ou maiuscula, o imporatante é sempre separar por hífen)
//Snake Case = nome_variavel (tanto faz se começa com minuscula ou maiuscula, o importante é separar por underlin

function Soma() {
    console.log(16 + 1);
}
Soma();
//função simples que não recebe parâmetros

function SomaComParâmetros(a, b){
    let resultado = a + b;
    return resultado;
}
console.log(SomaComParâmetros(n1, n2));