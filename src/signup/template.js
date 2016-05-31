import landing from '../landing'
import yo from 'yo-yo';

var signupForm = yo`<div class="col s12 m7">
  <div class="row">
    <div class="signup-box">
      <h1 class="platzigram">Platzigram</h1>
      <form class="signup-form">
        <h2>¡Registrate ahora!</h2>
        <div class="section"><a href="" class="btn btn-fb hide-on-small-only">Iniciar sesión con Facebook</a>
        <a href="" class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official"></i>Iniciar sesión</a></div>
        <div class="divider"></div>
        <div class="section">
          <input type="email" name="email" placeholder="Email"/>
          <input type="text" name="name" placeholder="Nombre completo"/>
          <input type="text" name="username" placeholder="Usuario"/>
          <input type="password" name="password" placeholder="Contraseña"/>
          <button type="submit" class="btn waves-effect waves-light btn-signup">Registrate</button>
        </div>
      </form>
    </div>    
  </div>  
  <div class="row">
    <div class="login-box">¿Ya tienes cuenta? <a href="/signin">Entrar</a></div>
  </div>
</div>`

export default landing(signupForm);