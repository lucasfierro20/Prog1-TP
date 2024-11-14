fetch('https://dummyjson.com/recipes/meal-type/snack')
.then (function(response){
    return response.json();
})
.then(function(data){
    let lista= document.querySelector('.lista-recetas')
    let recetas = []
    for(let i=0;i<data.recipes.length;i++){
        recetas+=`<article><a class="link-detalle" href="./detalle.html?id=${data.recipes[i].id}">${data.recipes[i].name} <a><img src="${data.recipes[i].image}"alt=''><p>Nivel de dificultad:<strong> ${data.recipes[i].difficulty}</strong></p></article>`
    }
    lista.innerHTML=recetas

})
.catch(function(error){
    console.log(error)
})