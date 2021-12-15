function tabuar() {
    var num = window.document.getElementById('num')
    var res = window.document.getElementById('res')

    if (num.value.length == 0) {
        window.alert('Valor inválido! Por favor digite um número!')
    }else{
        let n = Number(num.value)
        res.innerHTML = ''
        for (c = 1; c <=10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${c*n}`
            item.value = `tab${c}`
            res.appendChild(item)
        }
    }
    
}