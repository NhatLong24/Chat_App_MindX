const controller = {}
controller.register = (data) => {
    if(data.firstName ==='') {
        document.getElementById('first-name-error').innerText='Plaese input your first name';
    }
    if (data.lastName ===''){
        document.getElementById('last-name-error').innerText='Plaese input your last name';
    }
}