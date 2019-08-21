const btnRegistro = document.getElementById('boton-registro');
const errorPw = document.getElementById('error');
const validarEmail = document.getElementById('validar');
const todoCampo = document.getElementById('todo-campo');

let listaUsuarios = [];
btnRegistro.addEventListener('click', () => {

  // Caja de usuario
  let nombreUsuario = document.getElementById('nombre');

  // Caja de correo
  let correoUsuario = document.getElementById('email');
  
  // Caja de password
  let password = document.getElementById('pw');

  const validaCorreo = /\w+@\w+\.+[a-z]/;

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
  correoUsuario.value = '';
  password.value = '';

  localStorage.setItem('user_database', JSON.stringify(listaUsuarios));

  //localStorage.setItem('users', JSON.stringify(arr));
  //localStorage.setItem('emails', JSON.stringify(arr));
  //localStorage.setItem('contraseña', JSON.stringify(arr));

  /*if (nombreUsuario === '' || correoUsuario === '' || password === '') {
    todoCampo.innerHTML = 'Todos los campos estan vacíos';
    return false;
  }
  else if (!validaCorreo.test(correoUsuario)) {
    validarEmail.innerHTML = 'El correo no es válido';
    return false;
  }
  if (password.length < 6 || password.length > 8) {
    errorPw.innerHTML = 'Contraseña muy corta, por favor usa de 6 a 8 caracteres';
    return false;
  }*/
});

const formRegistro = document.getElementById('registro');