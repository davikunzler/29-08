const ask = require('readline-sync')

let nomeCompleto = ask.question('Qual seu nome?')
let tipoDeJogo = ask.question('Qual tipo de jogo?')
let etapaDoJogo = ask.question('Qual etapa?')
let categoria = Number(ask.question('Qual a categoria?'))
let quantidade = Number(ask.question('Quantos ingressos?'))
let soma
//semis
if(tipoDeJogo === 'DO', etapaDoJogo === 'SF', categoria === 1){
    soma = 1320.00
}
else if(tipoDeJogo === 'DO', etapaDoJogo === 'SF', categoria === 2){
    soma = 880.00
}
else if(tipoDeJogo === 'DO', etapaDoJogo === 'SF', categoria === 3){
    soma = 550.00
}
else if(tipoDeJogo === 'DO', etapaDoJogo === 'SF', categoria === 4){
    soma = 220.00
}
//DT
else if(tipoDeJogo === 'DO', etapaDoJogo === 'DT', categoria === 1){
    soma = 660.00
}else if(tipoDeJogo === 'DO', etapaDoJogo === 'DT', categoria === 2){
    soma = 440.00
}else if(tipoDeJogo === 'DO', etapaDoJogo === 'DT', categoria === 3){
    soma = 330.00
}else if(tipoDeJogo === 'DO', etapaDoJogo === 'DT', categoria === 4){
    soma = 170.00
}
//FI
else if(tipoDeJogo === 'DO', etapaDoJogo === 'FI', categoria === 1){
    soma = 1980.00
}else if(tipoDeJogo === 'DO', etapaDoJogo === 'FI', categoria === 2){
    soma = 1320.00
}else if(tipoDeJogo === 'DO', etapaDoJogo === 'FI', categoria === 3){
    soma = 880.00
}else if(tipoDeJogo === 'DO', etapaDoJogo === 'FI', categoria === 4){
    soma = 330.00
}

let resultado = soma * quantidade 

if(tipoDeJogo === 'IN'){
    resultado = resultado * 4
}

console.log(`O valor à pagar é ${resultado.toFixed(2)}`)