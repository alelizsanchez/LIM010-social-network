const postEnunciado = document.getElementById('post');
const iniciar = document.getElementById('ingresar');
iniciar.addEventListener('click',() => {
  post.classList.remove('hide');
  formLogin.classList.add('hide');
});



/* post */
/**
 * Ingresar datos mediante un formulario
 */
const manejarDatosPost = () => {

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
const guardarPost = (texto) => {

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
const mostrarPost = () => {
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






