let fields = document.querySelectorAll(".info");

const delCustomer = (event) => {
  const delButton = document.querySelector(".delButton");
  let custId = delButton.previousElementSibling.getAttribute("id")

  fetch(`/api/users/data/${custId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },    
  })
    .then((res) => console.log(res))
    .then((data) => {
      console.log("Successful DELETE request:", data);
      return data;
    })
    .catch((error) => {
      console.error("Error in DELETE request:", error);
    });
};

const createDelButton = () => {
  let buttonCell = document.querySelector("#buttonCell");  
  const delButton = document.createElement("button");
  delButton.classList.add("delButton", "btn", "btn-sm", "btn-rounded");
  delButton.innerText = "delete";
  buttonCell.appendChild(delButton);
  delButton.addEventListener("click", delCustomer);
};

// edit customer function to change customer value
const editCustomer = (event) => {
  let editButtons = event.target;
  createDelButton();
  editButtons.innerHTML = "save";
  editButtons.setAttribute("state", "save");
  editButtons.classList.remove("edit");
  editButtons.classList.add("save");
  // make input fields editable
  fields.forEach((field) => {
    field.setAttribute("contenteditable", "true");
  });
};
// function to save updated customer information in the database.
const saveCustomer = (event) => {
  let delButton = document.querySelector(".delButton");
  delButton.remove();
  const name = document.querySelector("#namefield").innerHTML;
  const email = document.querySelector("#emailfield").innerHTML;
  const address = document.querySelector("#addressfield").innerHTML;
  const cost = document.querySelector("#costfield").innerHTML;
  console.log(JSON.stringify({ name, email, address, cost }));
  // put request to update information by ID
  fetch(`/api/users/data/${event.target.getAttribute("id")}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, address, cost }),
  })
    .then((res) => console.log(res.json()))
    .then((data) => {
      console.log("Successful PUT request:", data);
      return data;
    })
    .catch((error) => {
      console.error("Error in PUT request:", error);
    });

  let saveButtons = event.target;

  saveButtons.innerHTML = "edit";
  saveButtons.setAttribute("state", "edit");
  saveButtons.classList.remove("save");
  saveButtons.classList.add("edit");
    // set each input field to not editable once the save button is clicked 
  fields.forEach((field) => {
    field.setAttribute("contenteditable", "false");
  });
};

let functionButtons = document.querySelectorAll(".functionButton");
functionButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // console.log(event.target.getAttribute("state"));
    if (event.target.getAttribute("state") === "edit") {
      editCustomer(event);
    } else if (event.target.getAttribute("state") === "save") {
      saveCustomer(event);
    }
    return;
  });
});
