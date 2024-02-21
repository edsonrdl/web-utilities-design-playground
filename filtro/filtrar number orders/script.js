const pedidos = [
    { numero: 1, descricao: 'Pedido 1' },
    { numero: 2, descricao: 'Pedido 2' },
    { numero: 3, descricao: 'Pedido 3' },
];

function pesquisarPedido() {
    const inputPedido = document.getElementById('input-pedido');
    const numeroPedido = inputPedido.value;
    const resultado = document.getElementById('resultado');

    const pedidoEncontrado = pedidos.find(pedido => pedido.numero == numeroPedido);

    if (pedidoEncontrado) {
        resultado.innerHTML = `Pedido encontrado: ${pedidoEncontrado.descricao}`;
    } else {
        resultado.innerHTML = `Não foi encontrado nenhum pedido com o número ${numeroPedido}`;
    }
}