const ask = require("readline-sync")
let querContinuar = true
let numIgual
let numero1Cop
let numero2Cop
let numero1
let numero2
function somar(num1, num2) {
    let resultado = num1 + num2
    return resultado
}
function subtrair(num1, num2) {
    let resultado = num1 - num2
    return resultado
}
function multiplicar(num1, num2) {
    let resultado = num1 * num2
    return resultado
}
function dividir(num1, num2) {                                
    let resultado = num1 / num2
    return resultado
}
function mod(num1, num2) {
    let resultado = num1 % num2
    return resultado
}
function calculadora(){
while (querContinuar) {                                                        
    if (numIgual === true) {
        numero1 = numero1Cop
        numero2 = numero2Cop
    } else {
        numero1 = Number(ask.question(`Qual o primeiro numero: `))
        numero2 = Number(ask.question(`Qual o segundo numero: `))
    }
    console.clear()
    let operacao = Number(ask.question(`
Seus numeros sao: ${numero1} e ${numero2}
Qual sera a operacao?    
-----------------------------------------------------
Soma                    - 1
Subtracao               - 2
Multiplicacao           - 3
Dividir                 - 4
Calculo de mod          - 5
Reinserir novos numeros - 6
Sair                    - 0
-----------------------------------------------------
Resposta: `))
    console.clear()
    switch (operacao) {                                                                
        case 1:                                                                       
            console.log(`${numero1} + ${numero2} = ${somar(numero1, numero2)}`)
            console.log(`
-----------------------------------------------------
Seus numeros sao: ${numero1} e ${numero2}
-----------------------------------------------------
            `)
            numIgual = ask.question(`Quer usar os mesmo numeros (Sim ou Nao): `)
            if (numIgual.toUpperCase() === `SIM`) {
                numero1Cop = numero1
                numero2Cop = numero2
                numIgual = true
            }
            break
        case 2:                                                                           
            console.log(`${numero1} - ${numero2} = ${subtrair(numero1, numero2)}`)
            console.log(`
-----------------------------------------------------
Seus numeros sao: ${numero1} e ${numero2}
-----------------------------------------------------
            `)
            numIgual = ask.question(`Quer usar os mesmo numeros (Sim ou Nao): `)
            if (numIgual.toUpperCase() === `SIM`) {
                numero1Cop = numero1
                numero2Cop = numero2
                numIgual = true
            }
            break
        case 3:                                                                            
            console.log(`${numero1} * ${numero2} = ${multiplicar(numero1, numero2)}`)
            console.log(`
-----------------------------------------------------
Seus numeros sao: ${numero1} e ${numero2}
-----------------------------------------------------
            `)
            numIgual = ask.question(`Quer usar os mesmo numeros (Sim ou Nao): `)
            if (numIgual.toUpperCase() === `SIM`) {
                numero1Cop = numero1
                numero2Cop = numero2
                numIgual = true
                
            }
            break
        case 4:                                                                           
            console.log(`${numero1} / ${numero2} = ${dividir(numero1, numero2)}`)
            console.log(`
-----------------------------------------------------
Seus numeros sao: ${numero1} e ${numero2}
-----------------------------------------------------
            `)
            numIgual = ask.question(`Quer usar os mesmo numeros (Sim ou Nao): `)
            if (numIgual.toUpperCase() === `SIM`) {
                numero1Cop = numero1
                numero2Cop = numero2
                numIgual = true
            }
            break
        case 5:                                                                          
            console.log(`${numero1} % ${numero2} = ${mod(numero1, numero2)}`)
            console.log(`
-----------------------------------------------------
Seus numeros sao: ${numero1} e ${numero2}
-----------------------------------------------------
            `)
            numIgual = ask.question(`Quer usar os mesmo numeros (Sim ou Nao): `)
            if (numIgual.toUpperCase() === `SIM`) {
                numero1Cop = numero1
                numero2Cop = numero2
                numIgual = true
            }
            break
        case 6:                                                                            
            querContinuar = true
            numIgual = false
            break
        case 0:                                                                           
            querContinuar = false
            break
        default:                                                                          
            console.log(`Operacao invalida`)
            break
    }
    console.clear()
}
}
calculadora()
