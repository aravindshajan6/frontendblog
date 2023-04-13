function validateDetails() {
  let email = document.getElementById('email2').value;
  let password = document.getElementById('pass').value;
  let message = document.getElementById('message');
  const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  const regex2 = new RegExp(/[1-9]/);

  if (!regex.test(email)) {
    message.innerText = 'Invalid Email!';
    message.style.display = 'block';
    return false;
  }
  if (password.length < 8) {
    message.innerText = 'Password should be minimum 8 !';
    message.style.display = 'block';
    return false;
  }
  if (!regex2.test(password)) {
    message.innerText = 'Password must have a number !';
    message.style.display = 'block';
    return false;
  }
  alert('Login Successful !');
  setTimeout(2000);
  loginSuccess();
}
function loginSuccess() {}
