

let options=document.querySelector('.menulinks')
function mymenu() {
   options.classList.toggle('menutoggle')
}


function validate() {
   text=document.querySelector('#text-id').value;
   required=100;
   remain=required-text.length;

   document.querySelector('.remain').innerHTML=remain +' characters remaining';
   
   document.querySelector('.remain').style.color='red'
   
}
 var text=document.querySelector('#text-id');
 var email=document.querySelector('#email-id');
 var Outcome=document.querySelector('.outcome');
 var Message=document.querySelector('.message');

 function sendForm() {

   if (email.value.trim()=='' || text.value.trim()=='') {
      alert("Please complete the form")
      event.preventDefault();
      return;
   }else{
      alert("Successfull")
   }
   
      
   }
   
   






 




