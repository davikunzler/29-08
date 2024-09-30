//Mateus Pohlmann e Davi Kunzler
const ask = require("readline-sync")
let listaDeDoadores = []                                                                                //Lista de doadores

let funciona = true                                                                   //Parametro para o programa funcionar

function cadastrarPessoa() {                                                                        //Cadastrar novo doador
    console.clear()
    let novaPessoa = ask.question(`Qual o seu nome? `)
    let novaIdade = Number(ask.question(`Qual a sua idade? `))
    let novoPeso = Number(ask.question(`Qual o seu peso? `))
    let novoTipoSangue = ask.question(`Qual o seu tipo sanguineo? `).toUpperCase()
    let dia = ask.question(`Qual o dia da ultima doacao que voce fez? `)
    let mes = ask.question(`Qual o mes da ultima doacao que voce fez? `)
    let ano = ask.question(`Qual o ano da ultima doacao que voce fez? `)
    let novoDoador = {
        nome: novaPessoa,
        idade: novaIdade,
        peso: novoPeso,
        tipoSanguineo: novoTipoSangue,
        UltDoacao: {
            dia: dia,
            mes: mes,
            ano: ano,
        }
    }
    listaDeDoadores.push(novoDoador)
    ask.question(`Doador cadastrado, precione ENTER para continuar.`)
    console.clear()
}

function listarDoadores() {                                                                            //Listar os doadores
    if (listaDeDoadores.length > 0) {
        for (let doador of listaDeDoadores) {
            console.log(`
--------------------
LISTAGEM DE DOADORES:
--------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------
      ${doador.nome}      |   ${doador.idade}  |  ${doador.peso}  |    ${doador.tipoSanguineo}          |   ${doador.UltDoacao.dia}/${doador.UltDoacao.mes}/${doador.UltDoacao.ano}
                `)
        }
        console.log(`
-----------------------------------------------------------------`)
        ask.question(`Precione ENTER para continuar.`)
    } else {
        ask.question(`Nenhum doador cadastrado, precione ENTER para continuar.`)
    }
}

function buscarTipo() {                                                                  //Buscar doador por tipo sanguineo
    let tipo = ask.question(`Qual o tipo sanguineo que deseja buscar? `).toUpperCase()
    for (let doador of listaDeDoadores) {
        if (doador.tipoSanguineo === tipo) {
            console.log(`
--------------------
LISTAGEM DE DOADORES:
--------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------
${doador.nome}      |   ${doador.idade}  |  ${doador.peso}  |    ${doador.tipoSanguineo}          |   ${doador.UltDoacao.dia}/${doador.UltDoacao.mes}/${doador.UltDoacao.ano}`)
        } else {
            console.log(`
-----------------------------------------------------------------
Nenhum doador cadastrado`)
        }
    }
    console.log(`
-----------------------------------------------------------------`)
    ask.question(`Precione ENTER para continuar.`)
}

function buscarUltDoacao() {                                                     //Buscar doador pela data da ultima doacao
    let dia = ask.question(`Qual dia voce quer procura? `)
    let mes = ask.question(`Qual mes voce quer procura? `)
    let ano = ask.question(`Qual ano voce quer procura? `)
    for (let doador of listaDeDoadores) {
        if (doador.UltDoacao.dia <= dia) {
            if (doador.UltDoacao.mes <= mes) {
                if (doador.UltDoacao.ano <= ano) {
                    console.log(`
--------------------
LISTAGEM DE DOADORES:
--------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------
${doador.nome}      |   ${doador.idade}  |  ${doador.peso}  |    ${doador.tipoSanguineo}          |   ${doador.UltDoacao.dia}/${doador.UltDoacao.mes}/${doador.UltDoacao.ano}`)
                }
            }
        } else {
            console.log(`
-----------------------------------------------------------------
Nenhum doador cadastrado`)
        }
    }
    console.log(`
-----------------------------------------------------------------`)
    ask.question(`Precione ENTER para continuar.`)
}

function sair() {                                                                                    //Encerrar o programa
    funciona = false
}

while (funciona) {                                                                                                   //Menu
    let resposta = Number(ask.question(`
===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
1. Cadastrar doador
2. Listar doadores
3. Buscar doador por tipo sanguineo
4. Buscar doador por data da ultima doacao
5. Sair
=====================================================
Escolha uma opcao: `))
    console.clear()
    switch (resposta) {                                                                   //Verificar a resposta do usuario
        case 1:
            cadastrarPessoa()
            console.clear()
            break
        case 2:
            listarDoadores()
            console.clear()
            break
        case 3:
            buscarTipo()
            console.clear()
            break
        case 4:
            buscarUltDoacao()
            console.clear()
            break
        case 5:
            sair()
            break
    }
}