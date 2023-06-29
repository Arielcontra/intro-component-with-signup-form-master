const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailAddress = document.getElementById("emailAddress");
const password = document.getElementById("password");
const button = document.getElementById("button");
const wfirstName = document.getElementById("first-name");
const wlastName = document.getElementById("last-name");
const wemailAddress = document.getElementById("email");
const wpassword = document.getElementById("key");
const iconFirstName = document.getElementById("icon1");
const iconLastName = document.getElementById("icon2");
const iconEmailAddress = document.getElementById("icon3");
const iconPassword = document.getElementById("icon4");


button.addEventListener("click",function(){
    if (firstName.value.length == 0) {
        wfirstName.style.display = 'flex';
        iconFirstName.style.display = 'flex';
        firstName.style.borderColor = "hsl(0, 100%, 74%)";
        firstName.placeholder ='';
    }
    if (lastName.value.length == 0) {
        wlastName.style.display = 'flex';
        iconLastName.style.display = 'flex';
        lastName.style.borderColor = "hsl(0, 100%, 74%)";
        lastName.placeholder ='';
    }
    if (emailAddress.value.indexOf('@') === -1) {
        wemailAddress.style.display = 'flex';
        iconEmailAddress.style.display = 'flex';
        emailAddress.style.borderColor = "hsl(0, 100%, 74%)";
        emailAddress.value = '';
        emailAddress.placeholder ='email@example/com';
        emailAddress.style.color = "hsl(0, 100%, 74%)";
    }
    if (password.value.length == 0) {
        wpassword.style.display = 'flex';
        iconPassword.style.display = 'flex';
        password.style.borderColor = "hsl(0, 100%, 74%)";
        password.placeholder ='';
    }
});


