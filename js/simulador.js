/*   crear la función de calcular 
que está en el boton de calcular, que esta en el evento 
onClick, la función es de tipo tradicional 
*/

// sintaxis de la función tradicional

function calcular() {
    // definir las variables como el precio y cantidad

    // se va a tomar el dato del elemento input precio del html 
    let precio = document.simuladorFactura.precio.value;
     // se va a tomar el dato del elemento input cantidad del html
    let cantidad = document.simuladorFactura.cantidad.value;

    // definir el valor del IVA 
    const iva = 0.19;

    // capturar el dato del producto
    producto = document.getElementById('producto').value;

    // validar los campos de precio y cantidad vacios o que están en cero
    // if y else 
    if (precio == 0 || precio == null || cantidad == null || cantidad == 0) {
        // notificar al usuario que digite el precio y cantidad
        alert("Digitar el precio y la cantidad");
        
    }else{
        
    }

}