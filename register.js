// For User form validation
function validation(){
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var password = document.getElementById("password").value;

  var usercheck = /^[A-Za-z]{3,30}$/;
  var emailcheck = /^[A-Za-z_0-9.]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
  var numbercheck = /^[6789][0-9]{9}$/;
  var passwordcheck = /^[A-Za-z_0-9.@]{4,8}$/;

  if(usercheck.test(username)){
      document.getElementById("errorname").innerHTML=" ";
  }
  else{
      document.getElementById("errorname").innerHTML="Invalid Name Format";
      return false;

  }
  if(emailcheck.test(email)){
      document.getElementById("erroremail").innerHTML=" ";
  }
  else{
      document.getElementById("erroremail").innerHTML="Invalid Email Format";
      return false;
  }
  if(numbercheck.test(number)){
      document.getElementById("errornumber").innerHTML=" ";
  }
  else{
      document.getElementById("errornumber").innerHTML="Invalid  Number";
      return false;
  }
  if(passwordcheck.test(password)){
      document.getElementById("errorpassword").innerHTML=" ";
  }
  else{
      document.getElementById("errorpassword").innerHTML="Invalid  password";
      return false;

  }
}




// for feedback collection
const scriptURL = 'https://script.google.com/macros/s/AKfycbyYqHmfC-6Bu5n_peVHQp6rUAi2nOn7-H4E3YCGuC2bHzuUqlsLo-555pcJa3qhcH46/exec'
            const form = document.forms['submit-googlesheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Feedback! Hope you had great shopping with us..☺"))
                .catch(error => console.error('Error!', error.message))
            })


        
          