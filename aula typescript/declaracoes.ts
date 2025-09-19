// Declarações de variáveis
let nome: string = 'João';
let idade: number = 25;
let estadoAtivo: boolean = true;

// Arrays
let numeros: number[] = [1, 2, 3, 4, 5];
let nomes: string[] = ['Ana', 'Bruno', 'Carlos'];
let misto: (string | number)[] = ['Ana', 25, 'Carlos', 30];
let misto2: Array<string | number> = ['Ana', 25, 'Carlos', 30];

// Tuplas
let pessoa: [string, number] = ['Maria', 30];

// Union Types
let id: number | string = 123;
let id2: string = 'ABC123';

// Interfaces - são usadas para definir estrutura de objetos
interface Usuario {
  nome: string;
  idade: number;
  email?: string; // Opcional
}

// Utilizar as ficas assim:
let novo_usuario: Usuario = {
  nome: 'Amanda',
  idade: 18
};
