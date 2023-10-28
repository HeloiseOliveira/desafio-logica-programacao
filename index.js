// 1️⃣ Desafio Classificador de nível de Herói

//**O Que deve ser utilizado**

//- Variáveis
//- Operadores
//- Laços de repetição
//- Estruturas de decisões

//## Objetivo

//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma //estrutura de decisão para apresentar alguma das mensagens abaixo:

// Defina o nome do herói e a quantidade de experiência (XP)
const nomeDoHeroi = "Arthur";
const xpDoHeroi = 9002; // Atualize o valor de acordo com a XP do herói

// Variável para armazenar o nível
let nivelDoHeroi;

// Utilize a estrutura de decisão para determinar o nível com base na XP
//Se XP for menor do que 1.000 = Ferro 
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 6.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante

if (xpDoHeroi < 1000) {
  nivelDoHeroi = "Ferro";
} else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
  nivelDoHeroi = "Bronze";
} else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
  nivelDoHeroi = "Prata";
} else if (xpDoHeroi >= 6001 && xpDoHeroi <= 7000) {
  nivelDoHeroi = "Ouro";
} else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
  nivelDoHeroi = "Platina";
} else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
  nivelDoHeroi = "Ascendente";
} else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
  nivelDoHeroi = "Imortal";
} else {
  nivelDoHeroi = "Radiante";
}
console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`);

//## Saída

//Ao final deve se exibir uma mensagem:
//"O Herói de nome **{nome}** está no nível de **{nivel}**"