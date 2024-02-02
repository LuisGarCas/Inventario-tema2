



 import {Producto}  from "./scriptClassProducto.js";

const inventario = [];  

 const p1 =new Producto(1,"camiseta",50,15);
 const p2 =new Producto(2,"pantalones",30,30)
 const p3 =new Producto(3,"zapatos",20,50)

 inventario.push(p1);
 inventario.push(p2);
 inventario.push(p3);

 if (typeof(Storage) !== "undefined") {
     
    localStorage.setItem("inventory",JSON.stringify(inventario));
 }
 else{
    alert("localStorage no soportado")
 }
