// Comentario 
// Javascript é uma linguagem fracamente tipada!

var texto = "Olá"; //aspas duplas sempre contém sempre uma string
let texto2 = 'Mundo'; //ponto e vírgula é opcional
const texto3 = '!'; // aspas simples também serve para string!

console.log(texto, texto2 + texto3);
//virgula concatena com espaço, enquanto o sinal + deixa tudo junto


texto = 'Hello';
let msg = `${texto} ${texto2}${texto3}`;
//use a crase junto de ${} para concatanar
//também
console.log(msg);

//texto3 = 'teste'
//O exemplo acima mostra que é impossível reatribuir um novo valor
//a uma constante


let num = 16;
console.log(typeof num)
//"typerof" ele mostra quel é o tipo da variavel
// no exemplo acima a variavel "16", mostra que o tipo dele é um "number" (número)


let obj = { nome: "Luiz", idade: 37}
console.log(
    "nome da pessoa:", obj.nome,
    "idade do sujeito:", obj.idade    
)
console.log(obj);
console.log(typeof obj);
//objeto é sempre um elemento chave/valor


let arr = ['Luiz', 'F.', 'L.', 'Batista']
console.log(arr)
console.log(arr[0], arr[3])
console.log(typeof arr)