fetch('https://dummyjson.com/recipes/tags')

.then (function(response){
    return response.json();
})
.then(function(data){
    console.log(data.length)
    let lista= document.querySelector('.categorias')
    let recetas = []
    for(let i=0;i<data.length;i++){
        recetas+=`<article><a href="./results.html"><p class="cate-boton">${data[i]}</p></a></article>`
    }
    lista.innerHTML=recetas
    console.log()
    let cateInside = document.querySelector('.cate-boton')
    cateInside.addEventListener('click', function(){
        
    })
            

})
.catch(function(error){
    console.log(error)
})