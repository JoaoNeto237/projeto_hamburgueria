
const ConfirmarPedido = () => {
    const precos = {
        'X-Picanha': 20.00,
        'X-Bacon': 25.00,
        'X-Salada': 15.00,
        'Coxinha': 7.00,
        'Combo2': 50.00,
        'Combo3': 75.00,
        'ComboFritas': 35.00,
        'ComboCoxinha': 32.00
    };
    const descontos = {
        'X-Bacon': 0.05, // 5% OFF
        'X-Salada': 0.05, // 5% OFF
        'Combo2': 0.10, // 10% OFF
        'Combo3': 0.30, // 30% OFF
        'ComboFritas': 0.10, // 10% OFF
        'ComboCoxinha': 0.10 // 10% OFF
    };

    let pedido = {};
    let total = 0;

    for (let produto in precos) {
        let quantidade = parseFloat(document.querySelector(`#${produto}`).value);
        if (!isNaN(quantidade) && quantidade > 0) {
            let valor = precos[produto];
            if (descontos.hasOwnProperty(produto)) {
                valor *= (1 - descontos[produto]);
            }
            pedido[produto] = { quantidade: quantidade, preco: valor, subtotal: quantidade * valor };
            total += quantidade * valor;
        }
    }

    localStorage.setItem('pedido', JSON.stringify(pedido));
    localStorage.setItem('total', total.toFixed(2));
    window.open('finalizar.html', '_blank');
};