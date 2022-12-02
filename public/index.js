const loginRedirect = (event) => {
    document.location.replace('/login');
};
const signUpRedirect = (event) => {
    document.location.replace('/signup')
}
document
    .querySelector('#loginButton')
    .addEventListener('click', loginRedirect);

document
    .querySelector('#signupbtn')
    .addEventListener('click', signUpRedirect);
  