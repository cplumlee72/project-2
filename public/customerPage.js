let fields = document.querySelectorAll(".info");

const editCustomer = (event) => {
  let editButtons = event.target;

  editButtons.innerHTML = "save";
  editButtons.setAttribute("state", "save");
  editButtons.classList.remove("edit");
  editButtons.classList.add("save");

  fields.forEach((field) => {
    field.setAttribute("contenteditable", "true");
  });
};

const saveCustomer = (event) => {
  const name = document.querySelector('#namefield').innerHTML;
  const email = document.querySelector('#emailfield').innerHTML;
  const address = document.querySelector('#addressfield').innerHTML;
  const cost = document.querySelector('#costfield').innerHTML;
  console.log(JSON.stringify({name, email, address, cost}))
  fetch(`/api/users/data/${event.target.getAttribute('id')}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name, email, address, cost}),
  })
    .then((res) => console.log(res.json()))
    .then((data) => {
      console.log('Successful POST request:', data);
      return data;
    })
    .catch((error) => {
      console.error('Error in POST request:', error);
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
