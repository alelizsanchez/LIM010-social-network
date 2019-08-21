const errorPw = document.getElementById('error');
const validarEmail = document.getElementById('validar');
const todoCampo = document.getElementById('todo-campo');

const formLogin = document.getElementById('login');
const ingrsarr = document.getElementById('ingresarr');
const btnIngresar = document.getElementById('ingresar');

ingrsarr.addEventListener('click', () => {
    formLogin.classList.remove('hide');
    formRegistro.classList.add('hide');
  
    const emailIngreso = document.getElementById('email-login').value;
    const pwIngreso = document.getElementById('pw-login').value;
  
    if (emailIngreso !== correoUsuario) {
      alert('El coreo no exixte, por favor regístrese');
      return false;
    }
  });

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