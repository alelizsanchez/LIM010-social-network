// aqui exportaras las funciones que necesites
const btnRegistro = document.getElementById('boton-registro');
const errorPw = document.getElementById('error');
const validarEmail = document.getElementById('validar');
const todoCampo = document.getElementById('todo-campo');
const nombreUser = document.getElementById('nombre');
// const error = document.getElementById('error');
// const arr = [];
// // esto es de lulu 
// const saludo = () => {
//   //alert('hola');
//   console.log(nombreUser.value);
//   arr.push(nombreUser.value);
//   nombreUser.value = '';

//   console.log(arr);
//   localStorage.setItem('users', JSON.stringify(arr));

// }

// btnRegistro.addEventListener('click', saludo );

///esto es mioooooooooooooooo
let arrNombres = [];
let arrEmail = [];
const guardarDatos = () => {
  //declarando variables para el registro
  let nombreUsuario = document.getElementById('nombre').value;
  let correoUsuario = document.getElementById('email').value;
  const contraseña = document.getElementById('pw').value;
  const validaCorreo = /\w+@\w+\.+[a-z]/;
  
  //declarando variables para el login
  const formRegistro = document.getElementById('registro');
  const formLogin = document.getElementById('login');
  const ingrsarr = document.getElementById('ingresarr');
  const btnIngresar = document.getElementById('ingresar');

  arrNombres.push(nombreUsuario);
  arrEmail.push(correoUsuario);
  console.log(arrNombres);
  console.log(arrEmail);

  localStorage.setItem('primer-nombre', JSON.stringify(arrNombres));
  localStorage.setItem('primer-correo', JSON.stringify(arrEmail));
  arrNombres = JSON.parse(localStorage.getItem('primer-nombre'));
  arrEmail = JSON.parse(localStorage.getItem('primer-correo'));

  if (nombreUsuario === '' || correoUsuario === '' || contraseña === '') {
    todoCampo.innerHTML = 'Todos los campos estan vacíos';
    return false;
  }
  else if (!validaCorreo.test(correoUsuario)) {
    validarEmail.innerHTML = 'El correo no es válido';
    return false;
  }
  if (contraseña.length < 6 || contraseña.length > 8) {
    errorPw.innerHTML = 'Contraseña muy corta, por favor usa de 6 a 8 caracteres';
    return false;
        
    formLogin.classList.remove('hide');
  formLogin.classList.add('block');
  const emailIngreso = document.getElementById('email-login').value;
  const pwIngreso = document.getElementById('pw-login').value;
  if (emailIngreso !== correoUsuario) {
    alert('El coreo no exixte, por favor regístrese');
    return false;
  }

  }
}
btnRegistro.addEventListener('click', guardarDatos);




//  btnRegistro.addEventListener('click', (guardarDatos) => {
//    for (let i = 0; i<= guardarDatos.length; i++){

//    }
//   const nombreUsuario = document.getElementById('nombre').value;
//   const correoUsuario = document.getElementById('email').value;
//   const contraseña = document.getElementById('pw').value;
//   const validaCorreo = /\w+@\w+\.+[a-z]/;

//   localStorage.setItem('name', nombreUsuario);
//   localStorage.setItem('email', correoUsuario);

//   if (nombreUsuario === '' || correoUsuario === '' || contraseña === '') {
//     todoCampo.innerHTML = 'Todos los campos estan vacíos';
//     return false;
//   }
//   else if (!validaCorreo.test(correoUsuario)) {
//     validarEmail.innerHTML = 'El correo no es válido';
//     return false;
//   }
//   if (contraseña.length < 6 || contraseña.length > 8) {
//     errorPw.innerHTML = 'Contraseña muy corta, por favor usa de 6 a 8 caracteres';
//     return false;

//   }
//   localStorage.getItem('name');
//   localStorage.getItem('email');
// })

const formRegistro = document.getElementById('registro');
const formLogin = document.getElementById('login');
const ingrsarr = document.getElementById('ingresarr');
const btnIngresar = document.getElementById('ingresar');



ingrsarr.addEventListener('click', () => {
  formLogin.classList.remove('hide');
  formLogin.classList.add('block');
  const emailIngreso = document.getElementById('email-login').value;
  const pwIngreso = document.getElementById('pw-login').value;
  if (emailIngreso !== correoUsuario) {
    alert('El coreo no exixte, por favor regístrese');
    return false;
  }

})








