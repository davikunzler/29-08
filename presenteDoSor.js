/*
▄▄▄ .▐▄• ▄ ▄▄▄ .▄▄▄   ▄▄· ▪   ▄▄· ▪        .▄▄ ·     ·▄▄▄▄  ▄▄▄ .
▀▄.▀· █▌█▌▪▀▄.▀·▀▄ █·▐█ ▌▪██ ▐█ ▌▪██ ▪     ▐█ ▀.     ██▪ ██ ▀▄.▀·
▐▀▀▪▄ ·██· ▐▀▀▪▄▐▀▀▄ ██ ▄▄▐█·██ ▄▄▐█· ▄█▀▄ ▄▀▀▀█▄    ▐█· ▐█▌▐▀▀▪▄
▐█▄▄▌▪▐█·█▌▐█▄▄▌▐█•█▌▐███▌▐█▌▐███▌▐█▌▐█▌.▐▌▐█▄▪▐█    ██. ██ ▐█▄▄▌
 ▀▀▀ •▀▀ ▀▀ ▀▀▀ .▀  ▀·▀▀▀ ▀▀▀·▀▀▀ ▀▀▀ ▀█▄▀▪ ▀▀▀▀     ▀▀▀▀▀•  ▀▀▀ 

  ██████ ▄▄▄█████▓ ██▀███   ██▓ ███▄    █   ▄████   ██████ 
▒██    ▒ ▓  ██▒ ▓▒▓██ ▒ ██▒▓██▒ ██ ▀█   █  ██▒ ▀█▒▒██    ▒ 
░ ▓██▄   ▒ ▓██░ ▒░▓██ ░▄█ ▒▒██▒▓██  ▀█ ██▒▒██░▄▄▄░░ ▓██▄   
  ▒   ██▒░ ▓██▓ ░ ▒██▀▀█▄  ░██░▓██▒  ▐▌██▒░▓█  ██▓  ▒   ██▒
▒██████▒▒  ▒██▒ ░ ░██▓ ▒██▒░██░▒██░   ▓██░░▒▓███▀▒▒██████▒▒
▒ ▒▓▒ ▒ ░  ▒ ░░   ░ ▒▓ ░▒▓░░▓  ░ ▒░   ▒ ▒  ░▒   ▒ ▒ ▒▓▒ ▒ ░
░ ░▒  ░ ░    ░      ░▒ ░ ▒░ ▒ ░░ ░░   ░ ▒░  ░   ░ ░ ░▒  ░ ░
░  ░  ░    ░        ░░   ░  ▒ ░   ░   ░ ░ ░ ░   ░ ░  ░  ░  
      ░              ░      ░           ░       ░       ░  
                                                           
*/

// 1. Crie uma variável chamada `fruta1` que contenha a string "MORANGO" e a converta para letras minúsculas.
let fruta1 = 'MORANGO';
let min1 = fruta1.toLowerCase();
// 2. Crie uma constante chamada `animal1` que contenha a string "elefante" e a converta para letras maiúsculas.
const animal1 = 'elefante';
let mai1 = animal1.toUpperCase();
// 3. Crie uma variável chamada `fruta2` com a string "   banana   ", remova os espaços em branco no início e no fim da string.
let fruta2 = '  banana  '
let rem = fruta2.trim()
// 4. Crie uma constante chamada `animal2` com a string "gato, macaco, leão, jabuti, tiramissu", e verifique se a palavra "leão" está incluída nesta string.
const animal2 = "gato, macaco, leão, jabuti, tiramissu";
let src1 = animal2.includes('leão')
// 5. Crie uma variável chamada `fruta3` que contenha a string "abacaxi", substitua todas as letras "a" por "o".
let fruta3 = 'abacaxi'
let subs1 = fruta3.replaceAll('a', 'o')
// 6. Crie uma constante chamada `animal3` que contenha a string "cachorro", e verifique se a palavra "carro" está incluída nela.
const animal3 = 'cachorro'
let src2 = animal3.includes('carro')
// 7. Crie uma variável chamada `fruta4` com a string "laranja", e descubra quantos caracteres existem nesta string.
let fruta4 = 'laranja'
let count = fruta4.length
// 8. Crie uma constante chamada `animal4` com a string "papagaio", e converta toda a string para letras minúsculas e depois para letras maiúsculas. Imprima a constante no console em cada uma destas etapas.
const animal4 = 'papagaio'
let min2 = animal4.toLowerCase();
console.log(min2)
let mai2 = animal4.toUpperCase()
console.log(mai2)
// 9. Crie uma variável chamada `fruta5` com a string "melancia" e substitua todas as letras "i" por "a".
let fruta5 = 'melancia'
let subs2 = fruta5.replaceAll('i', 'a')
// 10. Crie uma constante chamada `animal5` que contenha a string "tigre siberiano de bengala dentes de sabre bionico decepticom ultrawide ergonomico antiderrapante", e verifique se a palavra "sabre" está incluída nesta string.
let animal5 = "tigre siberiano de bengala dentes de sabre bionico decepticom ultrawide ergonomico antiderrapante"
let src3 = animal5.includes('sabre')
/*
▄▄▄ .▐▄• ▄ ▄▄▄ .▄▄▄   ▄▄· ▪   ▄▄· ▪        .▄▄ ·     ·▄▄▄▄  ▄▄▄ .
▀▄.▀· █▌█▌▪▀▄.▀·▀▄ █·▐█ ▌▪██ ▐█ ▌▪██ ▪     ▐█ ▀.     ██▪ ██ ▀▄.▀·
▐▀▀▪▄ ·██· ▐▀▀▪▄▐▀▀▄ ██ ▄▄▐█·██ ▄▄▐█· ▄█▀▄ ▄▀▀▀█▄    ▐█· ▐█▌▐▀▀▪▄
▐█▄▄▌▪▐█·█▌▐█▄▄▌▐█•█▌▐███▌▐█▌▐███▌▐█▌▐█▌.▐▌▐█▄▪▐█    ██. ██ ▐█▄▄▌
 ▀▀▀ •▀▀ ▀▀ ▀▀▀ .▀  ▀·▀▀▀ ▀▀▀·▀▀▀ ▀▀▀ ▀█▄▀▪ ▀▀▀▀     ▀▀▀▀▀•  ▀▀▀ 

   ▄████████    ▄████████    ▄████████    ▄████████ ▄██   ▄      ▄████████ 
  ███    ███   ███    ███   ███    ███   ███    ███ ███   ██▄   ███    ███ 
  ███    ███   ███    ███   ███    ███   ███    ███ ███▄▄▄███   ███    █▀  
  ███    ███  ▄███▄▄▄▄██▀  ▄███▄▄▄▄██▀   ███    ███ ▀▀▀▀▀▀███   ███        
▀███████████ ▀▀███▀▀▀▀▀   ▀▀███▀▀▀▀▀   ▀███████████ ▄██   ███ ▀███████████ 
  ███    ███ ▀███████████ ▀███████████   ███    ███ ███   ███          ███ 
  ███    ███   ███    ███   ███    ███   ███    ███ ███   ███    ▄█    ███ 
  ███    █▀    ███    ███   ███    ███   ███    █▀   ▀█████▀   ▄████████▀  
               ███    ███   ███    ███                                     
*/

