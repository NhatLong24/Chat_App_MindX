window.onload = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyA5wuj-eQHdAYFpkENT9rZgb20tuFP_jBQ",
        authDomain: "chat-app-cb6e9.firebaseapp.com",
        databaseURL: "https://chat-app-cb6e9.firebaseio.com",
        projectId: "chat-app-cb6e9",
        storageBucket: "chat-app-cb6e9.appspot.com",
        messagingSenderId: "247155006471",
        appId: "1:247155006471:web:a918a104b38a8927c4dea2"
  };
  firebase.initializeApp(firebaseConfig);
  
  console.log(firebase.app())
  firebase.auth().onAuthStateChanged((user) => {
    if(user) {
      model.currentUser = {
        displayName: user.displayName,
        email: user.email
      }
      if(user.emailVerified) {
        view.setActiveScreen('chatPage')
      } else {
        alert('Please verify your email')
        firebase.auth().signOut()
        view.setActiveScreen('loginPage')
      }
    } else {
      view.setActiveScreen('registerPage')
    }
  })
}