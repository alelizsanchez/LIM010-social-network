// login
const formLogin = document.getElementById('login');
const errorPw = document.getElementById('error');
const validarEmail = document.getElementById('validar');
const todoCampo = document.getElementById('todo-campo');
const validaCorreo = /\w+@\w+\.+[a-z]/;
const aRegistro = document.getElementById('a-registro');
const btnIngresar = document.getElementById('ingresar');
const post = document.getElementById('caja-post');

// registro
const formRegistro = document.getElementById('registro');
const btnRegistro = document.getElementById('boton-registro');

const postUsuario = document.getElementById('post');
const menuRed = document.getElementById('menu');


aRegistro.addEventListener('click', () => {
  formLogin.classList.add('hide');
  formRegistro.classList.remove('hide');
});


btnRegistro.addEventListener('click', () => {
  formLogin.classList.remove('hide');
  formRegistro.classList.add('hide');
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

  // Limpia las cajas de textos
  nombreUsuario.value = '';
  console.log(nombreUsuario)
  correoUsuario.value = '';
  password.value = '';
  console.log(correoUsuario);

  localStorage.setItem('user_database', JSON.stringify(listaUsuarios));


});


const getListaUsuarios = () => {
  const rawListaUsuarios = localStorage.getItem('user_database')

  if (rawListaUsuarios) {
    return JSON.parse(rawListaUsuarios)
  } else {
    return []
  }
}


let listaUsuarios = getListaUsuarios()

console.log(listaUsuarios)


// login
btnIngresar.addEventListener('click', (event) => {
  event.preventDefault()

  formLogin.classList.add('hide');
  formRegistro.classList.add('hide');
  postUsuario.classList.remove('hide');
  menuRed.classList.remove('hide');


  const email = document.getElementById('email-login').value;
  const password = document.getElementById('pw-login').value;

  // console.log(email, password, listaUsuarios)
  // console.log(listaUsuarios.find((usuario) => usuario.email === email))
  console.log(listaUsuarios.filter((usuario) => usuario.email === email)[0])

const usuario = listaUsuarios.find((usuario) => usuario.email === email);
console.log(usuario);

  if (usuario) {
    console.log(usuario);
    if (usuario.password === password) {
      console.log(usuario.password);
      alert('se ha validado sus datos correctamente')

    } else {
      alert('su clave es incorrecta')
      formLogin.classList.remove('hide');
      postUsuario.classList.add('hide');
    }
  } else {
    alert('usuario no existe')
    formLogin.classList.remove('hide');
    postUsuario.classList.add('hide');
  }

});

/* post */

//  Ingresar datos mediante un formulario
const manejarDatosPost = () => {

   // Detectar el click el botñón "guardar"
   document.getElementById('guardar-post').addEventListener('click', () => {

    // Recupera el texto de la caja
    const texto = document.getElementById('texto-post').value;
    guardarPost(texto);
  });
}

/* Guarda un post en localstorage */
const formulario = document.getElementById('formulario-post')

const guardarPost = (event) => {
  event.preventDefault()

  const texto = document.getElementById('texto-post').value;
  // const timestamp = +new Date
  // const post = { texto, timestamp };
  const post = {texto};

  // Guardamos el dato en localStorage
  localStorage.setItem('post', JSON.stringify(post));

  // Invocamos al método para mostrar el post
  mostrarPost();

  formulario.reset()
}

formulario.addEventListener('submit', guardarPost, false)

/* Muestra una post que ya existe en localStorage en pantalla */
const mostrarPost = () => {
  const post = JSON.parse(localStorage.getItem('post'));
  console.log(post);

  const posts = document.getElementById('posts');

  const contenedorDePost = document.createElement('div');
  contenedorDePost.classList.add('Post__mostrar');
  contenedorDePost.innerHTML = post.texto;
  posts.prepend(contenedorDePost)

  //console.log('Post recuperado:', post.texto);
  // document.getElementById("post-recuperado").innerHTML = post.texto;

  // Retiro la clase que lo oculta
  // Post__mostrar oculto 
  // document.getElementById("caja-post").classList.remove('oculto');
}