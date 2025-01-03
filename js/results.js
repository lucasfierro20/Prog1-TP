let results = document.querySelector('.lista-recetas')
console.log(results);

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)
let ans = queryStringObj.get('q')

fetch(`https://dummyjson.com/recipes/search?q=${ans}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    if(ans.length>=3){
        let buscador = ''
        for(let i=0;i<data.recipes.length;i++){
            buscador+=`<article><a class="link-detalle" href="./detallerecetas.html?id=${data.recipes[i].id}">${data.recipes[i].name} <a><img src="${data.recipes[i].image}"alt=''><p>Nivel de dificultad:<strong> ${data.recipes[i].difficulty}</strong></p></article>`
        }
        results.innerHTML=buscador
    }
    else{
        let error = document.querySelector('.error-busqueda')
        error.innerHTML+='<p class="error">Al menos 3 letras</p>'
    }
    
    })
.then(function(error){
    console.log(error);
    
})

