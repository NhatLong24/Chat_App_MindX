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
//templateFirestore();
}
const templateFirestore= async ()=>{

  //lay 1 document ve
  const docID = '5ttcneOsalNDTG9wPUF9'

  const reponse = await firebase.firestore().collection('users').doc(docID).get();
  const user = getOneDocument(reponse);
  
  //lay nhieu document ve
const reponseMany= await firebase.firestore().collection('users').where('address','==','Ha Noi').get();

 const users =  getManyDocument(reponseMany);
 //console.log(users);

 //tao 1 document moi
const dataToCreate ={
  age: 100,
  name:'ABC',
}
// CRUD create read update delete

   // cau lenh add o ben duoi tro vao firestore 
  // firebase.firestore().collection('users').add(dataToCreate);
  
  //cau lenh update cho firebase

  const idToUpdate = '5ttcneOsalNDTG9wPUF9';
  const dataToUpdate ={
    name: 'updated',
    phone: firebase.firestore.FieldValue.arrayUnion('09989')
  }
  // no chi ghi de nhung object trung nhau co truongwf truong, nhung cai nao khong co trong datatoupdate no se ko tac dong
  firebase.firestore().collection('users').doc(idToUpdate).update(dataToUpdate);
  //cau lenh delete cho firebase
  const idToDelete = 'l7CkQNKTNedj3cdBIyW6'
  firebase.firestore().collection('users').doc(idToDelete).delete();
}
const getManyDocument = (reponse) =>{
  const listData = []
  for (const doc of reponse.docs) {
    //console.log(getOneDocument(doc))
    // an nhung thang reponse truyen vao trong listdata
    listData.push(getOneDocument(doc));
  }
  return listData;
}

const getOneDocument = (response) => {
  const data = response.data();
  data.id = response.id;
  return data;
}