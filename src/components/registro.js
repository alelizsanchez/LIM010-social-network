const btnRegistro = document.getElementById('boton-registro');
const formLogin = document.getElementById('login').value;
const formRegistro = document.getElementById('registro').value;
const errorPw = document.getElementById('error');
const validarEmail = document.getElementById('validar');
const todoCampo = document.getElementById('todo-campo');

let listaUsuarios = [];
btnRegistro.addEventListener('click', () => {
  const nombreUsuario = document.getElementById('nombre').value;
  const correoUsuario = document.getElementById('email').value;
  const contraseña = document.getElementById('pw').value;
  const validaCorreo = /\w+@\w+\.+[a-z]/;

  if (nombreUsuario === '' || correoUsuario === '' || contraseña === '') {
    todoCampo.innerHTML = 'Todos los campos estan vacíos';
  } else if (!validaCorreo.test(correoUsuario)) {
    validarEmail.innerHTML = 'El correo no es válido';
  } else if (contraseña.length >= 6 || contraseña.length <= 9) {
    errorPw.innerHTML = 'Contraseña muy corta, por favor usa de 6 a 9 caracteres';
  } else {  
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
  
    localStorage.setItem('users', JSON.stringify(listaUsuarios));
    localStorage.setItem('emails', JSON.stringify(listaUsuarios));
    localStorage.setItem('contraseña', JSON.stringify(listaUsuarios));

    formRegistro.classList.add('hide');
    formLogin.classList.remove('hide');
  
  }  
});

