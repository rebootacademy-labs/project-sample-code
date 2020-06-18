document.getElementById('auth_request').addEventListener('click', function() {
  API
    .get('/whoami', { headers: { token: localStorage.getItem('token') }})
    .then(response => {
      console.log(response.data)
    })
    .catch(handleError)
})

document.getElementById('logout').addEventListener('click', function() {
  localStorage.clear();
  window.location = 'index.html'
})
