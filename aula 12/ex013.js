var agora = new Date()
var diasem = agora.getDay()

/*
    0 - domingo
    1 - segunda
    2 - terça
    3 - quarta
    4 - quinta
    5 - sexta
    6 - sábado
*/

switch (diasem) {
    case 0:
        console.log('Hojé é domingo!')
        break
    case 1:
        console.log('Hojé é segunda-feira!')
        break
    case 2:
        console.log('Hojé é terça-feira!')
        break
    case 3:
        console.log('Hojé é quarta-feira!')
        break
    case 4:
        console.log('Hojé é quinta-feira!')
        break
    case 5:
        console.log('Hojé é sexta-feira!')
        break
    case 6:
        console.log('Hojé é sábado!')
        break
    default:
        console.log('[E R R O]  DIA INVÁLIDO  [E R R O]')
        break
}