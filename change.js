// importe de la compra: 152 euros
// paga: un billete de 200 euros

// billetes de 500€ NOOO.
var wallet = [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50, 100, 200];
var quantityInWallet = [75, 63, 40, 33, 35, 45, 42, 31, 15, 9, 12, 7, 3, 0];

var calcChange = () => {
    //con esto reseteamos cada vez que introducimos una nueva operación.
    document.getElementById("return").innerText = "Devolver:  " + "\n";
    document.getElementById("change").innerText = "Cambio: ";

    var total = document.getElementById("total").value;
    var received = document.getElementById("received").value;

    if (received >= 500) {
        alert("Recuerde, no aceptamos billetes de 500€.\n [ Si ha pagado con varios de 200€, continue con la venta ]");
    };

    var change = received - total;
    document.getElementById("change").innerText += " " + change + " €";

    for (var i = quantityInWallet.length - 1; i >= 0; i--) {
        if (quantityInWallet[i] > 0) {
            for (var s = i; s >= 0; s--) {
                var rounding = Math.floor(change / wallet[s]);
                if (rounding > 0 && rounding > quantityInWallet[i]) {
                    rounding = quantityInWallet[i]
                    document.getElementById("return").innerText += "  " + rounding +
                        " de " + wallet[s] + "€" + "\n";
                } else if (rounding > 0) {
                    document.getElementById("return").innerText += "  " + rounding +
                        " de " + wallet[s] + "€" + "\n";
                };
                var rest = change - (wallet[s] * rounding);
                change = rest;
                break;
            };
        };
    };
    
    if (change > 0) {
        alert("No tenemos suficiente dinero en caja para proceder con la operación");
        document.getElementById("return").innerText = "Nos faltarían: " + change + "€ " +"en caja para poder realizar la operación";
    };
};

document.getElementById("calc-btn").addEventListener("click", calcChange);