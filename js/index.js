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
  
  // console.log(firebase.app())
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
  // templateFirestore()
}

const templateFirestore = async () => {
  // get one
  const docId = 'XRKqLAT2UaQgIY3EIhdR'
  const response = await firebase.firestore().collection('users').doc(docId).get()
  const user = getOneDocument(response)
  // console.log(user)
  // get many
  const responseMany = await firebase.firestore()
                            .collection('users')
                            .where('phone','array-contains','0982')
                            .get()
  const users = getManyDocument(responseMany)
  // console.log(users)
  // create
  const dataToCreate = {
    age: 100,
    name: 'ABC'
  }
  // firebase.firestore().collection('users')
  // .add(dataToCreate)
  // update
  const idToUpdate = 'wJQDiboZzSeN9YoZ6xLG'
  const dataToUpdate = {
    name: 'Updated',
    phone: firebase.firestore.FieldValue.arrayUnion('0986')
  }
  firebase.firestore()
  .collection('users').doc(idToUpdate)
  .update(dataToUpdate)
  // delete
  const idToDelete = 'hv8VAiSJpEWcd4HW94Jo'
  firebase.firestore().collection('users')
  .doc(idToDelete).delete()
}

const getManyDocument = (response) => {
  const listData = []
  for(const doc of response.docs) {
    listData.push(getOneDocument(doc))
  }
  return listData
}


const getOneDocument = (response) => {
  const data = response.data()
  data.id = response.id
  return data
}