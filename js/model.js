const model = {}
model.currentUser = undefined
model.conversations =[]
model.currentConversation= undefined
model.register = async (data) => {
  try {
    const response = await firebase.auth()
    .createUserWithEmailAndPassword(data.email, data.password)
    firebase.auth().currentUser.updateProfile({
      displayName: data.firstName + ' ' + data.lastName
    })
    firebase.auth().currentUser.sendEmailVerification()
  } catch (err) {
    alert(err.message)
    console.log(err)
  }
}
model.login = async ({email, password}) => {
  try {
    firebase.auth().signInWithEmailAndPassword(email, password)
     console.log(response)
     if(response && response.user.emailVerified) {
       // VAO MAN CHAT
       model.currentUser = {
         email: response.user.email,
         displayName: response.user.displayName
       }
       view.setActiveScreen('chatPage')
     } else {
       alert('Please verify your email')
     }
  } catch(err) {
    alert(err.message)
    console.log(err)
  }
}
model.loadConversation = () => {
    firebase.firestore.collection(model.collectionName).where('user','array-contains',model.currentUser.email).get().then(res => {
        const data = utils.getDataFromDocs(res.docs)
        if (data.length >0){
          model.currentConversation = data [0]
          view.showCurrenConversation()
        }
        console.log(data);
    })
};
model.addMessage = (message) =>{
  const dataToUpdate ={
    messages: firebase.firestore.FieldValue.arrayUnion (message),
  }
  firebase.firestore().collection('conversations').doc(model.currentConversation.id).update(dataToUpdate);
}
// model.listenConversationChange = () => {
//   firebase.firestore().collection(model.collectionName).where('user','array-contains',model.currentUser.email).onSnapshot((res)=> {
//     const docChanges = res.docChanges();
//     console.log(docChanges);
//   });
// }
model.getConversations = async () => {
  // luu lai thong tin tu firebase
  console.log('model.getConversation');
  const response= await firebase.firestore().collection('conversations').where('users','array-contains',model.currentUser.email).get()
  console.log(getManyDocument(response));
  model.conversations = getManyDocument(response);
  if(model.conversations.length > 0){
    model.currentConversation= model.conversations[0];
    view.showCurrentConversation();
  }

}
model.listenConversationChange=() => {
  let IsFisRun =true;
  firebase.firestore().collection('conversations').where('users','array-contains',model.currentUser.email).onSnapshot((snapShot)=>{
  if(IsFisRun){
    IsFisRun = false;
    return;
  }
  console.log(snapShot.docChanges());
  for ( oneChanges of snapShot.docChanges()) {
    const docData = getOneDocument(oneChanges.doc)
    if (docData.id === model.currentConversation.id)
    {
      model.currentConversation = docData;
      view.addMessage(model.currentConversation.messages[model.currentConversation.messages.length-1]);
      view.scrollToEndElement();
    }
  }
  
  });
}