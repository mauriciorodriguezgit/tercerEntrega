class Producto {
    constructor(id, nombre, precio, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

// Creamos 5 Products
const productos = [
    new Producto(1, 'Camisa', 20, 5),
    new Producto(2, 'Pantalon', 30, 3),
    new Producto(3, 'Zapatos', 50, 2),
    new Producto(4, 'Sombrero', 15, 7),
    new Producto(5, 'Gorra', 10, 10)]



// Agregamos un nuevo producto 
productos.push(new Producto(6, 'Corbata', 12, 1));
const divDeProductos = document.getElementById(`divDeProductos`)

productos.forEach(prod => {
    divDeProductos.innerHTML +=
        `<div class="card shadow-lg p-3 mb-5 rounded m-3 col-sm-8 col-md-4 col-lg-5">
        <img src="${prod.nombre.toLowerCase()}.jpg" class"rounded mx-auto d-block"alt="${prod.nombre}">
            <div class="card-body">
                <h5 class="card-title">${prod.nombre}</h5>
                <p class="card-text">${prod.precio}</p>
                <button class="btn btn-success" id=${prod.id}>COMPRAR</button>
            </div>
        </div>`

})

const carrito = []
const botonesAgregar = document.querySelectorAll('.btn-success')
botonesAgregar.forEach(boton => {
    boton.onclick = () => {
        const producto = productos.find((prod) => prod.id === parseInt(boton.id))

        const prodCarrito = {
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1,

        }
        const prodEnCarrito = carrito.find(prod => prod.id === prodCarrito.id)
        if (!prodEnCarrito) {
            carrito.push(prodCarrito)
        }
        else { prodEnCarrito.cantidad++ }
        console.log(carrito);
    }
})
//  finalizar compra
const botonFinalizar = document.querySelector('#finalizar')
const thead = document.querySelector('#thead')
const tbody = document.querySelector('.tbody')
const parrafoTotal = document.querySelector('#total')
const gracias = document.querySelector('.gracias')
const tituloprincipal = document.querySelector('.titulo')

botonFinalizar.onclick = () => {
    divDeProductos.remove()
    botonFinalizar.remove()
    tituloprincipal.remove()

    gracias.innerHTML = `<div class="alert alert-primary" role="alert">
    gracias por tu compra
  </div>`

    thead.innerHTML = `<tr>
        <th scope="col">producto</th>
        <th scope="col">cantidad</th>
        <th scope="col">total</th>    
        </tr>`

    let totalcompra = 0
    carrito.forEach(prod => {
        totalcompra += prod.cantidad * prod.precio

        tbody.innerHTML += `<tr>
                <td>${prod.nombre}</td>
                <td>${prod.cantidad}</td>
                <td>${prod.cantidad * prod.precio}</td>
            </tr>`
    })
    parrafoTotal.innerText = `el total de tu compra es ${totalcompra}`


}









