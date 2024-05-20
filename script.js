function Retrieve(){
    Users = JSON.parse(localStorage.getItem('UserInfo'));
}
Retrieve();




const Register = document.getElementById('Register');
const Login = document.getElementById('Login');
Register.addEventListener('submit',(e)=>{
    let name1 = document.getElementById('name1');
    let email = document.getElementById('email');
    let password1 = document.getElementById('password1');
    let name1error = document.getElementById('name1error');
    let emailerror = document.getElementById('emailerror');
    let password1error = document.getElementById('password1error');
    var icon1 = document.querySelector('.icon1');
    var icon2 = document.querySelector('.icon2');
    var icon3 = document.querySelector('.icon3');
    var emailcheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    email.style.marginTop = '-50px';
    password1.style.marginTop = '-50px';
    submit.style.marginTop = '-10px';
    if(name1.value == null || name1.value=='') {
        e.preventDefault();
        name1error.innerHTML = "Name is required please";
        icon1.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    }else{
        e.preventDefault();
        icon1.classList.add('verify');
        name1error.innerHTML = '';
        icon1.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    }
    if(email.value.match(emailcheck)) {
        e.preventDefault();
        icon2.classList.add('verify');
        icon2.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        emailerror.innerHTML = '';
    }else{
        e.preventDefault();
        icon2.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        emailerror.innerHTML = 'Valid email address is required';
    }
    if(password1.value.length <= 7){
        e.preventDefault();
        password1error.innerHTML ='Password must be atleast 8 characters';
        icon3.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    }else {
        e.preventDefault();
        icon3.classList.add('verify');
        icon3.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        password1error.innerHTML = '';
    }

})

var Users = [];
function Store(){
    localStorage.setItem('UserInfo',JSON.stringify(Users));
}

Register.addEventListener('submit',(e)=>{
let icon1 = document.querySelector('.icon1');
    let icon2 = document.querySelector('.icon2');
    let icon3 = document.querySelector('.icon3');
let positionPassword = Users.indexOf(password1.value);
let positionEmail = Users.indexOf(email.value);
if (positionPassword == -1 && positionEmail == -1) {
if(icon1.classList.contains('verify') && icon2.classList.contains('verify') && icon3.classList.contains('verify')){
   alert('good');
   Users.push(password1.value);
   Users.push(name1.value);
   Users.push(email.value);
   Store();
  
}
}else{
alert('This account already exists please Login');
}
})
  
   
   




Register.addEventListener('input',(e)=>{
    let name1 = document.getElementById('name1');
    let email = document.getElementById('email');
    let password1 = document.getElementById('password1');
    let name1error = document.getElementById('name1error');
    let emailerror = document.getElementById('emailerror');
    let password1error = document.getElementById('password1error');
    let icon1 = document.querySelector('.icon1');
    let icon2 = document.querySelector('.icon2');
    let icon3 = document.querySelector('.icon3');
    var emailcheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    email.style.marginTop = '-50px';
    password1.style.marginTop = '-50px';
    submit.style.marginTop = '-10px';
    if(name1.value == null || name1.value=='') {
        e.preventDefault();
        name1error.innerHTML = "Name is required please";
        icon1.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    }else{
        e.preventDefault();
        name1error.innerHTML = '';
        icon1.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    }
    if(email.value.match(emailcheck)) {
        e.preventDefault();
        icon2.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        emailerror.innerHTML = '';
    }else{
        e.preventDefault();
        icon2.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        emailerror.innerHTML = 'Valid email address is required';
    }
    if(password1.value.length <= 7){
        e.preventDefault();
        password1error.innerHTML ='Password must be atleast 8 characters';
        icon3.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    }else {
        e.preventDefault();
        icon3.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        password1error.innerHTML = '';
    }

})




Login.addEventListener('submit', (e)=>{
 let name2 = document.getElementById('name2');
 let password2 = document.getElementById('password2');
 let name2error = document.getElementById('name2error');
 let password2error = document.getElementById('password2error');
 let icon11 = document.querySelector('.icon11');
 let icon12 = document.querySelector('.icon12');

 if(name2.value == null || name2.value == ''){
    e.preventDefault();
    icon11.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    name2error.innerHTML = 'Username is required please';
    }else {
        e.preventDefault();
        
        icon11.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        name2error.innerHTML = '';
 }
 if(password2.value.length <= 7) {
    e.preventDefault();
    icon12.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    password2error.innerHTML = 'Password must be atleast 8 characters';
 }else{
    e.preventDefault();
    icon12.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    password2error.innerHTML = '';
 }
})
Retrieve();
Login.addEventListener('submit',(e)=>{
 let name2 = document.getElementById('name2');
 let password2 = document.getElementById('password2');
 let positionPassword2 = Users.indexOf(password2.value);
 let positionName = Users.indexOf(name2.value);
 if(positionPassword2 == -1 && positionName == -1){
    alert('No such account exists please register to proceed')
 }else{
    if(positionPassword2 == positionName - 1) {
        alert('Username found');
        window.location.assign('homepage.html');
    }
 }

})
Login.addEventListener('input', (e)=>{
 let name2 = document.getElementById('name2');
 let password2 = document.getElementById('password2');
 let name2error = document.getElementById('name2error');
 let password2error = document.getElementById('password2error');
 let icon11 = document.querySelector('.icon11');
 let icon12 = document.querySelector('.icon12');

 if(name2.value == null || name2.value == ''){
    e.preventDefault();
    icon11.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    name2error.innerHTML = 'Username is required please';
    }else {
        e.preventDefault();
        icon11.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        name2error.innerHTML = '';
 }
 if(password2.value.length <= 7) {
    e.preventDefault();
    icon12.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    password2error.innerHTML = 'Password must be atleast 8 characters';
 }else{
    e.preventDefault();
    icon12.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    password2error.innerHTML = '';
 }
})



function login() {
    var Login = document.getElementById('Login');
    var Register = document.getElementById('Register');
    var Indicator = document.getElementById('indicator');

    Register.style.transform = "translateX(310px)";
    Login.style.transform = "translateX(310px)";
    Indicator.style.transform = "translateX(-130px)";
}
function register(){
    var Login = document.getElementById('Login');
    var Register = document.getElementById('Register');
    var Indicator = document.getElementById('indicator');

    Register.style.transform = "translateX(0px)";
    Login.style.transform = "translateX(-10px)";
    Indicator.style.transform = "translateX(0px)";
}


