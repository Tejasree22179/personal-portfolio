const roles = [
"Web Developer",
"Java Programmer",
"Student",
"Future Software Engineer"
];

let i=0;
let j=0;
let current="";
let deleting=false;

function type(){

current=roles[i];

if(!deleting){
document.getElementById("typing").textContent=current.substring(0,j++);
if(j>current.length){
deleting=true;
setTimeout(type,1000);
return;
}
}
else{
document.getElementById("typing").textContent=current.substring(0,j--);
if(j==0){
deleting=false;
i=(i+1)%roles.length;
}
}

setTimeout(type,deleting?40:80);
}

type();

function scrollToSection(id){
document.getElementById(id).scrollIntoView();
}
