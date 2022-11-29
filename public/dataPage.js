const editbuttons = document.querySelectorAll('.editButton');
const getCustomer = (event) => {
    
       const selectedCustomer = event.target.id
       document.location.replace('/api/users/data/' + selectedCustomer)
};



for (let i = 0; i < editbuttons.length; i++) {
              const currentButton = editbuttons[i];
              currentButton.addEventListener('click', getCustomer);
       };
       


