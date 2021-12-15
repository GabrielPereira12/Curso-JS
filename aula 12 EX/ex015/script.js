function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('input#txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] ANO INVALIDO! TENTE NOVAMENTE!')
    }else {
        var fsex = window.document.getElementsByName('sexv')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto') //é como ir ao HTML e dizer manualmente o id!!!
        if (fsex[0].checked) {
            genero = 'Masculino'
            document.body.style.background = 'rgb(52, 52, 255)'
            if (idade >= 0 && idade < 14) {
                //criança
                img.setAttribute('src', 'criançaH.png')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemH.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultoH.png')
            }else {
                //idoso
                img.setAttribute('src', 'idosoH.png')
            }
        }else if (fsex[1].checked) {
            genero = 'Feminino'
            document.body.style.background = 'rgb(255, 113, 137)'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'criançaM.png')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemM.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultoM.png')
            }else {
                //idoso
                img.setAttribute('src', 'idosoM.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        res.appendChild(img)
    }
}