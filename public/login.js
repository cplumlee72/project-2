const loginFormHandler = async (event) => {
  event.preventDefault();
  const email = document.querySelector("#email-login").value;
  const password = document.querySelector("#password-login").value;
  // if email and password values exist, attempt to login
  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  };
};

document.addEventListener("submit", loginFormHandler);
