let usuarioQuiereEntrar = confirm("Bienvenido a Coderstore ¿Quiere ingresar a la tienda?");
let totalMonto = 0;
let productosElegidosPorElUsuario = [];

// productos
const listaDeProductos = [
    { nombre: "Juegos de PS4", precio: 25000 },
    { nombre: "Juegos de PS5", precio: 35000 },
    { nombre: "Juegos de PC", precio: 20000 },
    { nombre: "Consola PS3", precio: 30000 },
    { nombre: "Consola PS4", precio: 45000 },
    { nombre: "Consola PS5", precio: 60000 },
    { nombre: "Auriculares Gamer", precio: 8000 },
    { nombre: "Teclado Mecánico", precio: 15000 },
    { nombre: "Mouse Gamer", precio: 7000 }
];

function agregarProductoAlCarrito(producto) {
    totalMonto += producto.precio;
    productosElegidosPorElUsuario.push(producto.nombre);
}

function iniciarTienda() {
    let usuarioQuiereSeguirComprando = true;

    while (usuarioQuiereSeguirComprando) {
        let mensajeProductos = "En CoderStore te ofrecemos lo siguiente:\n";
        listaDeProductos.forEach((producto, indice) => {
            mensajeProductos += (indice + 1) + "- " + producto.nombre + " ($" + producto.precio + ")\n";
        });

        let indiceDelProducto = Number(prompt(mensajeProductos)) - 1;

        // Si la selección es válida
        if (indiceDelProducto >= 0 && indiceDelProducto < listaDeProductos.length) {
            agregarProductoAlCarrito(listaDeProductos[indiceDelProducto]);
        } else {
            alert("La opción seleccionada no está disponible.");
        }

        usuarioQuiereSeguirComprando = confirm("¿Quiere seguir con si compra?");
    }

    // Confirmación
    let confirmarCompraDelUsuario = confirm(
        "Total a pagar: $" + totalMonto + "\nProductos seleccionados:\n- " + productosElegidosPorElUsuario.join("\n- ") +
        "\n\n¿Desea confirmar su compra?"
    );

    if (confirmarCompraDelUsuario) {
        alert("¡Gracias por comprar en CoderStore! Total pagado: $" + totalMonto);
    } else {
        alert("Compra cancelada. No se ha realizado ningún cargo.");
        // Reinicia la cuenta
        totalMonto = 0;
        productosElegidosPorElUsuario = [];
    }
}

if (usuarioQuiereEntrar) {
    iniciarTienda();
} else {
    alert("Hasta luego");
}



