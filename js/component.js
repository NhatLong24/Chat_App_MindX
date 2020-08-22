const component = {}
/* component là nơi lưu code html để chạy qua các trang */
component.welcomePage =`<h1> welcome to my chat</h1>` // là 1 đoặn html

component.registerPage =`
<div class="register-container">
        <form id="register-form">
            <div class="register-header">MindX Chat</div>
            <div class="name-wrapper">
                <div class="input-wrapper">
                    <input type="text" placeholder="First Name" name="fistName">
                    <div class="error" id ="first-name-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="text" placeholder="Last Name" name="lastName">
                    <div class="error" id ="last-name-error"></div>
                </div>
            </div>
            
            <div class="input-wrapper">
                <input type="text" placeholder="Email" name="email">
                <div class="error" id ="email-error"></div>
            
            </div>
            <div class="input-wrapper">
                <input type="text" placeholder="Password" name="password">
                <div class="error" id ="password-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="text" placeholder="Confirm password" name="confirmPassword">
                <div class="error" id ="confirm-password-error"></div>
            </div>
           <div class="form-action">
               <div>Already have an account? <span class="cursor-pointer">Login</span></div>
                <button class="btn cursor-pointer" type="submit">Register</button>
            </div>
        </form>
    </div>
`
