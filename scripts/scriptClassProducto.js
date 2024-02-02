
export  class Producto {
    constructor(id, nombre, cantidad, precio){
        this.id=id;
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.precio=precio;
    }
    get getId(){
        return this.id;
    }
    get getNombre(){
        return this.nombre;
    }
    get getCantidad(){
        return this.cantidad;
    }
    get getPrecio(){
        return this.precio;
    }

    set setId(id){
        this.id=id;
    }
    set setNombre(nombre){
        this.nombre=nombre;
    }
    set setCantidad(cantidad){
        this.cantidad=cantidad;
    }
    set setPrecio(precio){
        this.precio=precio;
    }
}