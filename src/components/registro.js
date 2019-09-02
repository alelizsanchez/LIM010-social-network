const btnRegistro = document.getElementById('boton-registro');
const formLogin = document.getElementById('login').value;
const formRegistro = document.getElementById('registro').value;
const errorPw = document.getElementById('error');
const validarEmail = document.getElementById('validar');
const todoCampo = document.getElementById('todo-campo');
const validaCorreo = /\w+@\w+\.+[a-z]/;

const getListaUsuarios = () => {
  const rawListaUsuarios = localStorage.getItem('user_database')

  if (rawListaUsuarios) {
    return JSON.parse(rawListaUsuarios)
  } else {
    return []
  }
}

let listaUsuarios = getListaUsuarios()

btnRegistro.addEventListener('click', () => {
  // Caja de usuario
  let nombreUsuario = document.getElementById('nombre');
  // Caja de correo
  let correoUsuario = document.getElementById('email');
  console.log(correoUsuario);
  // Caja de password
  let password = document.getElementById('pw');

  // if (nombreUsuario === '' || correoUsuario === '' || password === '') {
  //   todoCampo.innerHTML = 'Verifica si todo los campos estan llenos';
  // } else if (!validaCorreo.test(correoUsuario)) {
  //   validarEmail.innerHTML = 'El correo no es válido';
  // } else if (password.length >= 6 || password.length <= 9) {
  //   errorPw.innerHTML = 'passwordmuy corta, por favor usa de 6 a 9 caracteres';
  // } else {  
    // Contruye el JSON de usuario
    const usuario = {
      user: nombreUsuario.value,
      email: correoUsuario.value,
      password: password.value
    };

    listaUsuarios.push(usuario);
  
    // arr.push(nombreUsuario.value);
    // arr.push(correoUsuario.value);
    // arr.push(password.value);
    // console.log(nombreUsuario.value);
  
    // Limpia las cajas de textos
    nombreUsuario.value = '';
    console.log(nombreUsuario)
    correoUsuario.value = '';
    password.value = '';
    console.log(correoUsuario);

    localStorage.setItem('user_database', JSON.stringify(listaUsuarios));
    
  
    // localStorage.setItem('users', JSON.stringify(listaUsuarios));
    // localStorage.setItem('emails', JSON.stringify(listaUsuarios));
    // localStorage.setItem('password', JSON.stringify(listaUsuarios));

    // formRegistro.classList.add('hide');
    // formLogin.classList.remove('hide');
  
   
});