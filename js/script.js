//step-1: add click event handler with the submit button 

document.getElementById('btn-submit').addEventListener('click', function(){
  // step-2: Get the email address inside the email input field
  // always rember to use value to get text from an input field
  const emailField = document.getElementById('user-email');
  const email = emailField.value;
  //step-3: get password
  //3. a.set id on the html emement
  //3.b. Get the emement
  //3.c. Get the value form the elemenent.
  const passwordFiled = document.getElementById('user-password');
  const password = passwordFiled.value;

  //Do not check verify password on the client side
  // step:4: verify email and password
     if (email ==='hasanengr3248@gmail.com' && password === 'secret'){
      console.log('valid user')
     }
     else{
      console.log('invalid user')
     }
})