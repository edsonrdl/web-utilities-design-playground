function updateDate() {
    const agora = new Date();
    const dia = agora.getDate();
    const mes = agora.getMonth() + 1; 
    const ano = agora.getFullYear();

    const formatoData = `${dia < 10 ? '0' : ''}${dia}/${mes < 10 ? '0' : ''}${mes}/${ano}`;

    document.getElementById('data-actual').innerText = formatoData;
}


updateDate();


setInterval(() => {
    const agora = new Date();
    if (agora.getHours() === 0 && agora.getMinutes() === 0 && agora.getSeconds() === 0) {
        atualizarData();
    }
}, 1000); 