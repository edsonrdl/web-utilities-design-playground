function updateHeight(bar) {
    var newHeight = prompt("Digite o novo valor:");
    if (!isNaN(newHeight) && newHeight !== null) {
        bar.style.height = newHeight + "px";
        bar.querySelector('span').textContent = newHeight;
    } else {
        alert("Por favor, insira um valor numérico válido.");
    }
}