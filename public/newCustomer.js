const submitNewCust = async (event) => {
  event.preventDefault();
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const address = document.querySelector("#address").value.trim();
  const cost = document.querySelector("#cost").value.trim();
  if (email && name) {
    const response = await fetch("/api/users/data/newcustomer", {
      method: "POST",
      body: JSON.stringify({ name, email, address, cost }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/api/users/data");
    } else {
      alert("Could not create customer entry!");
    };
  };
};
document.addEventListener("submit", submitNewCust);
