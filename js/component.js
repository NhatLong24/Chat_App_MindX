const component = {}
component.welcomePage = `
  <h1>Welcome to my chat app</h1>
`
component.registerPage = `
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
        <button class="btn cursor-pointer" type="submit">login</button>
      </div>
    </form>
  </div>
`
component.chatPage = `
<div class="chat-container">
<div class="header">
  MindX chat
</div>
<div class="main">
  <div class="conversation-detail">
    <div class="conversation-title">First conversation</div>
    <div class="list-messages">
      
    </div>
    <form id="send-message-form">
      <div class="input-wrapper">
        <input type="text" 
        placeholder="Type a message" 
        name="message"></input>
      </div>
      <button type="Submit"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
    </form>
  </div>
</div>
</div>
`