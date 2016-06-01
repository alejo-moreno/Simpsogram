import landing from '../landing'
import yo from 'yo-yo';
import translate from '../translate';

var signupForm = yo`<div class="col s12 m7">
  <div class="row">
    <div class="signup-box">
      <h1 class="platzigram">Platzigram</h1>
      <form class="signup-form">
        <h2>${translate.message('signup.subheading')}</h2>
        <div class="section"><a href="" class="btn btn-fb hide-on-small-only">${translate.message('signin.facebook')}</a>
        <a href="" class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official"></i>${translate.message('signin.text')}</a></div>
        <div class="divider"></div>
        <div class="section">
          <input type="email" name="email" placeholder=${translate.message('email')}/>
          <input type="text" name="name" placeholder=${translate.message('fullname')}/>
          <input type="text" name="username" placeholder=${translate.message('username')}/>
          <input type="password" name="password" placeholder=${translate.message('password')}/>
          <button type="submit" class="btn waves-effect waves-light btn-signup">${translate.message('signup.call-to-action')}</button>
        </div >
      </form >
    </div >    
  </div >
  <div class="row">
    <div class="login-box">${translate.message('signin.have-account')}<a href="/signin">${translate.message('signin')}</a></div>
  </div>
</div > `

export default landing(signupForm);