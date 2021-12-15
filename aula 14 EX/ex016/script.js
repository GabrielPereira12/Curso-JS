function contar() {
    var inc = window.document.querySelector('input#txti')
    var fim = window.document.querySelector('input#txtf')
    var pas = window.document.querySelector('input#txtp')
    var res = window.document.querySelector('div#res')
    
    var i = Number(inc.value)
    var f = Number(fim.value)
    var p = Number(pas.value)

    if (inc.value.length == 0 || fim.value.length == 0) {
        window.alert('Valores inválidos! Tente novamente!!!')
    }else {
        res.innerHTML = 'Contando...<br/>'
        if (pas.value.length == 0 || pas.value <= 0) {
            window.alert('Valor de passo inválido!!! Definido automaticamente como 1!')
            p = 1

            if (i > f) {
                for (var cont = i ; cont >= f; cont -= p) {
                    res.innerHTML += `➡️ ${cont}`
                }
            }else{
                for (var cont = i ; cont <= f; cont += p) {
                    res.innerHTML += `➡️ ${cont}`
                }
            }
        }else{
            if (i > f) {
                for (var cont = i ; cont >= f; cont -= p) {
                    res.innerHTML += `➡️ ${cont}`
                }
            }else {
                for (var cont = i ; cont <= f; cont += p) {
                    res.innerHTML += `➡️ ${cont}`
            }
        }
        }
        res.innerHTML += '🚩'
    }
}