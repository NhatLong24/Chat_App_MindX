const controller = {}
controller.register = (data) => {
  if(data.firstName === '') {
    view
    .setErrorMessage('first-name-error', 'Please input your first name')
  } else {
    view
    .setErrorMessage('first-name-error', '')
  }
  view.setErrorMessage('last-name-error', data.lastName === '' ? 'Please input your last name' : '')
  view.setErrorMessage('email-error', data.email === '' ? 'Please input your email' : '')
  view.setErrorMessage('password-error', data.password === '' ? 'Please input your password' : '')
  // view.setErrorMessage('confirm-password-error', data.confirmPassword === data.password ? '' : "Password didn't match")
  // view.setErrorMessage('confirm-password-error', data.confirmPassword === '' ? 'Please input your confirm password' : '')
  if (data.confirmPassword === '') {
    view.setErrorMessage('confirm-password-error','Please input your confirm password')
  } else if(data.confirmPassword !== data.password) {
    view.setErrorMessage('confirm-password-error', "Password didn't match")
  } else {
    view.setErrorMessage('confirm-password-error', "")
  }
  if(data.firstName !== ''
    && data.lastName !== ''
    && data.email !== ''
    && data.password !== ''
    && data.password === data.confirmPassword) {
      model.register(data)
  }
}
controller.login = ({email, password}) => {
  view
  .setErrorMessage('email-error', 
  email === '' ? 'Please input your email' : '')
  view
  .setErrorMessage('password-error', 
  password === '' ? 'Please input your password' : '')
  if(email !== '' && password !== '') {
    model.login({email,password})
  }
}
controller.createConversation = ({title, email}) => {
  if(title.trim() === '') {
    view
    .setErrorMessage('create-conversation-title-error', 'Please input title')
  } else {
    view
    .setErrorMessage('create-conversation-title-error', '')
  }
  if(email.trim() === '') {
    view
    .setErrorMessage('create-conversation-email-error', 'Please input email')
  } else {
    view
    .setErrorMessage('create-conversation-email-error', '')
  }
  if(title.trim() !== '' && email.trim() !== '') {
    model.createConversation({title, email})
  }
}
controller.addUser = (email) => {
  if(email.trim() === '') {
    view.setErrorMessage('email-error', 'Please input email')
  } else {
    view.setErrorMessage('email-error', '')
    model.addUser(email)
  }
}