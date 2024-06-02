precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

let sumar = document.querySelector("#sumar")
let restar = document.querySelector("#restar")

sumar.addEventListener("click", ()=>{
    let cantidad = document.querySelector(".cantidad")
    let valor = cantidad.innerHTML
    cantidad.innerHTML = parseInt(valor) + 1
    let total = document.querySelector(".valor-total")
    total.innerHTML = precio * cantidad.innerHTML
})

restar.addEventListener("click", ()=>{
    let cantidad = document.querySelector(".cantidad")
    let valor = cantidad.innerHTML
    cantidad.innerHTML = Math.max (0, -- valor)
    let total = document.querySelector(".valor-total")
    total.innerHTML = precio * cantidad.innerHTML
})

/*  
parseInt(valor) - 1 
*/  