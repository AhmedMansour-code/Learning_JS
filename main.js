// Videos from 1-9
// Assignment 2 
//document.write ("<h1 style='color:blue;font-size:50px;font-weight:bold;text-align:center;font-family:arial'>Elzero</h1>");
// document.write ("<h1 class='heading'>Elzero</h1>");

// Assignment 3
/* console.log ("%cElzero %cWeb %cSchool" , "color: red; font-size: 40px;" ,
"color: green; font-weight: bold; font-size: 40px;",
"color: white; background-color: blue; font-size: 40px;"); */

// Assignment 4
/* console.group("Group 1");
console.log("Message one");
console.log("Message two");
console.group("Child Group");
console.log("Message one");
console.log("Message two")
console.group("Grand Child Group");
console.log("Message one");
console.log("Message two")
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message one");
console.log("Message two"); */

// Assignment 5
// console.table(["Elzero","Ahmed","Sameh","Aya","Osama"]);

// Assignment 6
/* console.log("Iam In Console");
document.write("Iam In Page"); */

// ------------------------------------------------------------
// Videos from 10-17

/*
//String
console.log(typeof "Ahmed Mansour");
//Number
console.log(typeof 5000);
//Object => Array
console.log(typeof [17 , 18 , 20]);
console.log(typeof ["Ahmed" , "Mansour" , "Mohamed"]);
//Object 
console.log(typeof {name: "Ahmed" , age: 17 , country: "Eg"});
//boolean
console.log(typeof true);
console.log(typeof false);
//undefined
console.log(typeof undefined);
//object => null
console.log(typeof null);
*/

/*
var user = "Ahmed" ,
    age = 18 ;
    userName= ["Ah","MH"];

console.log(user);
console.log(age);
console.log(userName);
*/

/*
console.log('Ahmed "Mansour"');
console.log("Ahmed 'Mansour'");
console.log("Ahmed \"Mansour\"");
console.log("Ahmed \\ Mansour");
console.log("Ahmed \
Mansour \
Adel");
console.log("Ahmed\nAdel\nMansour");
*/

/*
let cardTitle = "Elzero" ,
    cardDesc = "Elzero Web School" ,
    cardDate = "25/10" ,
    numTimes = 4 ;

let card = `
<div>
    <h3> Hello ${cardTitle} </h3>
    <p>${cardDesc}</p>
    <span>${cardDate}</span>
</div>
`;

let repeatCard = card.repeat(numTimes);

document.write(repeatCard);
*/

// Assignment 1

let numberOne = 10 ;
let numberTwo = 20 ;

console.log(numberOne + "" + numberTwo); 
console.log(typeof numberOne + typeof numberTwo);
console.log(`${numberOne}${numberTwo}`);
console.log(typeof `${numberOne}${numberTwo}`);
console.log(numberTwo + "\n" + numberOne);
console.log(`${numberTwo}
${numberOne}`);


// Assignment 2

console.log(typeof {elzero:"innerHTML"}); 
console.log(typeof ["Elzero"]); 

// Assignment 3

console.log("`I'm In" + "\n" + "\\\\" + "\n" + "Love \\\\ \"\"\" '''" + "\n" + "++ With ++" + "\n" + '\\"""\\"""' + "\n" + '""JavaScript""``');
//or
console.log("`I'm In\n\\\\\nLove \\\\ \"\"\" '''\n++ With ++\n\\\"\"\"\\\"\"\"\n\"JavaScript\"\"``");


// Assignment 4

let a = 21;
let b = 20;
let c = `_${b}${a}_`;

console.log(`_${a}${c.repeat(3)}${b}_`);