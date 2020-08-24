const component = {}
/* component là nơi lưu code html để chạy qua các trang */
component.welcomePage =`<h1> welcome to my chat</h1>` // là 1 đoặn html

component.registerPage =`
<div class="register-container">
<form id="register-form">
  <div class="register-header">MindX chat</div>
  <div class="name-wrapper">
    <div class="input-wrapper">
      <input type="text" placeholder="First name" name="firstName">
      <div class="error" id="first-name-error"></div>
    </div>
    <div class="input-wrapper">
      <input type="text" placeholder="Last name" name="lastName">
      <div class="error" id="last-name-error"></div>
    </div>
  </div>
  <div class="input-wrapper">
    <input type="email" placeholder="Email" name="email">
    <div class="error" id="email-error"></div>
  </div>
  <div class="input-wrapper">
    <input type="password" placeholder="Password" name="password">
    <div class="error" id="password-error"></div>
  </div>
  <div class="input-wrapper">
    <input type="password" placeholder="Confirm password" name="confirmPassword">
    <div class="error" id="confirm-password-error"></div>
  </div>
  <div class="form-action">
    <div>Already have an account ? <span id="redirect-to-login" class="cursor-pointer">Login</span> </div>
    <button class="btn cursor-pointer" type="submit">Register</button>
  </div>
</form>
</div>

`
component.loginPage = `
<div class="login-container">
    <form id="login-form">
      <div class="login-header">MindX chat</div> 
      <div class="input-wrapper">
        <input type="email" placeholder="Email" name="email">
        <div class="error" id="email-error"></div>
      </div>
      <div class="input-wrapper">
        <input type="password" placeholder="Password" name="password">
        <div class="error" id="password-error"></div>
      </div>
      <div class="form-action">
        <div>Don't have account ? <span class="cursor-pointer">Register</span> </div>
        <button id='redirect-to-chatScreen' class="btn cursor-pointer" type="submit">login</button>
      </div>
    </form>
  </div>
`
component.chatScreen = `
<div id="welcome-user"></div>
`
