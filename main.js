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
/* let a = 20; // 20
    a = 10; // 10
    a = 60; // 60
    a = a + 20; // 80
    a += 20; // 100
    a -= 50; // 50
    a /= 5; // 10
    a *= 10; // 100
    a /= 50; // 2
    a **= 2; // 4

console.log(a); */

// Video 22
//---------------------
// Operators Challenge 
// challenge 1
//-------------
/*
let a = 10;
let b = "20";
let c = 80;
*/
//console.log(++a + +b++ + +c++ - +a++); // 100
/* 
    [++a] 
    - Value : 11
    - Explain : Pre Increment
    [+]
    - Explain : Arthimetic operator (Addition)
    [+b++] => [+b][b++]
    - Value : 20
    - Explain : [+b] unary plus b = 20 , [b++] post increment
    [+]
    - Explain : Arthimetic operator (Addition)
    [+c++] => [+c][c++]
    - Value : 80
    - Explain : [+b] unary plus c = 80 , [b++] post increment
    [-]
    - Explain : Arthimetic operator (Subtraction)
    [+a++] => [+a][a++]
    - Value : 11
    - Explain : [+a] unary plus a = 11 , [a++] post increment

    output = 11 + 20 + 80 - 11 = 100
*/

//console.log(++a + -b + +c++ - -a++ + +a); // 100
/* 
    [++a] 
    - Value : 13
    - Explain : Pre Increment
    [+]
    - Explain : Arthimetic operator (Addition)
    [-b]
    - Value : -21
    - Explain : unary Negative
    [+]
    - Explain : Arthimetic operator (Addition)
    [+c++] => [+c][c++]
    - Value : 81
    - Explain : [+c] unary plus c = 81 , [c++] post increment = 82
    [-]
    - Explain : Arthimetic operator (Subtraction)
    [-a++] => [-a][a++]
    - Value : -13
    - Explain : [-a] unary negative a = -13 , [a++] post increment = -14
    [+]
    - Explain : Arthimetic operator (Addition)
    [+a]
    - Value : 14
    - Explain : [+a] unary plus a = 14


    output = 13 + -21 + 81 - -13 + 14 = 100
*/

//console.log(--c + +b + --a * +b++ - +b * a + --a - +true); // 100
/* 
    [--c] 
    - Value : 81
    - Explain : Pre Decrement
    [+]
    - Explain : Arthimetic operator (Addition)
    [+b]
    - Value : 21
    - Explain : unary Plus 
    [+]
    - Explain : Arthimetic operator (Addition)
    [--a] 
    - Value : 13
    - Explain : pre Decrement
    [*]
    - Explain : Arthimetic operator (Multiplication)
    [+b++] => [+b][b++]
    - Value : 21
    - Explain : [+b] unary Plus p = 21 , [b++] post increment = 22
    [-]
    - Explain : Arthimetic operator (Subtraction)
    [+b]
    - Value : 22
    - Explain : Unary Plus
    [*]
    - Explain : Arthimetic operator (Multiplication)
    [a]
    - Value : 13
    - Explain : number
    [+]
    - Explain : Arthimetic operator (Addition)
    [--a] 
    - Value : 12
    - Explain : pre Decrement
    [-]
    - Explain : Arthimetic operator (Subtraction)
    [+true] 
    - Value : 1
    - Explain : Unary Plus


    output = 81 + 21 + ( 13 * 21 ) - ( 22 * 13 ) + 12 - 1 = 100
*/

// challenge 2
//-------------
/*
let d = "-100";
let e = "20";
let f = 30;
let g = true;

//Only Use Variables Values
// Do not Use variable Twice 

console.log(+e * -d); // 2000
console.log(-d + ++f + ++e * ++g); // 173
*/

// Assignment 1

// Replace ? With Arithmetic Operators
//console.log(10 - 20 + 15 + 3 + 190 + 10 % 400); // 0


// Assignment 2

//let num = 3;

// Solution One
//console.log(--num + num + num); // 6

// Solution Two
//console.log(num * num - num); // 6

// Soultion Three
//console.log(num + --num + +true); // 6

// Soultion Four
//console.log(++num + --num + -true); // 6

// Solution Five
//console.log(num + num); // 6

// Solution Six
//console.log(num ** num / num - num); // 6


// Assignment 3

//let num = "10";

// Solution One
//console.log(+num + +num); // 20

// Solution Two
//console.log(++num + --num - +true); // 20

// Solution Three
//console.log(--num - num++ + ++num + --num - +true); // 20

