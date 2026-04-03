const signUpForm = document.getElementById('signUpForm');
let users = JSON.parse(localStorage.getItem('users')) || [];


function addRow(user) {
    const tableBody = document.getElementById("tableBody");
  
    const row = document.createElement("tr");
  
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.number}</td>
    `;
  
    tableBody.appendChild(row);
  }

signUpForm.addEventListener('submit',(e)=>{
     e.preventDefault();
     
     const name = document.getElementById("name").value;
     const email = document.getElementById("email").value;
     const number = document.getElementById("number").value;

     if(name.length < 3 || name.length>20){
        alert("Name must be between 3 and 20 characters");
        return;
     }

     if (!/^\d{10}$/.test(number)) {
        alert("Mobile number must be exactly 10 digits");
        return;
      }

      if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
        alert("Invalid email address");
        return;
      }

      const user = { name, email, number };
      users.push(user);
      localStorage.setItem("users",JSON.stringify(users))

     addRow(user)
    
      alert("Form submitted successfully!");
      signUpForm.reset();
})


window.addEventListener("DOMContentLoaded", () => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
  
    savedUsers.forEach(user => {
      addRow(user);
    });
  });
