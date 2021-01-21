let registerForm = document.getElementById("registerForm");
let apiUrl =  "http://localhost:3000";
if(location.href.indexOf("netlify") != -1){
    apiUrl = "https://netflix-cp.herokuapp.com";
}
registerForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let payload = {
        name: registerForm.name.value,
        email: registerForm.email.value,
        password: registerForm.password.value
    }
    fetch(apiUrl + "/register", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then((response)=>{
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("something went wrong");
        }
    }) // returns a promise already
    .then((response)=>{
        location.href = `/login.html?existingEmail=${payload.email}&registered=true`;
    })
    .catch((error)=>{
        location.href = `/login.html?existingEmail=${payload.email}`
    })

})