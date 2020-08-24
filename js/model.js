const model = {}
model.currentUser = undefined;
model.register = async (data) => {
    try {
    const response = firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
    firebase.auth().currentUser.updateProfile({
        displayName: data.firstName +' '+data.lastName
    });
    firebase.auth().currentUser.sendEmailVerification()
    } catch (err)
    {
        alert(err.message)
        console.log(err);
    }
}
model.login = async ({email, password}) =>{
    try {
        const reponse = await firebase.auth().signInWithEmailAndPassword(email, password)
        console.log(reponse)
        if(reponse && reponse.user.emailVerified) {
            // vao man chat
            model.currentUser = {
                email: model.currentUser.email,
                displayName: reponse.user.displayName
            }
        } else {
            alert('Please verify your email')
        }
    } catch(err){
        alert(err.message)
        console.log(err)
    }
}