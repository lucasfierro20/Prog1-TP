let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)
let tagss = queryStringObj.get('tag');

fetch('https://dummyjson.com/recipes')
.then (function(response){
    return response.json();
})
.then(function(data){
    let lista= document.querySelector('.lista-recetas');
    let titulo = document.querySelector('.titulodetalle');
    titulo.innerHTML=`${tagss}`
    let recetas = []
    let tituloPag = document.querySelector('title')
    tituloPag.innerText = `${tagss}`

    
    for (let i = 0; i < data.recipes.length; i++){
        if (data.recipes[i].tags.includes(tagss)) {
        recetas+=`<article>
        <a class="link-detalle" href="./detallerecetas.html?id=${data.recipes[i].id}">
            ${data.recipes[i].name}
        </a>
        <img src="${data.recipes[i].image}" alt=''>
        <p>Nivel de dificultad: <strong>${data.recipes[i].difficulty}</strong></p>
    </article>`
    }
    lista.innerHTML=recetas;

    }})


 .catch(function(error) {
    console.log(error);
 })