let fields = document.querySelectorAll(".info");

const delCustomer = (event) => {
  const name = document.querySelector("#namefield").innerHTML;
  const email = document.querySelector("#emailfield").innerHTML;
  const address = document.querySelector("#addressfield").innerHTML;
  const cost = document.querySelector("#costfield").innerHTML;
  const delButton = document.querySelector(".delButton");
  let custId = delButton.previousElementSibling.getAttribute("id")

  fetch(`/api/users/data/${custId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    
  })
    .then((res) => console.log(res.json()))
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

  console.log(delButton);

  delButton.addEventListener("click", delCustomer);
};


const editCustomer = (event) => {
  let editButtons = event.target;
  createDelButton();
  editButtons.innerHTML = "save";
  editButtons.setAttribute("state", "save");
  editButtons.classList.remove("edit");
  editButtons.classList.add("save");

  fields.forEach((field) => {
    field.setAttribute("contenteditable", "true");
  });
};

const saveCustomer = (event) => {
  const name = document.querySelector("#namefield").innerHTML;
  const email = document.querySelector("#emailfield").innerHTML;
  const address = document.querySelector("#addressfield").innerHTML;
  const cost = document.querySelector("#costfield").innerHTML;
  console.log(JSON.stringify({ name, email, address, cost }));

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

  fields.forEach((field) => {
    field.setAttribute("contenteditable", "false");
  });
};

let functionButtons = document.querySelectorAll(".functionButton");
console.log(functionButtons);
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
