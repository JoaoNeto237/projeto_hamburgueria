document.addEventListener("DOMContentLoaded", (event) => {
    const pedido = JSON.parse(localStorage.getItem('pedido'));
    const totalStr = localStorage.getItem('total');
    const detalhesPedido = document.getElementById('detalhes-pedido');

    if (!pedido || !totalStr) {
        console.error("Pedido ou total não encontrado no localStorage");
        return;
    }

    const total = parseFloat(totalStr);
    
    let detalhesHtml = '<ul>';
    for (let item in pedido) {
        detalhesHtml += `<li>${item}: ${pedido[item].quantidade} = R$ ${pedido[item].subtotal.toFixed(2)}</li>`;
    }
    detalhesHtml += '</ul>';

    detalhesPedido.innerHTML = detalhesHtml;
    
    let infoText = "Total do Pedido: R$ " + total.toFixed(2);
    
    if (total < 80) {
        infoText += "<br> Subtotal R$ " + (total + 15).toFixed(2);
    } else {
        infoText += "<br>Subtotal : R$ " + total.toFixed(2);
    }
    
    document.getElementById("info").innerHTML = infoText;
});
