const client = new WebSocket("ws://localhost:8000/");
function carrega() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horario = data.getHours()
    var min = data.getMinutes()
    //var horario = 19
    msg.innerHTML = `Agora são ${horario}:${min} horas!`

    if (horario >= 0 && horario < 13) {
        // BOM DIA
        img.src = 'fotomanha.png'
        img.alt = 'Foto da manhã'
        document.body.style.background = '#bc9a7d'
    }else if (horario > 12 && horario < 18) {
        //BOA TARDE
        img.src = 'fototarde.png'
        img.alt = 'Foto da tarde'
        document.body.style.background = '#fba246'
    }else {
        //BOA NOITE
        img.src = 'fotonoite.png'
        img.alt = 'Foto da noite'
        document.body.style.background = '#10394e'
    }
}