// 11. Crie um array chamado `frutas` contendo as frutas "maçã", "banana", "morango". Adicione a fruta "laranja" ao final do array.
let frutas6 = ["maçã", "banana", "morango"]
let add1 = frutas6.push('laranja')
console.log(frutas6)
// 12. Crie um array chamado `animais` contendo os animais "cachorro", "golfinho do irrawady", "leão". Remova o último animal do array.
let animais6 = ["cachorro", "golfinho do irrawady", "leão"]
let rem2 = animais6.pop()
console.log(animais6)
// 13. Crie um array chamado `frutas2` contendo as frutas "abacaxi", "butia", "pera". Adicione "melancia" ao início do array.
let frutas7 = ["abacaxi", "butia", "pera"]
let add2 = frutas7.unshift('melancia')
console.log(frutas7)
// 14. Crie um array chamado `animais2` contendo os animais "cavalo", "vaca", "ovelha". Remova o primeiro animal do array.
let animais7 = ["cavalo", "vaca", "ovelha"]
let rem3 = animais7.splice(0, 1)
console.log(animais7)
// 15. Crie um array chamado `frutas3` contendo as frutas "goiaba", "kiwi", "laranja". Use o método `splice` para substituir "kiwi" por "ameixa".
let frutas8 = ['goiaba','kiwi', 'laranja']
frutas8.splice(1, 1, 'ameixa')
console.log(frutas8)
// 16. Crie um array chamado `animais3` contendo os animais "canguru", "panda", "urso". Use o método `splice` para remover o segundo elemento.
let animais8 = ["canguru", "panda", "urso"]
animais8.splice(1,1)
console.log(animais8)
// 17. Crie um array chamado `frutas4` contendo as frutas "limão", "manga", "jabuticaba". Adicione "abacate" ao final do array e remova "limão".
let frutas17 = ["limão", "manga", "jabuticaba"]
frutas17.push('abacate')
frutas17.splice(0, 1)
console.log(frutas17)
// 18. Crie um array chamado `animais4` contendo os animais "tartaruga", "jacaré", "tamburutaca". Remova o último animal e adicione "capivara" ao final do array.
let animais18 = ["tartaruga", "jacaré", "tamburutaca"]
animais18.splice(2, 1, 'capivara')
console.log(animais18)
// 19. Crie um array chamado `frutas5` contendo as frutas "mamão", "caju", "figo". Use `push` para adicionar "graviola" ao array.
let frutas19 = ["mamão", "caju", "figo"]
frutas19.push('graviola')
console.log(frutas19)
// 20. Crie um array chamado `animais5` contendo os animais "lhama", "pinguim", "foca". Use `pop` para remover o último animal do array.
let animais20 = ["lhama", "pinguim", "foca"]
animais20.pop()
console.log(animais20)
