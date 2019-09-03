
// registro
// Caja de usuario
let nombreUsuario = document.getElementById('nombre');
// Caja de correo
let correoUsuario = document.getElementById('email');
console.log(correoUsuario);
// Caja de passwor 
let password = document.getElementById('pw');
const formLogin = document.getElementById('login');
const formRegistro = document.getElementById('registro');

//login
const aRegistro = document.getElementById('a-registro');
const btnIngresar = document.getElementById('ingresar');
const post = document.getElementById('caja-post');


const getListaUsuarios = () => {
  const rawListaUsuarios = localStorage.getItem('user_database')

  if (rawListaUsuarios) {
    return JSON.parse(rawListaUsuarios)
  } else {
    return []
  }
}

// let listaLogin = [];
let listaUsuarios = getListaUsuarios()
// const usuario = {
//   user: nombreUsuario.value,
//   email: correoUsuario.value,
//   password: password.value
// };
console.log(listaUsuarios)

// listaUsuarios.push(usuario);

// localStorage.setItem('user_database', JSON.stringify(listaUsuarios));

aRegistro.addEventListener('click', () => {
  formLogin.classList.add('hide');
  formRegistro.classList.remove('hide', 'block');
});


btnIngresar.addEventListener('click', (e) => {
  const email = document.getElementById('email-login').value;
  const password = document.getElementById('pw-login').value;
  // const local = JSON.parse(localStorage.getItem('listaLogin'));

  e.preventDefault()

  console.log(email, password, listaUsuarios)

  console.log(listaUsuarios.find((usuario) => usuario.email === email))
  console.log(listaUsuarios.filter((usuario) => usuario.email === email)[0])

  const usuario = listaUsuarios.find((usuario) => usuario.email === email)

  if (usuario) {
    if (usuario.password === password) {
      alert('se ha validado sus datos correctamente')
    } else {
      alert('su clave es incorrecta')
    }
  } else {
    alert('usuario no existe')
  }

  // for (let i = 0; i < local.length; i++) {
  //   if (local[i].email === emaiLogin && local[i].password === pwLogin) {
  //     alert('El correo es valido')

  //     // post.classList.remove('hide');
  //     // formLogin.classList.add('hide');
  //   } else {
  //     alert('correo no valido')
  //   }
  //   console.log(listaUsuarios);
  // }
  // localStorage.setItem('email', emaiLogin);
  // console.log(emaiLogin);
  // localStorage.setItem('pw', pwLogin);
  // console.log(pwLogin);
});