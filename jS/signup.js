function handlesubmit() {
  //   alert('Done');
  let message = document.getElementById('message');
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const rpassword = document.getElementById('rPassword').value;
  const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  const regex2 = new RegExp(/[1-9]/);
  message.style.display = 'none';
  console.log(name);
  //checking if name is valid
  if (name.length == 0) {
    message.innerText = 'Please enter your name!';
    message.style.display = 'block';
    moveToMessage();
    return false;
  }

  //check email
  if (!regex.test(email)) {
    message.innerText = 'Please enter valid Email!';
    message.style.display = 'block';
    moveToMessage();
    return false;
  }
  //check password
  if (password.length < 8) {
    message.innerText = 'Password should be minimum 8 !';
    message.style.display = 'block';
    moveToMessage();
    return false;
  }

  if (!regex2.test(password)) {
    message.innerText = 'Password must have a number !';
    message.style.display = 'block';
    moveToMessage();
    return false;
  }
  //match password
  if (rpassword != password) {
    message.innerText = 'Passwords donot match !';
    message.style.display = 'block';
    moveToMessage();
    return false;
  }
  //check terms and conditions
  if (document.getElementById('acceptTerms').checked == true) {
    alert('Sign UP Successfull!');
  } else if (document.getElementById('acceptTerms').checked == false) {
    alert('Accept terms of service !');
  }
}

// function conditionMet() {
//   //   alert('met');
//   let value = document.getElementById('acceptTerms').value;
//   if (value == 0) {
//     document.getElementById('acceptTerms').value = 1;
//   } else {
//     document.getElementById('acceptTerms').value = 0;
//   }
// }

function moveToMessage() {
  var element = document.getElementById('message');
  element.scrollIntoView();
}
