const editbuttons = document.querySelectorAll(".editButton");
const newCustomerButton = document.querySelector("#newCustomer");

const newCustomerHandler = (event) => {
  document.location.replace("/newcustomer");
};

const getCustomer = (event) => {
  const selectedCustomer = event.target.id;
  document.location.replace("/api/users/data/" + selectedCustomer);
};

for (let i = 0; i < editbuttons.length; i++) {
  const currentButton = editbuttons[i];
  currentButton.addEventListener("click", getCustomer);
}

newCustomerButton.addEventListener("click", newCustomerHandler);
