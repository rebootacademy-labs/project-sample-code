document.getElementById('login_button').addEventListener('click', () => {
  const loginInfo = {
    user_email: document.getElementById('login_user_email').value,
    user_password: document.getElementById('login_user_password').value
  }

  API
    .post('/auth/login', loginInfo)
    .then(response => {
      localStorage.setItem('name', response.data.name)
      localStorage.setItem('email', response.data.email)
      localStorage.setItem('token', response.data.token)
      document.getElementById('login_user_email').value = ''
      document.getElementById('login_user_password').value = ''
      window.location = 'index-logged.html'
    })
    .catch(handleError)
})
