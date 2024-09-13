const ask = require('readline-sync')
// 1. 
// Crie um array 'time' com os nomes ["Pedro", "Carlos", "Vinícius Júnior", "Guiñazu", "Roberto Carlos", "Ronaldinho Gaúcho"]. Verifique se "Roberto Carlos" está no array. Se sim, converta todos os nomes para maiúsculas e adicione "PERNA DE FUGUETE" ao final do nome de Roberto Carlos. Depois imprima todo o Array na tela.
let time = ["Pedro", "Carlos", "Vinícius Júnior", "Guiñazu", "Roberto Carlos", "Ronaldinho Gaúcho"]
let verificar = time.includes('Roberto Carlos')
let maius
if (verificar === true) {
    maius = 'Roberto Carlos'.toUpperCase()
    console.log(maius, 'PERNA DE FUGUETE')
}





// 2. Pokemon
// Crie um array 'pokemons' com os nomes ["Bulbasaur", "Charmander", "Eevee", "Totodyle"]. Adicione "Squirtle" ao início, remova o último Pokémon, e verifique se "Pikachu" está no array. Se não estiver, adicione "Pikachu" ao final.
let pokemons = ["Bulbasaur", "Charmander", "Eevee", "Totodyle"]
pokemons.unshift('Squirtle')
pokemons.pop()
pokemons.includes('Pikachu')
if (pokemons.includes('Pikachu') === false) {
    pokemons.push('Pikachu')
}
console.log(pokemons)
// 3. 
// Crie um array 'agentes' com os nomes ["Sage", "Jett", "Phoenix"]. Verifique se "Jett" está no array, descubra seu índice (pesquise como fazer isso se necessário) e substitua por "Raze". Retorne o array modificado.
let agentes = ["Sage", "Jett", "Phoenix"]
agentes.includes('Jett')
agentes.indexOf('Jett')
agentes.splice(1, 1, 'Raze')
console.log(agentes.includes('Jett'), agentes.indexOf('Jett'), agentes)
// 4.
// Crie um array 'grifinoria' com os nomes ["Hermione", "Ron", "Neville"]. Remova o primeiro nome, adicione "Harry" ao início, e verifique se "Ron" está no array. Se sim, retorne o seu nome em maiúsculas.
let grifinoria = ["Hermione", "Ron", "Neville"]
grifinoria.splice(0, 1, 'Harry')
if (grifinoria.includes('Ron')) {
    console.log('Ron'.toUpperCase())
}

/* 5.
Você foi contratado pelo governo imperial para criar um sistema que gerencie a produção e distribuição de especiarias em Arrakis. O sistema deve permitir que o usuário insira o nome do líder da operação, o tipo de operação (CO para coleta, EX para extração, TR para transporte), e a quantidade de especiaria coletada em toneladas. Dependendo do tipo de operação e da quantidade de especiaria, o sistema deve calcular o valor total de lucro esperado, considerando os seguintes fatores:

    - Operações de coleta (CO) têm um lucro de 1000 solaris por tonelada.
    - Operações de extração (EX) têm um lucro de 2000 solaris por tonelada, mas se a quantidade for superior a 50 toneladas, o lucro por tonelada aumenta para 2500 solaris.
    - Operações de transporte (TR) têm um lucro de 1500 solaris por tonelada, mas se a quantidade for inferior a 20 toneladas, há uma taxa adicional de 500 solaris por tonelada.

O sistema deve imprimir o nome do líder, o tipo de operação, a quantidade de especiaria e o lucro total esperado.
*/
// let nomeDoLider = ask.question('Qual o nome do lider?')
// let tipoDeColeta = ask.question('Tipo de operaçao: CO para coleta, EX para extraçao, TR para transporte')
// let quantidadeDeEspeciaria = Number(ask.question('Qual a quantidade de especiarias coletada em toneladas'))
// let lucro
// switch(tipoDeColeta.toUpperCase()){
//     case 'CO':
//         lucro = quantidadeDeEspeciaria * 1000
//     case 'EX':
//         if(quantidadeDeEspeciaria>50){
//             lucro = quantidadeDeEspeciaria * 2500
//         }else{
//             lucro = quantidadeDeEspeciaria * 2000}
//         break
//     case 'TR':
//         if(quantidadeDeEspeciaria<20){
//             lucro = quantidadeDeEspeciaria * 1000//////////(quantidadeDeEspeciaria * -500)
//         }else{
//             lucro = quantidadeDeEspeciaria * 1500}
//         break
//         }
// console.log(nomeDoLider, tipoDeColeta, quantidadeDeEspeciaria, quantidadeDeEspeciaria, lucro)








