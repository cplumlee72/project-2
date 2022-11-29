let editButtons = document.querySelectorAll(".editButton");
let fields = document.querySelectorAll(".info");

const editCustomer = (event) => {
  let editButtons = document.querySelectorAll(".editButton");

  editButtons.forEach((button) => {
    button.innerHTML = "save";
    button.setAttribute("class", "saveButton");
  });
  let saveButtons = document.querySelectorAll(".saveButton");

  saveButtons.forEach((button) => {
    button.addEventListener("click", saveCustomer);
  });

  fields.forEach((field) => {
    field.setAttribute("contenteditable", "true");
  });

};

const saveCustomer = (event) => {
  let saveButtons = document.querySelectorAll(".saveButton");
  saveButtons.forEach((button) => {
    button.innerHTML = "edit";
    button.setAttribute("class", "editButton");
  });
  let editButtons = document.querySelectorAll(".editButton");
  editButtons.forEach((button) => {
    button.addEventListener("click", editCustomer);
  });

  fields.forEach((field) => {
    field.setAttribute("contenteditable", "false");
  });
};
let saveButtons = document.querySelectorAll(".saveButton");


editButtons.forEach((button) => {
  button.addEventListener("click", editCustomer);
});
saveButtons.forEach((button) => {
    button.addEventListener("click", saveCustomer);
  });