const view = {}  // tạo 1 object để lưu trữ những funtion

view.setActiveSreen = (sreenName) =>{
    switch(screenName)
    {
        case 'registerPage' :
            document.getElementById('app').innerHTML = component.registerPage;
            const registerForm = document.getElementById('register-form');
            registerForm.addEventListener('submit',(e)=> {
                e.preventDefault();
                console.log(registerForm.firstName.value);
                const data = {
                firstName:registerForm.firstName.value,
                lastName:registerForm.lastName.value,
                email:registerForm.email.value,
                password:registerForm.password.value,
                confirmPassword:registerForm.confirmPassword.value
            }
            controller.register(data);
            })
        break;
    }
}