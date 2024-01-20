

const inventario = [
    { id: 1, nombre: "camiseta", cantidad: 50, precio: 15 },
    { id: 2, nombre: "pantalones", cantidad: 30, precio: 30 },
    { id: 3, nombre: "zapatos", cantidad: 20, precio: 50 },
];



function calculaTotalInventario() {

   let  totalInventario = 0;

    for (i = 0; i < inventario.length; i++) {

        totalInventario = totalInventario + inventario[i]["cantidad"] * inventario[i]["precio"];
    }
    return totalInventario;




}
function mostrarInventario() {
    for (i = 0; i < inventario.length; i++) {

        document.write("<h3>" + inventario[i]["id"] + " " + inventario[i]["nombre"] + " " + inventario[i]["cantidad"] + " " + inventario[i]["precio"] + "</h3>");

    }

}
function guardardatos() {
    nombre = document.getElementById("nombre").value;
    cantidad = document.getElementById("cantidad").value;
    precio = document.getElementById("precio").value;
    id = inventario.length + 1;

    fila = new Array();


    fila["id"] = id;
    fila["nombre"] = nombre;
    fila["cantidad"] = cantidad;
    fila["precio"] = precio;
    inventario.push(fila);


    mostrarInventario();
    document.write("<h3>Total inventario: " + calculaTotalInventario() + "</h3>");
}


function buscar() {

    nombre = document.getElementById("nombre").value;
    let encontrado = false
    for (i = 0; i < inventario.length; i++) {

        if (inventario[i]["nombre"] == nombre) {
            encontrado = true
            document.write("<h3>" + inventario[i]["id"] + " " + inventario[i]["nombre"] + " " + inventario[i]["cantidad"] + " " + inventario[i]["precio"] + "</h3>");
        }

    }
    if (!encontrado) {
        document.write("<h3>El producto " + nombre + " no está en el inventario </h3>")
    }

}

function modificar() {
    let encontrado = false

    nombre = document.getElementById("nombre").value;
    cantidad = document.getElementById("cantidad").value;
    precio = document.getElementById("precio").value;
     let i=0;
    while(i < inventario.length)
    {

        if (inventario[i]["nombre"] == nombre) {
            encontrado=true;
            inventario[i]["cantidad"] = cantidad
            inventario[i]["precio"] = precio

        }

        inventario[i]["cantidad"] = inventario[i]["cantidad"] * 1.10;
        i++;
    }
    if (!encontrado) {
        document.write("<h3>El producto " + nombre + " no está en el inventario, se ha añadido al inventario</h3>")
        id = inventario.length + 1;

        fila = new Array();


        fila["id"] = id;
        fila["nombre"] = nombre;
        fila["cantidad"] = cantidad;
        fila["precio"] = precio;
        inventario.push(fila);
    }

    mostrarInventario();
    document.write("<h3>Total inventario: " + calculaTotalInventario() + "</h3>");
}
function eliminar() {

    let encontrado = false


    nombre = document.getElementById("nombre").value;



    for (i = 0; i < inventario.length; i++) {

        if (inventario[i]["nombre"] == nombre) {
            encontrado = true;

            inventario.splice(i, 1);
        }


    }

    if (encontrado) {
        document.write("<h3> El producto se ha eliminado </h3>")
        mostrarInventario();
        document.write("<h3>Total inventario: " + calculaTotalInventario() + "</h3>");
    }
    else {
        document.write("<h3> No se elimino producto no encontrado </h3>")


    }


}

function eliminarPorPrecio() {

    let eliminado = false

    precio = document.getElementById("precio").value;
    let i=0;
    for (const fila of inventario ) {
        
        if (fila.precio > 40){
             eliminado=true;

            inventario.splice(i, 1);
        }

       i++;
    }

    if (eliminado) {
        document.write("<h3> El producto se ha eliminado </h3>")
        mostrarInventario();
        document.write("<h3>Total inventario: " + calculaTotalInventario() + "</h3>");
    }
    else {
        document.write("<h3> No se elimino producto no encontrado </h3>")


    }



}
