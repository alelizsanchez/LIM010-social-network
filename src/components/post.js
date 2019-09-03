const inputPost = document.getElementById('post');
const btnLogin = document.getElementById('ingresar');
const iconEdit = document.getElementById('icon-edit');
const iconDelete = document.getElementById('icon-delete');

btnLogin.addEventListener('click',() => {
  post.classList.remove('hide');
  formLogin.classList.add('hide');
});



/* post */

//  Ingresar datos mediante un formulario
 
const manejarDatosPost = () => {

  // Detectar el click el botón "guardar"
  document.getElementById('guardar-post').addEventListener('click', () => {

    // Recupera el texto de la caja
    const texto = document.getElementById('texto-post').value;
    guardarPost(texto);
  });
}

/**
* Guarda un post en localstorage
*/
const formulario = document.getElementById('formulario-post')


const guardarPost = (e) => {
  e.preventDefault()

  const texto = document.getElementById('texto-post').value;
  const timestamp = +new Date
  const post = { texto, timestamp };

  // Guardamos el dato en localStorage
  localStorage.setItem('post', JSON.stringify(post));

  // Invocamos al método para mostrar el post
  mostrarPost();

  formulario.reset()
}

formulario.addEventListener('submit', guardarPost, false)

/**
* Muestra una post que ya existe en localStorage en pantalla
*/
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


// Inicia los métodos
// manejarDatosPost();
/*  fin post */
const 
