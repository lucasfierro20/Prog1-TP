let formulario = document.querySelector('.login-form')

let email = document.querySelector('#email')
let password = document.querySelector('#password')
let errorEmail = document.querySelector('.errorEmail')
let errorPassword = document.querySelector('.errorPassword')


formulario.addEventListener('submit', function(evento){
    evento.preventDefault()
    if(email.value == ''){
        console.log('completa el campo')
        errorEmail.innerHTML = '<p>Por favor complete el campo</p>'
    }else if(password.value == ''){
        console.log('completa el campo')
        errorPassword.innerHTML = '<p>Por favor complete el campo</p>';
    }else {
        formulario.submit()
    }
})