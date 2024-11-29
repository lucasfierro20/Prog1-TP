let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)
let identificador = queryStringObj.get('id');


fetch(`https://dummyjson.com/recipes/${identificador}`)
.then(function(response){
    return response.json();
})
.then (function(data){
    let tituloPag = document.querySelector('title')
    tituloPag.innerText = data.name
    let nombre = document.querySelector('h1')
    nombre.innerText = data.name;
    let details = document.querySelector('.details')
    details.innerHTML+= `<ul class="contenedor-ul"><li> Cook Time: ${data.cookTimeMinutes} mins</li><li>Servings: ${data.servings}</li><li>Rating: ${data.rating}</li><ul>`;
    let ingredientes = document.querySelector('#ingredientes');
    ingredientes.innerText += data.ingredients;
    let instrucciones = document.querySelector('#instrucciones');
    instrucciones.innerText += data.instructions;
    let img = document.querySelector('.img-rece');
    img.src = data.image;
    
    
})
.catch(function(error){
    console.log(error)
})