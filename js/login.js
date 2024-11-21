let formulario = document.querySelector('form')

let email = document.querySelector('#email')
let password = document.querySelector('#password')
let boton = document.querySelector('.boton')

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()
if(boton){
    if (email.value == ''){
    alert("por favor complete el campo email") 
    }
    if (password.value == ''){
    alert("por favor complete el campo contraseña")
    }
}})