let signupbtn=document.querySelector("#signupbtn");
let signinbtn=document.querySelector("#signinbtn");
let nameField=document.querySelector("#nameField");
let title=document.querySelector("#title");
let names=document.querySelector("#names");
let email=document.querySelector("#email");
let password=document.querySelector("#password");
let login=document.querySelector("#login");



signinbtn.onclick=()=>{
    nameField.style.maxHeight=0;
    title.innerHTML="Sign in";
    signupbtn.classList.add("disabled");
    signinbtn.classList.remove("disabled");
 

}
signupbtn.onclick=()=>{
    nameField.style.maxHeight="60px";
    title.innerHTML="Sign Up";
    signupbtn.classList.remove("disabled");
    signinbtn.classList.add("disabled");
   
    
    
}
login.onclick=()=> {
    if(names.value && email.value && password.value ){
        localStorage.setItem("name",names.value);
        localStorage.setItem("email",email.value);
        localStorage.setItem("password",password.value);
        h1.innerHTML="Welcome user";
        location.reload();

    }
};
