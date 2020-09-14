const model = {}
model.currentUser = undefined
model.conversations = []
model.currentConversation = undefined
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
  } catch(err) {
    alert(err.message)
    console.log(err)
  }
}
model.getConversations = async () => {
  const response = await firebase.firestore().collection('conversations').
  where('users','array-contains',model.currentUser.email).get()
  model.conversations = getManyDocument(response)
  if(model.conversations.length > 0) {
    model.currentConversation = model.conversations[0]
    view.showCurrentConversation()
    view.showConversations()
  }
}
model.addMessage = (message) => {
  dataToUpdate = {
    messages: firebase.firestore.FieldValue.arrayUnion(message)
  }
  firebase.firestore().collection('conversations')
  .doc(model.currentConversation.id).update(dataToUpdate)
}
model.listenConversationChange = () => {
  let isFistRun = true
  firebase.firestore().collection('conversations').
  where('users', 'array-contains', model.currentUser.email).
  onSnapshot((snapshot) => {
    if(isFistRun) {
      isFistRun = false
      return
    }
    for(oneChange of snapshot.docChanges()) {
      const docData = getOneDocument(oneChange.doc)
      if(oneChange.type === 'modified') {
        if(docData.id === model.currentConversation.id) {
          if(model.currentConversation.users.length !== docData.users.length) {
            view.addUser(docData.users[docData.users.length - 1])
            view.addUserInConversation(docData.users.length)

          } else {
            view
            .addMessage(docData.messages[docData.messages.length-1])
            view.scrollToEndElement()
          }
          model.currentConversation = docData
        }
        for(let i = 0; i < model.conversations.length; i++) {
          if(model.conversations[i].id === docData.id) {
            model.conversations[i] = docData
          }
        }
        if(docData.messages[docData.messages.length-1].owner !== model.currentUser.email)
        {
          view.showNotification(docData.id);
        }
        
      }
      if(oneChange.type === 'added') {
        model.conversations.push(docData)
        view.addConversation(docData)
      }
    }
  })
}
model.createConversation = ({title, email}) => {
  const dataToCreate = {
    title,
    createdAt: new Date().toISOString(),
    messages: [],
    users: [email, model.currentUser.email]
  }
  firebase.firestore().collection('conversations').add(dataToCreate)
  view.setActiveScreen('chatPage', true)
}
model.addUser = (email) => {
  const dataToUpdate = {
    users: firebase.firestore.FieldValue.arrayUnion(email)
  }
  firebase.firestore().collection('conversations')
  .doc(model.currentConversation.id).update(dataToUpdate)
}
