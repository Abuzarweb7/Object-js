
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




// const text = document.querySelector("#text");
// const btn = document.querySelector("#btn");
// const result = document.querySelector("#result");






// btn.addEventListener("click" ,()=>{
//   let frequncy = {};
  
// let word = text.value.toLowerCase().match(/\b\w+\b/g);  ;

// if(word){
//   for (let count of word) {

//     if(frequncy[count]){
// frequncy[count] += 1
//     }
//     else{
//   frequncy[count] = 1
// }


// }
// }
// result.textContent = JSON.stringify(frequncy)



// })












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
// const cart = document.querySelector("#cart");
//     let item1Name = "Apple";
//     let item1Price = 100;
//     let item1Qty = 2;
//     let item1Total = item1Price * item1Qty;

//     let item2Name = "Banana";
//     let item2Price = 50;
//     let item2Qty = 5;
//     let item2Total = item2Price * item2Qty;

//     let item3Name = "Milk";
//     let item3Price = 120;
//     let item3Qty = 1;
//     let item3Total = item3Price * item3Qty;

//     // Sabka total
//     let grandTotal = item1Total + item2Total + item3Total;

  
//   cart .innerHTML  +=     "<p>" + item1Name + " - " + item1Price + " x " + item1Qty + " = " + item1Total + "</p>" +
//       "<p>" + item2Name + " - " + item2Price + " x " + item2Qty + " = " + item2Total + "</p>" +
//       "<p>" + item3Name + " - " + item3Price + " x " + item3Qty + " = " + item3Total + "</p>" +
//       "<hr>" +
//       "<h3>Total: " + grandTotal + "</h3>";


// Q10

// const listDiv = document.getElementById("list");
//     const fruitsCheckbox = document.getElementById("fruits");
//     const veggiesCheckbox = document.getElementById("veggies");

//     // Items
//     const apple = "Apple";
//     const banana = "Banana";
//     const carrot = "Carrot";
//     const spinach = "Spinach";

//     function showList() {
//       listDiv.innerHTML = ""; // 

//       if (fruitsCheckbox.checked) {
//         listDiv.innerHTML += "<p>" + apple + "</p>";
//         listDiv.innerHTML += "<p>" + banana + "</p>";
//       }

//       if (veggiesCheckbox.checked) {
//         listDiv.innerHTML += "<p>" + carrot + "</p>";
//         listDiv.innerHTML += "<p>" + spinach + "</p>";
//       }
//     }

    
//     showList();

    
//     fruitsCheckbox.onchange = showList;
//     veggiesCheckbox.onchange = showList;



    // Q11
// const input = document.querySelector("#input");
// const list = document.querySelector("ol");
// const fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

// fruits.addEventListener ( 'input' , function(){

// fruits.forEach(function(){
//     input.value += `<li> ${fruits}</li>` 
    
// })

// })



















// Q12

// const input = document.querySelector("#input");
// const list = document.querySelector("ol");
// const task = [];


// function render() {
//   list.innerHTML = ""; 
//   for (let i = 0; i < task.length; i++) {
//     input.value = ""; 
//     list.innerHTML += `
//       <li>
//         ${task[i].title} - ${task[i].completed}
//         <button>✕</button>
//          <button onclick="remove(${i})">Remove</button>
//       </li>
//     `;
//   }
// }

// function addTodo() {
//   task.push({ title: input.value, completed: false });
//   render();
// }


// function remove(index){
// task.splice(index,1)
// render()
// }

// Q13


// const userName = document.querySelector("#inputName");
// const userEmail = document.querySelector("#inputEmail");
// const userCity = document.querySelector("#inputCity");
// const userAge = document.querySelector("#inputAge")
// const list = document.querySelector("ol");
// const user = [] 



// function addUserObj(){
  
//   let userObj = {
//     name: userName.value,
//     Email:userEmail.value,
//     City: userCity.value,
//     Age:userAge.value
//   }
//   console.log(userObj);


// user.push(userObj)
// list.innerHTML += `<li>${userObj.name}  
// <br/>
// <br/>
//  ${userObj.Email} 
//  <br/>
//  <br/>
//  ${userObj.City}
//  <br/>
//  <br/> 
//   ${userObj.Age}</li>`
// }

// Q14


 

//  const userName = document.querySelector("#inputName");
//   const userEmail = document.querySelector("#inputEmail");
//   const userCity = document.querySelector("#inputCity");
//   const userAge = document.querySelector("#inputAge");
//   const list = document.querySelector("ul");
//   const users = [];

