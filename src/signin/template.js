import landing from '../landing'
import yo from 'yo-yo';
import translate from '../translate';

var signinForm = yo`<div class="col s12 m7">
  <div class="row">
    <div class="signup-box">
      <h1 class="platzigram">Platzigram</h1>
      <form class="signup-form">        
        <div class="section"><a href="" class="btn btn-fb hide-on-small-only">${translate.message('signin.facebook')}</a>
        <a href="" class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official"></i>${translate.message('signin.text')}</a></div>
        <div class="divider"></div>
        <div class="section">          
          <input type="text" name="username" placeholder=${translate.message('username')}/>
          <input type="password" name="password" placeholder=${translate.message('password')}/>
          <button type="submit" class="btn waves-effect waves-light btn-signup">${translate.message('signin')}</button>
        </div>
      </form>
    </div>    
  </div>  
  <div class="row">
    <div class="login-box">${translate.message('signin.not-have-account')} <a href="/signup">${translate.message('signup.call-to-action')}</a></div>
  </div>
</div>`

export default landing(signinForm);