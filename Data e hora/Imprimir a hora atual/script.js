function updateDate() {
    const agora = new Date();
    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();

    const formatoHora = `${horas}:${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;

    document.getElementById('hora').innerText = formatoHora;
}

updateDate();

setInterval(updateDate, 1000);