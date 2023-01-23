const paginas = ["sobre", "resumen", "portafolio"];

function seleccionar (pagina) {
    let botones = document.getElementsByClassName("selector");
    for (i of botones) {
        console.log(i);
        i.classList.remove("active")
    };
    botones[pagina].classList.add("active")

    for (i of paginas) {
        let elemento = document.getElementById(i);
        console.log(elemento);
        elemento.style.display = 'none';
    };
    let domPagina = document.getElementById(paginas[pagina]);
    console.log(domPagina);
    domPagina.style.display = 'block';
};