
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


// Find Top Scorer
// From a list of student objects with names and scores, find and display the top scorer.

// Q2
const getTopScorer = document.querySelector("p");
const students = [
    {name :"abbas" , marks : 90},
    {name : "qadeer" , marks : 80},
    {name : "ali" ,  marks : 70}
]

const topScorer = students[0];
for(let i = 1; i < students .length;i++){
    if(students[i].marks > topScorer.marks){
        topScorer = students[i]
        getTopScorer.innerHTML += `<p> Name ${topScorer[i].name} marks ${topScorer[i].marks} </p>`

    }
}