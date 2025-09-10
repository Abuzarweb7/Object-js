
// Q1
// const student = [
//     {name :"abbas" , marks : 90},
//     {name : "qadeer" , marks : 80},
//     {name : "ali" ,  marks : 70}
// ]

// const box = document.querySelector("#box");
// for(let i = 0 ; i < student.length;i++){
//     box .innerHTML += `<p> Name ${student[i].name} Marks ${student[i].marks}</p>`
// }


// Q2

// const getTopScorer = document.querySelector("h2");
// const students = [
//     {name :"abbas" , marks : 90},
//     {name : "qadeer" , marks : 80},
//     {name : "ali" ,  marks : 70}
// ]

// const topScorer = students[0];
// for(let i = 1; i < students .length;i++){
//     if(students[i].marks > topScorer.marks){
//         topScorer = students[i]
//         getTopScorer.innerHTML += `<p> Name ${topScorer[i].name} marks ${topScorer[i].marks} </p>`
        
//     }
    
// }

// Q3

  
// const products = [
//     {name : "laptop" , price: 80000},
//     {name : "mobile" , price : 50000},
//     {name : "tablet" , price : 30000}
// ]

// function filterByPrice(minPrice, maxPrice) {
//   const filtered = [];

//   for (let i = 0; i < products.length; i++) {
//     const product = products[i];

//     if (product.price >= minPrice && product.price <= maxPrice) {
//       filtered.push(product); 
//     }
//   }

//   return filtered;
// }
// console.log(filterByPrice(40000,80000));





// Q4
// Given a paragraph from a textarea, count the frequency of each word and display it as a
// list.


















// Q5

// Group Users by Role
// Given an array of user objects ({name, role}), group and display users under role
// headings.
// const grupByRole = document.querySelector("h2");
// const users = [
//     {name : "abdullah" , role : "admin"},
//     {name : "ali" , role : "user"}
// ]


// for(let i  = 0 ; i < users.length;i++){
// grupByRole .innerHTML += `<p> Name ${users[i].name} Role ${users[i].role} </p>`
// }




// Q6



// Sort Products by Price
// Display a list of products sorted by price (ascending/descending toggle via button)


// let products = [
//       { name: "Phone", price: 500 },
//       { name: "Laptop", price: 1000 },
//       { name: "Earbuds", price: 100 },
//       { name: "Tablet", price: 700 }
//     ];
//     let asc = true; 
//     let btn = document.getElementById("btn");
//     let list = document.getElementById("list");
//     showList();
//     btn.onclick = function () {
//       if (asc) {
//         products.sort(function (a, b) {
//           return a.price - b.price;
//         });
//         btn.innerText = "Sort: Descending";
//       } else {
//         products.sort(function (a, b) {
//           return b.price - a.price;
//         });
//         btn.innerText = "Sort: Ascending";
//       }
//       asc = !asc; 
//       showList(); 
//     };
//     function showList() {
//       list.innerHTML = "";
//       for (let i = 0; i < products.length; i++) {
//         let item = document.createElement("li");
//         item.textContent = products[i].name + " - $" + products[i].price;
//         list.appendChild(item);
//       }
//     }








// Q7
// const inputName = document.querySelector("#inputName");
// const inputEmail = document.querySelector("#inputEmail");
// const inputAge = document.querySelector("#inputAge");


// function userInfo(){
//     const user = {
//         name : inputName.value,
//         email : inputEmail.value,
//         age : inputAge.value
//     }
//     console.log(user);
// }



// Q8
// const displayUser = document.querySelector("h5")
// const user = {
//   name: "Ali",
//   email: "ali@gmail.com",
//   age: 25,
//   address: {
//     city: "Quetta",
//     country: "Pakistan",
//     zip: "54000"
//   }
// };

// displayUser.innerHTML += `<p> <span>Name</span> ${user.name} </p>`
// displayUser.innerHTML += `<p> <span>Email</span> ${user.email} </p>`
// displayUser.innerHTML += `<p> <span>Age</span> ${user.age} </p>`


// displayUser.innerHTML += `<h4> Address </h4>`
// displayUser.innerHTML += `<p> <span> City </span> ${user.address.city} </p>`
// displayUser.innerHTML += `<p> <span> Country </span> ${user.address.country} </p>`
// displayUser.innerHTML += `<p> <span> Zip </span> ${user.address.zip} </p>`



// Q9

// 9. Calculate Cart Total
// Given an array of cart items ({name, price, quantity}), display a full cart with
// totals using DOM.