// Solution Four
//console.log(+num * +num - --num * + ++num + num); // 20


// Assignment 4

//let points = 10;

// Write Your Code Here

//console.log(points); // 13

// Write Your Code Here

//console.log(points); // 8;



// Video 23
//---------------------
// Number
/*
console.log(1000000);
console.log(1_000_000);
console.log(1000000.0000);
console.log(1e6);
console.log(10 ** 6);
console.log(Number("1000000"));
console.log(Number("1_000_000")); // NAN , i can't use the syntactic suger inside a string 
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE); // This is the MAX value however i add any value to this value , it will be ignored. */

//video 24
//---------------------
// Number Methods
// Two Dots to use the method
/*
//  toString()  [the output is String]
console.log(100..toString()); //100
console.log((100).toString()); //100

// toFixed      [The Output is String]
console.log(100.5555.toFixed()); //101
console.log((100.5655).toFixed(2)); //100.57
console.log(100.5544.toFixed(2)); //100.55

// parseInt()   [The Output Is Integer Number]
console.log(parseInt("100")); //100
console.log(parseInt("100 Ahmed")); //100
console.log(parseInt("Ahmed 100")); // NaN
console.log(parseInt("100.5568")); //100

// parseFloat() [The Output Is Float number]
console.log(parseFloat("100.545")); //100.545


// isInteger()  [The Output Is Bolean]  (ES6)
console.log(Number.isInteger("Osama")); //false
console.log(Number.isInteger("100")); //false
console.log(Number.isInteger(100.524)); //false
console.log(Number.isInteger(100)); //true


// isNaN()      [The Output Is Bolean]   (ES6)
console.log(Number.isNaN("osama")); //false
console.log(Number.isNaN("osama" / 20)); //true
console.log(Number.isNaN(parseInt("100"))); //false
console.log(Number.isNaN(parseInt("Osama 100"))); //true

*/

//video 25
//---------------------
// Math Object
/*
// round()
console.log(Math.round(99.5)); //100
console.log(Math.round(99.2)); //99

// ceil()
console.log(Math.ceil(99.2)); //100

// floor()
console.log(Math.floor(99.9)); //99

// min()
console.log(Math.min(10, 20, 100, -100, 90)); //-100

// max()
console.log(Math.max(10, 20, 100, -100, 90)); //100

// pow()
console.log(2 ** 4); //16
console.log(Math.pow(2 , 4)); //16

// random()
console.log(Math.random()); // Random Number

// trunc()
console.log(Math.trunc(99.6)); //99
*/


//video 26
//---------------------
// Numbers Challenge
/*
let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;


// Find Smallest Number In All Variables And Return Integer
console.log(parseInt(Math.min(a , b , c , d))); // 2
console.log(Math.trunc(Math.min(a , b , c , d))); // 2
console.log(Math.floor(Math.min(a , b , c , d))); // 2
console.log(Math.round(Math.min(a , b , c , d))); // 2

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a , parseInt(d))); // 10000
console.log(Math.pow(a , Math.trunc(d))); // 10000
console.log(Math.pow(a , Math.floor(d))); // 10000
console.log(Math.pow(a , Math.round(d))); // 10000
console.log(100 ** 2); //10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.floor(d)); // 2
console.log(Math.trunc(d)); // 2
console.log(Math.round(d)); // 2
console.log(parseInt(d)); // 2

// Use Variables b + d To Get This Valus
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.round(Math.floor(b) / Math.ceil(d))); // 67 => Number
console.log(Math.ceil(Math.floor(b) / Math.ceil(d))); // 67 => Number

*/

//video 27
//---------------------
// String Method Part 1

let thename = "Ahmed";

// Access to the index
console.log(thename[2]); //m
console.log(thename[5]); //undefined
// Access to the index by charAt()
console.log(thename.charAt(2)); //m
console.log(thename.charAt(5)); // 

// length
console.log(thename.length); //5

// To show that we count the spaces inside the string

let myname = "  Ahmed  ";

console.log(myname.length); //9
console.log(myname[2]); //A

// trim()  => remove trailing and leading white spaces
console.log(myname.trim()); //Ahmed 

// toUpperCase()
console.log(myname.toUpperCase()); //  AHMED   
// toLowerCase()
console.log(myname.toLowerCase()); //  ahmed

// Chain Method  => to use all the method needed to get the desired output in the same line
// Example => Get from the string myname output capital letter M without any spaces
console.log(myname.trim().charAt(2).toUpperCase()); 