// 6.
// Crie uma string 'nome' com o valor "  Alvo Dumbledore  ". Remova os espaços, transforme o nome para maiúsculas e retorne a quantidade de caracteres do nome.
let nome = ' Alvo Dumbledore '
let rem = nome.trim()
let maius1 = rem.toUpperCase()
let cont = maius.length
console.log(rem, maius1, cont)

//7.
// Crie um array 'naves' com os nomes ["X-Wing", "TIE Fighter", "Millennium Falcon"]. Remova a última nave, adicione "Star Destroyer" ao início do array, e verifique se "TIE Fighter" está no array.
let naves = ["X-Wing", "TIE Fighter", "Millennium Falcon"]
naves.splice(2, 1)
naves.unshift('Star Destroyer')
naves.includes('TIE Fighter')
console.log(naves)

/*8.
Você foi contratado pela WOOHP para criar um sistema de planejamento de missões. Para cada missão, os detalhes incluem o nome da espiã, o tipo de missão (RE para resgate, IN para infiltração, DE para desativação) e o nível de risco da missão (AL para alto, ME para médio, BA para baixo). Dependendo da combinação do tipo de missão e do nível de risco, o sistema deve determinar o tempo estimado de conclusão e a quantidade de gadgets necessários:
    - Missões de resgate (RE) com alto risco (AL) levam 5 horas e requerem 4 gadgets, missões de risco médio (ME) levam 3 horas e requerem 3 gadgets, e de baixo risco (BA) levam 2 horas com 2 gadgets.
    - Missões de infiltração (IN) sempre levam 4 horas, mas o número de gadgets depende do risco: 5 gadgets para AL, 3 para ME e 2 para BA.
    - Missões de desativação (DE) têm um tempo fixo de 6 horas, independentemente do risco, mas o número de gadgets é 3 para AL, 2 para ME e 1 para BA.
O sistema deve imprimir o nome da espiã, o tipo de missão, o nível de risco, o tempo estimado de conclusão e a quantidade de gadgets necessários.
*/
let nomeDaEspia = ask.question('Qual o nome da espia?')
let tipoDeMissao = ask.question('Tipo de missao: RE para resgate, IN para infiltração, DE para desativação').toUpperCase()
let nivelDeRisco = ask.question('Qual o nivel de risco: AL para alto, ME para médio, BA para baixo').toUpperCase()
let tempoEstimado
let quantidadeDeGadgets

if (tipoDeMissao === 'RE', nivelDeRisco === 'AL') {
    tempoEstimado = '5 horas'
    quantidadeDeGadgets = '4 gadgets'
}
else if (tipoDeMissao === 'RE', nivelDeRisco === 'ME') {
    tempoEstimado = '3 horas'
    quantidadeDeGadgets = '3 gadgets'
}
else if (tipoDeMissao === 'RE', nivelDeRisco === 'BA') {
    tempoEstimado = '2 horas'
    quantidadeDeGadgets = '2 gadgets'
}

/////////

else if (tipoDeMissao === 'IN', nivelDeRisco === 'AL') {
    tempoEstimado = '4 horas'
    quantidadeDeGadgets = '3 gadgets'
}
else if (tipoDeMissao === 'IN', nivelDeRisco === 'ME') {
    tempoEstimado = '4 horas'
    quantidadeDeGadgets = '2 gadgets'
}
else if (tipoDeMissao === 'IN', nivelDeRisco === 'BA') {
    tempoEstimado = '4 horas'
    quantidadeDeGadgets = '1 gadget'
}

/////////

