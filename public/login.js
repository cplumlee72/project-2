const loginFormHandler = async (event) => {
    event.preventDefault();
//   TODO **** LINK HTML TO LINES 4 and 5 ****
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
//  TODO LINK .login-form to this in HTML *****
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  