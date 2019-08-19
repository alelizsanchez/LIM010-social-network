// aqui exportaras las funciones que necesites
const btnRegistro = document.getElementById('sbmt');
const errorPw = document.getElementById('error');
const validarEmail = document.getElementById('validar');
const todoCampo = document.getElementById('todo-campo');
// const error = document.getElementById('error');

btnRegistro.addEventListener('click', () => {
  const nombreUsuario = document.getElementById('nombre').value;
  const correoUsuario = document.getElementById('email').value;
  const contraseña = document.getElementById('pw').value;
  const validaCorreo = /\w+@\w+\.+[a-z]/;

  localStorage.setItem('name', nombreUsuario);
  localStorage.setItem('email', correoUsuario);

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

  }
  localStorage.getItem('name');
  localStorage.getItem('email');
})

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

const arrNombres = [];
const arrEmail = [];

const guardarDatos = () => {
  let nombreUsuario = document.getElementById('nombre').value;
  let correoUsuario = document.getElementById('email').value;
  arrNombres.push(nombreUsuario);
  arrEmail.push(correoUsuario);


  localStorage.setItem('primer-nombre', JSON.stringify(arrNombres));
  localStorage.setItem('primer-correo', JSON.stringify(arrEmail));
  arrNombres = JSON.parse(localStorage.getItem('primer-nombre'));
  arrEmail = JSON.parse(localStorage.getItem('primer-correo'));

}
/* post */
/**
 * Ingresar datos mediante un formulario
 */
function manejarDatosPost(){

  // Detectar el click el botñón "guardar"
  document.getElementById("guardar-post").addEventListener("click", () => {
      
      // Recupera el texto de la caja
      const texto = document.getElementById("texto-post").value;
      guardarPost(texto);
  });
}

/**
* Guarda un post en localstorage
*/
function guardarPost(texto){

  const post = {
      texto: texto
  };

  // Guardamos el dato en localStorage
  localStorage.setItem('post', JSON.stringify(post));

  // Invocamos al método para mostrar el post
  mostrarPost();
  
}

/**
* Muestra una post que ya existe en localStorage en pantalla
*/
function mostrarPost(){
  const post = JSON.parse(localStorage.getItem('post'));
  console.log(post);

  //console.log('Post recuperado:', post.texto);
  document.getElementById("post-recuperado").innerHTML = post.texto;

  // Retiro la clase que lo oculta
  // Post__mostrar oculto 
  document.getElementById("caja-post").classList.remove('oculto');
}


// Inicia los métodos
manejarDatosPost();
/*  fin post */






