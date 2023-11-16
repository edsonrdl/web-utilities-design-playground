function updateDate() {
    const agora = new Date();
    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();

    const formatoHora = `${horas}:${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;

    document.getElementById('hora-atual').innerText = formatoHora;
}

// Chama a função inicialmente
updateDate();

// Atualiza a hora a cada minuto (60 segundos)
setInterval(atualizarHora, 60000);