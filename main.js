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

//This part for Studying only
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
/*
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

console.log(`_${a}${c.repeat(3)}${b}_`); */

// ------------------------------------------------------------
// Videos from 18 - 22

//Arithment Operators  

/*
//video 18
//-------------

// + Addition
console.log(10 + 20);
console.log(10 + "Ahmed");

// - Subtraction
console.log(10 - 20);
console.log(10 - "Ahmed"); //NaN
console.log(typeof NaN);

// * multiplication
console.log (10 * 20);
console.log(10 * -20);

// / Division
console.log(20 / 5);
console.log(20 / 3);

// ** Exponentiation 
console.log(2 ** 4); // = the same as the following line
console.log(2 * 2 * 2 * 2);


// % Modulas
console.log(10 % 2); // 0 , Even number
console.log(11 % 2); // 1 , odd number

// ++ Increment [Post - pre]
let num = 5;
console.log(num++); // 5
console.log(num); // 6
console.log(++num); // 7

// -- Decrement [post - pre]
let x = 8 ;
console.log(x--);
console.log(--x);
*/


/*
//video 19
//-------------

// + unary Plus
// - unary Negation 
// Tests 

// Normal Number
console.log(+100); // 100
console.log(-100); // -100

// String Number
console.log(+"100"); // 100
console.log(-"100"); // -100

// String Negative Number 
console.log(+"-100"); // -100
console.log(-"-100"); // 100

// String Text
console.log(+"Ahmed"); // NaN
console.log(-"Ahmed"); // NaN

// Float
console.log(+"42.25"); // 42.25
console.log(-"42.25"); // -24.25

// Hexadecimal Number System => 0xFF
console.log(+0xFF); // 255
console.log(-0xFF); // -255

// null 
console.log(+null); // 0
console.log(-null); // -0

// false
console.log(+false); // 0
console.log(-false); // -0

// true
console.log(+true); //1
console.log(-true); // -1

// if i want to return number from string i can use the instructor Namber

console.log(Number("100")); 
*/


// Video 20
//---------------------

// Type casting or type coercion 
/*
let a = "10";
let b = 20;
let c = true;

console.log(a + b); // 1020 [concatenatio string]
console.log(+a + b); // 30 [Arthimetic operator (+) ]

console.log(a - b); // -10 [Arthimetic operator (-) ]
console.log("Ahmed" - b); //NaN
console.log("Ahmed" - a); //NaN

console.log("" - a); // -10 [ 0 - 10 because it's an Arthimatic operator ]
console.log(false + true); // 1 [0 + 1]
console.log(+false + +true); // 1 [0 + 1]

console.log("" + c); // true [string + bolean = String]
console.log(b + c); // 21 [number + boolean = number]
console.log(a + b + c); // 1020true  [string + number + boolean = String]
console.log(+a + b + c); // 31 [unary plus + number + boolean = number]  
*/

// Video 21
//---------------------

// Assignment Operators
let a = 20; // 20
    a = 10; // 10
    a = 60; // 60
    a = a + 20; // 80
    a += 20; // 100
    a -= 50; // 50
    a /= 5; // 10
    a *= 10; // 100
    a /= 50; // 2
    a **= 2; // 4

console.log(a);