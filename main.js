// String, Number, Boolean , Object , Array

//1. String
let fristname = "John doe" //let ทำให้ ตัวแปรสามารถเปลี่ยนค่าได้
const idcard = "123456789" //const ทำให้ ตัวแปรไม่สามารถเปลี่ยนค่าได้

//2. Number
let age = 30
let height = 5.9

//3. Boolean
let isStudent = false;
console.log('My name is', fristname, 'and I am', age, 'years old.');
/*การบวก ลบ คูณ หาร หารเอาเศษ */

/*let number1 = 'John'
let number2 = 'Doe'

let result = number1 + number2; // บวก //ลบ // คูณ // หาร // หารเอาเศษ //+ ถ้าเป็น string จะเป็นการต่อ string
console.log("ผลการคำนวณ =", result)*/

// conditionall statement
// if, else if , else
// == , === , != , !== , > , < , >= , <=
// && , ||,!

/*let number3= 10
let number4= 20

let condition1 = number3 == number4; //Boolean ค่า True หรือ False
console.log('result of condition1 =', condition1);*/

//แบบฝึกเรื่อง if else
// if - else conditional
/*if (condition) {} */
/*if (number3 >= number4) {
    console.log('do something')
} 
else if (number3 == number4) {
    console.log('do else if something')
}
else {
    console.log('dont do every thing') 
}*/


//แบบฝึกหัด เกรด
/*
Grade >= 80 เป็นเกรด A
Grade >= 70 เป็นเกรด B
Grade >= 60 เป็นเกรด C
Grade >= 50 เป็นเกรด D
Grade < 50 เป็นเกรด F
*/
let score = prompt('กรุณากรอกคะแนนของคุณ:') //prompt ใช้สำหรับรับค่าจากผู้ใช้
console.log('คะแนนของคุณคือ', score);
if (score >= 80) {
    console.log('เกรด A')
}
else if (score >= 70) {
    console.log('เกรด B')
}
else if (score >= 60) {
    console.log('เกรด C')
}
else if (score >= 50) {
    console.log('เกรด D')
}
else {
    console.log('เกรด F') 
}



/* && และ || หรือ ! not หรือ ไ่ม่ */


//แบบฝึกหัด AND OR NOT
let number1 = 5
let number2 = 10

let condition = number1 >= 3 || number2 >= 10;
console.log('condition =:', condition);

let age = 30
let gender = 'ชาย'

//true && true = true
if (age >= 20 && gender === 'ชาย') {
    console.log('คุณเป็นผู้ชายที่มีอายุ 20 ปีขึ้นไป')
} 

/* while loop , for loop */
let counter = -5;
while (counter < 10) {
    console.log('Hello world')
    counter += 1

}

for (let i = 0; i < 10; i++) {
    console.log('Hello world from for loop')
}
/*
array
*/


let ages =[10,20,30] // array 3 items
console.log('ages:',ages)
console.log('ages[1]:',ages[1])

//1.แทนที่ ค่าข้อมูลใน array

ages = [15,25]
console.log('ages list:',age)
//2.ต่อ array
ages.pust(35)
console.log('ages after pust:'ages)

//3.ลบข้อมูลตัวสุดท้ายใน array
ages.pop()
console.log('ages after pop:'ages)
//
let ages = [25,30,35,40,45]
console.log('Ages:',ages)

let fruits = ['apple','banana','cherry']
console.log('Fuits:',fruits)
fruits.pust('mango')
console.log('Fruist after pust:'fruits)
console.log('Fruist fruist:'fruits.length)

for (let i = 0; i< fruits.length;i++){
    console.log('Fruit at index ${i}:',fruits)
}

/*
object
*/

let student = [{
 age= 30,
 name= "John",
 grade= 'A'
},{
    age:25,
    name:"John"
    grade: 'B'
}]

for(let i = 0; i< student.length; i++) {
console.log("student"+(i+1) );
console.log('name:',student.anme)
console.log('age:'student.age)
console.log('grade:'student.grade)
}

student.pust({
    age:28,
    name: "Mike",
    grade: 'c'
})
console.log("Added new student:",student[student.length - 1]);

student.pop();
console.log("Remove late student:")

/*

*/
let score1 =10 
let score2 =80

function calculation_grade(parameter){
if (score >= 80){
    grade = 'A'
}else if (score >= 70){
    grade = 'B'
}else if (score >=60){
    grade ='C'
}else if  (score >=50){
    grade +'D'
}else{
    grae = 'F'
}
return grade
}
//เรียกใช้ฟังก์ชัน
let grade1 = calculation_grade(score1)
let grade2 = calculation_grade(score2)
console.log('Score1:'+ score1 +',Grede:'+ grade1)
console.log('Score2:'+ score2 +',Grade:'+ grade2)

/*
array
*/

let scores =[90,80,70,60,50];
let newscores = []

for (let i =0;i<=score.length;i++){
    console.log(score[i]);
    //if (scores[i]>=60){
      //  newscores.pust(score[i]);
    }

let newscores = scores.filter(function(score){
    return score >= 70;
})

newscores.forEach((ns) => {
    console.log('new score:' score)
})
//for (let i = 0; i< score.length; i++){
  //  console.log(`Score ${i+1}: ${score[i]}`);
//}


//scores = scores.map((s) => {
   // return s-10;
//})

//score.array.forEach((s) => {
 //  console.log('score:',s);
//})

//map, filter
/*
object functions
*/
let student =[
    {name: "John", age: 20, grade: "A"},
    {name: "Jane", age: 22, grade: "B"},
    {name: "Jim", age: 21, grade: "C"},
]
console.log('Student',student[0]);

let Student = student.find((s) => {
  return s.name === "Jane";
});

let dubblecorestudent = student.map((s) => {
  s.age = age.age * 2;
  return s;
})

let heightGradestudent = student.filter((s) => {
    return s.grade === "A";
})
console.log('Student',student);
console.log('Dubble score Student',dubblecorestudent);
console.log('High Grade Student',heightGradestudent);