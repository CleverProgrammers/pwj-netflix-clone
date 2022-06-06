function checkIfLoggedIn() {
  const currentToken = localStorage.getItem('token')
  if (currentToken) {
    if (
      location.href.includes('/login.html') ||
      location.href.includes('/register.html')
    ) {
      location.href = '/'
    }
  } else {
    // If I am currently not logged in
    // And trying to acceess a unauthorized page
    // (Trying to access all pages besides login)
    if (
      !location.href.includes('/login.html') &&
      !location.href.includes('/register.html')
    ) {
      location.href = '/login.html'
    }
  }
}

function logOut() {
  localStorage.removeItem('token')
  location.href = '/login.html'
}

checkIfLoggedIn()
