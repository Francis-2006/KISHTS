

let options=document.querySelector('.menulinks')
function mymenu() {
   options.classList.toggle('menutoggle')
}

function myfun() {
    

var Name=document.querySelector('.fullname');
var Age=document.querySelector('.Age');
var School=document.querySelector('.school');
var Male=document.querySelector('.malecheck');
var Female=document.querySelector('.femalecheck');
var Grade=document.querySelector('.grade');
var Index=document.querySelector('.index');
var Code=document.querySelector('.code');
var tel=document.querySelector('.tel');
var Gtel=document.querySelector('.gtel');
var Email=document.querySelector('.email');
    

var Namevalue=document.querySelector('.fullname').value;
var Agevalue=document.querySelector('.Age').value;
var Schoolvalue=document.querySelector('.school').value;
var Malevalue=document.querySelector('.malecheck').value;
var Femalevalue=document.querySelector('.femalecheck').value;
var Gradevalue=document.querySelector('.grade').value;
var Indexvalue=document.querySelector('.index').value;
var Codevalue=document.querySelector('.code').value;
var telvalue=document.querySelector('.tel').value;
var Gtelvalue=document.querySelector('.gtel').value;
var Emailvalue=document.querySelector('.email').value;


//Name


if (Grade.value>0 && Grade.value<6){
    alert('Invalid grade')
    event.preventDefault();
  return true;
   }else if(Grade.value>25){
       alert('Unqualified Grade,Try next time')
       event.preventDefault();
       return false;
   };

if(Index.value.length>0 && Index.value.length<10){
alert('Index number is not up to Limit (10 digits)')
event.preventDefault();
return true;
}else if(Index.value.length>10){
    alert('Index number is Invalid')
    event.preventDefault();
    return false;
}
    

if(Code.value.length>0 && Code.value.length<4){
    alert('Invalid Voucher code')
    event.preventDefault();
    return true;
}else if(Code.value.length>4){
    alert('Voucher code is not correct')
    event.preventDefault();
    return false;
}

if(tel.value.length>0 && tel.value.length<10){
    alert('Invalid Telephone number')
    event.preventDefault();
    return true;
}else if(tel.value.length>10){
    alert('Wrong number')
    event.preventDefault();
    return false;
}

if(Gtel.value.length>0 && Gtel.value.length<10){
    alert('Invalid Telephone number')
    event.preventDefault();
}else if(Gtel.value.length>10){
    alert('Wrong number')
    event.preventDefault();
}



var container=document.querySelector('.outputcont');

if(Index.value.trim()==0 || Grade.value.trim()=='' || Code.value.trim()=='' ||
tel.value.trim()=='' || Gtel.value.trim()=='' ){
    alert('please complete the form and continue ')

}else{
    alert('Hello '+ Name.value + ' your form was successfully submitted...wait few days for feedback' )
    
}

localStorage.setItem('Namevalue' ,Namevalue)

localStorage.setItem('Gradevalue' ,Gradevalue)

localStorage.setItem('Codevalue' ,Codevalue)

localStorage.setItem('Indexvalue' ,Indexvalue)



}