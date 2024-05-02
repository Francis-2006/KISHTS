

let options=document.querySelector('.menulinks')
function mymenu() {
   options.classList.toggle('menutoggle')
}


 var btn=document.querySelector('.submit');

btn.addEventListener('click',
function (event){


    event.preventDefault()
}

)

var Nameerror=document.querySelector('.name-error');
var ageerror=document.querySelector('.age-error');
var indexerror=document.querySelector('.index-error');
var gradeerror=document.querySelector('.grade-error');
var emailerror=document.querySelector('.email-error');
var submiterror=document.querySelector('.submit-error');
var schoolerror=document.querySelector('.school-error');
var codeerror=document.querySelector('.code-error');
var telerror=document.querySelector('.tel-error');
var gtelerror=document.querySelector('.gtel-error');



function validateName() {
    thename=document.querySelector('.fullname');
   
        
    

    if (thename.value.length==0) {
        Nameerror.innerHTML='Name is required'
        return false
    }else{
        Nameerror.innerHTML=''
        return true;
    };
}
function validateschool() {
    theschool=document.querySelector('.school');


    if(theschool.value==0){
        schoolerror.innerHTML='Type school name'
        return false;
    }else{
        schoolerror.innerHTML=''
    }
}

function validateAge() {
    theage=document.querySelector('.Age');
if(theage.value==0){
 ageerror.innerHTML='Type the age'
}else{
    ageerror.innerHTML=''
}

}

function validatetel() {
    thetel=document.querySelector('.tel');
     
    if(thetel.value.length==10){
        telerror.innerHTML=''
        return true;
    }else{
        telerror.innerHTML='Up to 10 digits'
        return false
    }
    
}


function validategtel() {
    thegtel=document.querySelector('.gtel');

    if(thegtel.value.length==10){
        gtelerror.innerHTML=''
    }else{
        gtelerror.innerHTML='Up to 10 digits'
    }
}



function validateEmail() {
    theemail=document.querySelector('.email');

    if(!theemail.value.match(/^[A-Za-z\._\-[0-9*[@][A-Za-z]*[a-z]{2,4}$/)){
        emailerror.innerHTML='Invalid Email format'
    }else{
        emailerror.innerHTML=''
    }
}

function validatecode() {
    thecode=document.querySelector('.code');

    if(thecode.value.length==4){
        codeerror.innerHTML=''
        return true

    }else{
        codeerror.innerHTML='Type the voucher code'
        return false
    }
}




function validateGrade() {
    var thegrade=document.querySelector('.grade');
     

    if (thegrade.value<6) {
        gradeerror.innerHTML='Invalid Grade'
        return true
    } else if(thegrade.value>25) {
        gradeerror.innerHTML='Unqualified Grade'
        return false
    }else if(thegrade.value>=6<26){
        gradeerror.innerHTML=''
        return true
    }
}

function validateindex() {
    theindex=document.querySelector('.index');

    if(theindex.value.length==10){
        indexerror.innerHTML=''
        return true
    }else{
        indexerror.innerHTML='up to 10 digits'
        return false
    }
}

    function myfun() {
         
       if(theage.value.trim()===""){
        alert('conplete the form');
       }
















    }