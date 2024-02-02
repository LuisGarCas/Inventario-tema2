import { Producto } from "./scriptClassProducto.js";


const btnadd=document.getElementById("add")
btnadd.addEventListener("click",guardardatos())



function calculaTotalInventario() {
   
    var inventario=localStorage.getItem("inventory");
    inventario=JSON.parse(inventario);
    
    let  totalInventario = 0;
     
     for (let i = 0; i < inventario.length; i++) {
 
         totalInventario = totalInventario + inventario[i]["cantidad"] * inventario[i]["precio"];
     }
     alert("total: "+totalInventario)
     return totalInventario;
 
 
 
 
 }
 function mostrarInventario() {
    var inventario=localStorage.getItem("inventory");
inventario=JSON.parse(inventario);

    let visor=document.getElementById("visor")
    let datos="";
     for (var i = 0; i < inventario.length; i++) {
          datos+="<h3>" + inventario[i]["id"] + " " + inventario[i]["nombre"] + " " + inventario[i]["Cantidad"] + " " + inventario[i]["precio"] + "</h3>";
     }
   visor.innerHTML=datos;
 }

 function guardardatos() {
    var inventario=localStorage.getItem("inventory");
 inventario=JSON.parse(inventario);

    
    let nombre = document.getElementById("nombre").value;//para recoger el valor del input tengo que hacerlo con .value
    let cantidad = document.getElementById("cantidad").value;
    let precio = document.getElementById("precio").value;
    let id = inventario.length + 1; // para sacar el nuevo id 
 
const p=new Producto(id,nombre,cantidad,precio);
     inventario.push(p);
    
   localStorage.setItem("inventory",JSON.stringify(inventario))
     
     mostrarInventario();
     let visor=document.getElementById("visor")
     let total=calculaTotalInventario();
     visor.innerHTML="<h3>Total inventario: " + total + "</h3>";
 }
 
 
 function buscar() {
  let  inventario=localStorage.getItem("inventory");
     nombre = document.getElementById("nombre").value;
     let encontrado = false
     for (i = 0; i < inventario.length; i++) {
 
         if (inventario[i].getNombre == nombre) {
             encontrado = true
             document.write("<h3>" + inventario[i].getId() + " " + inventario[i].getNombre() + " " + inventario[i].getCantidad() + " " + inventario[i].getPrecio() + "</h3>");
         }
 
     }
     if (!encontrado) {
         document.write("<h3>El producto " + nombre + " no está en el inventario </h3>")
     }
 
 }
 
 function modificar() {
   let inventario=localStorage.getItem("inventory");
     let encontrado = false
 
     nombre = document.getElementById("nombre").value;
     cantidad = document.getElementById("cantidad").value;
     precio = document.getElementById("precio").value;
      let i=0;
     while(i < inventario.length)
     {
 
         if (inventario[i].getNombre() == nombre) {
             encontrado=true;
             inventario[i].setCantidad(cantidad) 
             inventario[i].setPrecio(precio)
 
         }
 
         inventario[i].setCantidad(inventario[i].getCantidad() * 1.10)
         i++;
     }
     if (!encontrado) {
         document.write("<h3>El producto " + nombre + " no está en el inventario, se ha añadido al inventario</h3>")
         id = inventario.length + 1;
 
         p=new Producto(id,nombre,cantidad,precio);
 
 
         inventario.push(p);
      
     
     }
     localStorage.setItem("inventory",inventario)
 
     mostrarInventario();
     document.write("<h3>Total inventario: " + calculaTotalInventario() + "</h3>");
 }
 function eliminar() {
   let inventario=localStorage.getItem("inventory");
     let encontrado = false
 
 
     nombre = document.getElementById("nombre").value;
 
 
 
     for (i = 0; i < inventario.length; i++) {
 
         if (inventario[i].getNombre() == nombre) {
             encontrado = true;
 
             inventario.splice(i, 1);
         }
 
 
     }
 
     if (encontrado) {
        localStorage.setItem("inventory",inventario)
         document.write("<h3> El producto se ha eliminado </h3>")
         mostrarInventario();
         document.write("<h3>Total inventario: " + calculaTotalInventario() + "</h3>");
     }
     else {
         document.write("<h3> No se elimino producto no encontrado </h3>")
 
 
     }
 
 
 }
 
 function eliminarPorPrecio() {
    let inventario=localStorage.getItem("inventory");
     let eliminado = false
 
     precio = document.getElementById("precio").value;
     let i=0;
     for (const p of inventario ) {
         
         if (p.getPrecio() > 40){
              eliminado=true;
 
             inventario.splice(i, 1);
         }
 
        i++;
     }
 
     if (eliminado) {
        localStorage.setItem("inventory",inventario)
         document.write("<h3> El producto se ha eliminado </h3>")
         mostrarInventario();
         document.write("<h3>Total inventario: " + calculaTotalInventario() + "</h3>");
     }
     else {
         document.write("<h3> No se elimino producto no encontrado </h3>")
 
 
     }
 
 
 
 }
 