//   function addUser(){
//     //  list.innerHTML = "";
//     let userObj = {
//       Name : userName.value,
//     Email : userEmail.value,
//       City : userCity.value,
//       Age : userAge.value,
//     }
//     // console.log(userObj);
    
    
//       userName.value = ""
//    userEmail.value = ""
//       userCity.value = ""
//       userAge.value = ""
//       users.push(userObj)
//       renderList()
//   }


//   function renderList(){
   
//      users.forEach((u,i)=>
//       {
     
//      list.innerHTML =   `<li>
     
//       Name :${u.Name}
//        <br>
//         <br>
//       Email :${u.Email}
//        <br>
//         <br>
//       City:${u.City} 
//        <br>
//         <br>
//       Age:${u.Age} 
//        <br>
//         <br>
//         <button onclick="editUser(${i})">Edit</button>
//       </li>`
      
//     })
//   }


//   function editUser(index){
//     const userIndex = users[index]
//     userName.value = userIndex.Name;
//     userEmail.value = userIndex.Email;
//     userAge.value = userIndex.Age;
//     userCity.value = userIndex.City;
//   }

// Q15

// const table = document.querySelector("#table");
//   const head = document.querySelector("thead");
//   const tbody = document.querySelector("tbody");

//   const data = [
//     { Name: "Alice", Age: 25, City: "New York" },
//     { Name: "Bob", Age: 30, City: "Los Angeles" },
//     { Name: "Charlie", Age: 35, City: "Chicago" }
//   ];


//   const keys = Object.keys(data[0]);  

//   let headerRow = "<tr>";  
//   keys.forEach(key => {
//     headerRow += `<th>${key}</th>`; 
//   });
//   headerRow += "</tr>";  

//   head.innerHTML = headerRow;  


//   let rows = "";  

//   data.forEach(objVal => {
//     let row = "<tr>";  
//     keys.forEach(key => {
//       row += `<td>${objVal[key]}</td>`;  
//     });
//     row += "</tr>";  
//     rows += row;  
//   });

  // tbody.innerHTML = rows;  




  

// Q16

//   let str = "hello";
//   let farquancy = {};
// for(let count of str){
//   if(farquancy[count]){
// farquancy[count] +=1
//   }
//   else{
//     farquancy[count] = 1
//   }
// }
// console.log(farquancy);


// Q17
// const list = document.querySelector(".list");
// const categories = [
//   {
//     id: 1,
//     name: "Electronics",
//     children: [
//       { id: 2, name: "Mobile", children: [] },
//       { id: 3, name: "Laptop", children: [] }
//     ]
//   },
//   {
//     id: 4,
//     name: "Clothes",
//     children: [
//       { id: 5, name: "Shirts", children: [] },
//       { id: 6, name: "Pants", children: [] }
//     ]
//   }
// ];




//     categories.forEach((val =>{
//       list.innerHTML += `<li>${val.children[0].name}</li>`
//       list.innerHTML += `<li>${val.children[1].name}</li>`
//     }))
            

// function treeView = 





// 18
// const list = document.querySelector(".list");

//   const students = [
//     { name: "Ali", grade: 2 },
//     { name: "Sara", grade: 1 },
//     { name: "Bilal", grade: 3 }
//   ];


//   students.sort((a,b)=>{
//    return  a.grade - b.grade   
//   })

// students.forEach((val =>{
//   list.innerHTML += `<li> ${val.name} ${val.grade} </li>  `
// }))




// Q19
// const box = document.querySelector(".box");
// const input = document.querySelector("#input");
// let words = ["I love JS", "JS is fun", "Highlight this word"];


//   input .addEventListener("input" , ()=>{

//     box.innerHTML = "";
//     const serach = input.value.toLowerCase()
    


//    words.forEach(val =>{
//     if(val.toLowerCase().includes(serach)){
//       box .innerHTML += `<p> ${val} <p>`

    
//     }
//    })
//   })



// Q20
// const select = document.querySelector("select");
// const div = document.querySelector(".code");
// let country = [
//   { code: "IN", name: "India" },
//   { code: "US", name: "United States" },
//   { code: "JP", name: "Japan" }
// ]

// select.addEventListener("change" ,()=>{

//   div.innerHTML = "";
//   let selctCountry = select.value


//   country.forEach(val=>{
//   if(val.code === selctCountry){
//     div.innerHTML += `<p> country Code ${val.code} </p>`
//   }
//   })
// })
