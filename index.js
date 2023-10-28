// 1️⃣ Desafio Classificador de nível de Herói

//**O Que deve ser utilizado**

//- Variáveis
//- Operadores
//- Laços de repetição
//- Estruturas de decisões

//## Objetivo

//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma //estrutura de decisão para apresentar alguma das mensagens abaixo:

let nomeHeroi = Arthur
let quantidadeXp = 9002

if (quantidadeXp <=1000){ console.log("Ferro")
} else if (quantidadeXp > 1001 && quantidadeXp < 2000){ console.log("O Herói de nome: " + " está no nível " +  " Bronze")
} else if (quantidadeXp > 2001 && quantidadeXp <= 5000){ console.log("O Herói de nome: " + " está no nível " + "Prata")
} else if (quantidadeXP > 6001 && quantidadeXp < 8000){ console.log("O Herói de nome: " + " está no nível " + "Platina")
} else if (quantidadeXp > 8001 && quantidadeXp < 9000){ console.log("O Herói de nome: " + " está no nível " + "Ascendente")
} else if (quantidadeXp > 9001 && quantidadeXp < 10000){ console.log("O Herói de nome: " + " está no nível " + "Imortal")
} else (quantidadeXp > 10001) { console.log("O Herói de nome: " + " está no nível " + "Radiante")}

//Se XP for menor do que 1.000 = Ferro 
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 6.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante

//## Saída

//Ao final deve se exibir uma mensagem:
//"O Herói de nome **{nome}** está no nível de **{nivel}**"