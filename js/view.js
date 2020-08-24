const view = {}  // tạo 1 object để lưu trữ những funtion

view.setActiveSreen = (screenName) =>{
    switch(screenName)
    {
        case 'registerPage' :
            document.getElementById('app').innerHTML = component.registerPage;
            const registerForm = document.getElementById('register-form');
            registerForm.addEventListener('submit',(e)=> {
                e.preventDefault();
                console.log(registerForm.firstName.value);
                
                //tao ra doi tuong data de lay thong tin ma nguoi dung da nhap
                const data = {
                firstName: registerForm.firstName.value,
                lastName: registerForm.lastName.value,
                email: registerForm.email.value,
                password: registerForm.password.value,
                confirmPassword: registerForm.confirmPassword.value
            }
            controller.register(data);
            })
            document.getElementById('redirect-to-login').addEventListener('click',()=>{
                view.setActiveSreen('loginPage');
            })
        break;
        case 'loginPage':
            document.getElementById('app').innerHTML = component.loginPage;
            const loginForm = document.getElementById("login-form");
            loginForm.addEventListener("submit", (e)=>{
                e.preventDefault();

                //tao ra doi tuong data de lay thong tin ma nguoi dung da nhap
                const data ={
                    email: loginForm.email.value,
                    password: loginForm.password.value
                }
                controller.login(data);
            })
            document.getElementById('redirect-to-chatScreen').addEventListener('click',()=>{
                view.setActiveSreen('chatScreen');
            })
        break;
        case 'chatScreen':
            document.getElementById('app').innerHTML = component.chatScreen;
            document.getElementById('welcome-user').innerHTML = `welcome` + model.currentUser.displayName;
            break

    }
}
view.setErrorMessage = (elementID, content) => {
    document.getElementById(elementID).innerText = content;
}