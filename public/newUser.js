const submitNewUser = async (event) => {
    event.preventDefault();
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    if (username && email && password) {
      const response = await fetch("/api/users/data/newuser", {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        document.location.replace("/api/users/data");
      } else {
        alert("Could not create user entry!");
      };
    };
  };
  document.addEventListener("submit", submitNewUser);
  