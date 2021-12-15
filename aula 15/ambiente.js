let num = [6, 2, 4, 1, 7] //criação do array

num[5] = 3 //mudando o valor do elemento com chave 5

num.push(5) //adicionando um valor para um novo elemento

let tam = num.length //quantidade de elementos no array

console.log(`Os valores no vetor são: ${num} e ele tem ${tam} elementos`)

// console.log(`${num.sort()}`) // valores do array em ordem crescente (do menor para o maior)

console.log()

/*
for (let pas = 0; pas < tam; pas++) {

    console.log(`Valor na posição ${pas}: ${num[pas]}`)
}
funciona como o debaixo
*/


for (let pas in num) {
    console.log(`Valor na posição ${pas}: ${num[pas]}`)
}


console.log()
console.log(num.indexOf(4))  // mostra a chave onde se econtra o valor pedido, caso não haja esse valor, será retornado -1