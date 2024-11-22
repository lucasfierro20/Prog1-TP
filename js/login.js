let formulario = document.querySelector('.login-form')

let email = document.querySelector('#email')
let password = document.querySelector('#password')
let boton = document.querySelector('.boton')

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()
        if (email.value == ''){
            alert("Por favor complete el campo email") 
        } else if (password.value == ''){
            alert("Por favor complete el campo contraseña")
        } else{
            formulario.submit()
        }
})
