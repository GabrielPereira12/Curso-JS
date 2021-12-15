let num = document.querySelector('input#txtn')
let list = document.querySelector('select#txtl')
let res = document.querySelector('div#res')
let ary = []


function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return false
    } else {
        return true
    }
}

function adicionar() {
    if (isNumero(num.value) && inLista(num.value, ary)) {
        ary.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${Number(num.value)} adicionado!`
        list.appendChild(item)
        res.innerHTML = ''
    }else {
        window.alert('Valor invalido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function resposta() {
    if (ary.length == 0) {
        window.alert('Adicione um valor a lista!!!')
   }else {
        let tot = ary.length
        let maior = ary[0]
        let menor = ary[0]
        let soma = 0
        let media = 0
        for (let pos in ary) {
            soma += ary[pos]
            if (ary[pos] < menor) {
                menor = ary[pos]
            }
            if (ary[pos] > maior) {
                maior = ary[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}.`
        res.innerHTML += `<p>A média dos valores é ${media}.`
   }
}