const loginRedirect = (event) => {
    document.location.replace('/login');
};
document
    .querySelector('#loginButton')
    .addEventListener('click', loginRedirect);
  