else if (tipoDeMissao === 'DE', nivelDeRisco === 'AL') {
    tempoEstimado = '6 horas'
    quantidadeDeGadgets = '3 gadgets'
}
else if (tipoDeMissao === 'DE', nivelDeRisco === 'ME') {
    tempoEstimado = '6 horas'
    quantidadeDeGadgets = '2 gadgets'
}
else if (tipoDeMissao === 'DE', nivelDeRisco === 'BA') {
    tempoEstimado = '6 horas'
    quantidadeDeGadgets = '1 gadget'
}
console.log(`O nome da sua espiã é ${nomeDaEspia}, seu tipo de missão é ${tipoDeMissao}, o nível de risco é ${nivelDeRisco}, tempo estimado é de ${tempoEstimado} e a quantidade de gadgets é ${quantidadeDeGadgets}`)

/*9.
Descrição do problema: Você foi contratado para desenvolver um sistema que organize e distribua missões ninjas em Konoha. Cada missão tem um líder ninja, um tipo de missão (A para missões de rank A, B para missões de rank B, C para missões de rank C), e uma região de destino (NV para nas vilas, FL para florestas, MO para montanhas). Dependendo da combinação de tipo de missão e região, o sistema deve determinar a dificuldade da missão e o pagamento total:
    - Missões de rank A nas vilas (NV) têm uma dificuldade "Alta" e um pagamento de 5000 ryous, nas florestas (FL) a dificuldade é "Muito Alta" e o pagamento é de 7000 ryous, e nas montanhas (MO) a dificuldade é "Extrema" com um pagamento de 10000 ryous.
    - Missões de rank B nas vilas têm uma dificuldade "Média" e um pagamento de 3000 ryous, nas florestas a dificuldade é "Alta" e o pagamento é de 5000 ryous, e nas montanhas a dificuldade é "Muito Alta" com um pagamento de 7000 ryous.
    - Missões de rank C nas vilas têm uma dificuldade "Baixa" e um pagamento de 1000 ryous, nas florestas a dificuldade é "Média" e o pagamento é de 3000 ryous, e nas montanhas a dificuldade é "Alta" com um pagamento de 5000 ryous.
O sistema deve imprimir o nome do líder ninja, o tipo de missão, a região, a dificuldade e o pagamento total.
*/

let liderNinja = ask.question('Qual o nome do ninja lider?')
let tipoDeMissaoNinja = ask.question('Qual o tipo de missão: A para missões de rank A, B para missões de rank B, C para missões de rank C').toUpperCase()
let regiaoDeDestino = ask.question('Qual seu destino? NV para nas vilas, FL para florestas, MO para montanhas').toUpperCase()
let dificuldadeNinja
let pagamento
switch (tipoDeMissaoNinja) {
    case 'A':
        if (regiaoDeDestino === 'NV') {
            dificuldadeNinja = 'Alta'
            pagamento = 5000
        }
        else if (regiaoDeDestino === 'FL') {
            dificuldadeNinja = 'Muito Alta'
            pagamento = 7000
        }
        else if (regiaoDeDestino === 'MO') {
            dificuldadeNinja = 'Extrema'
            pagamento = 10000
        }
    case 'B':
        if (regiaoDeDestino === 'NV') {
            dificuldadeNinja = 'Média'
            pagamento = 3000
        }
        else if (regiaoDeDestino === 'FL') {
            dificuldadeNinja = 'Alta'
            pagamento = 5000
        }
        else if (regiaoDeDestino === 'MO') {
            dificuldadeNinja = 'Muito Alta'
            pagamento = 7000
        }
    case 'C':
        if (regiaoDeDestino === 'NV') {
            dificuldadeNinja = 'Baixa'
            pagamento = 1000
        }
        else if (regiaoDeDestino === 'FL') {
            dificuldadeNinja = 'Média'
            pagamento = 3000
        }
        else if (regiaoDeDestino === 'MO') {
            dificuldadeNinja = 'Alta'
            pagamento = 5000
        }
    break
}
console.log(`O nome do seu líder ninja é ${liderNinja}, seu tipo de missão é ${tipoDeMissaoNinja}, na região ${regiaoDeDestino},com dificuldade ${dificuldadeNinja} e o pagamento é ${pagamento}`)
