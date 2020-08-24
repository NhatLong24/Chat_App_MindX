// luu file khoi tao


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
      // khoi tao firebase
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged ((user) => {
      console.log(user)
      if(user){
        if(user.emailVertified){
          model.currentUser = {
            displayName: user.displayName,
            email: user.email
          }
          view.setActiveSreen('chatScreen');
        }
      } 
      else {
        view.setActiveSreen('registerScreen')
      }
    })
    console.log(firebase.app());
    view.setActiveSreen('registerPage'); // hàm view là hàm cần được khởi tạo mà js không cấp sẵn, nó là 1 đối tượng
}
