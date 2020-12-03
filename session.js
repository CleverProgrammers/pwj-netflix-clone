function checkIfLoggedIn(){
    const currentToken = localStorage.getItem('token');
    if(currentToken){
        if(location.href == "http://127.0.0.1:5500/login.html"){
            location.href = "/";
        }
    } else {
        // If I am currently not logged in
        // And trying to acceess a unauthorized page
        // (Trying to access all pages besides login)
        if(location.href != "http://127.0.0.1:5500/login.html") {
            location.href = '/login.html';
        }
    }
}

function logOut(){
    localStorage.removeItem('token');
    location.href = '/login.html';
}

checkIfLoggedIn();


