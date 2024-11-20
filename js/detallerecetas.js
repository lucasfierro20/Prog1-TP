let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)
let identificador = queryStringObj.get('id');


fetch(`https://dummyjson.com/recipes/${identificador}`)
.then(function(response){
    return response.json();
})
.then (function(data){
    let nombre = document.querySelector('h1')
    nombre.innerText = data.name;
    let ingredientes = document.querySelector('#ingredientes');
    ingredientes.innerText += data.ingredients;
    let instrucciones = document.querySelector('#instrucciones');
    instrucciones.innerText += data.instructions;
    let img = document.querySelector('img');
    img.src = data.image;
    
    
})
.catch(function(error){
    console.log(error)
})