document.getElementById('signup_button').addEventListener('click', () => {
  const signupInfo = {
    user_name: document.getElementById('user_name').value,
    user_email: document.getElementById('user_email').value,
    user_password: document.getElementById('user_password').value
  }

  API
    .post('/auth/signup', signupInfo)
    .then(response => {
      localStorage.setItem('name', response.data.name)
      localStorage.setItem('email', response.data.email)
      localStorage.setItem('token', response.data.token)
      document.getElementById('user_name').value = ''
      document.getElementById('user_email').value = ''
      document.getElementById('user_password').value = ''
    })
    .catch(handleError)
})
