// Object Initiatlization in JavaScript
// Objects Initialized

const adult = {};
adult.firstName = "John";
adult.lastName = "Doe";
adult.age = "25";
adult.eyeColor = "brown";


// Object initialization using .create() e.g Object.Create
//the Object.Create method accepts two urguments, the object to be used as a prototype and the object to be used as the newly created object.

let person = Object.create(prototypeObject);
//Above example the second urgument is optional thus it was undefined.

let person = Object.create(prototypeObject, {person.eyecolor: 'blue'})

//using this in Objects 
function Person (first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

//How to create an object of the same type as the function above Person
const student = new Person("John", "Doe", 25, "brown");


//The "new" operator creates a new blank Javascript object.

const objectOne = new Object();


// Use these variables to create an Object:
eyeColor = 'brown'
age = 34
fistName = 'Matt'

//Excerise create an Object from list of variables:
const human = {};
human.eyeColor = "brown";
human.age = "34";
human.firstName = "Peter";

// Constructor Function
function Challenge (age, first, color){
  this.age = age;
  this.firstName = first;
  this.eyeColor = color;
}

// const new instance of a Person inheriting from Challenge 
const Person = new Challenge(34, "Peter", "brown");
console.log(Person); 

// Differences between the use of "let" & "const"
//Const cannot be reassigned
//let can be reassigned

constplay1 = 5;
constplay2 = 6;
let tottal = play1 + play2;
console.log(total);

//Important terms to understand Propperty, Key & value, method, function, urguments
//Sure, let's break down these terms in the context of JavaScript:
//1. **Property:**
//   - A property is a characteristic or attribute of an object.
//   - Example:

     var person = {
       name: 'John',
       age: 25,
       gender: 'Male'
     };

//Here, `name`, `age`, and `gender` are properties of the `person` object.

//2. **Key and Value:**
//   - In the context of objects, a key is the identifier used to access a value.
//- The combination of a key and its corresponding value is known as a key-value pair.
//- Example:

     var person = {
       name: 'John',   // "name" is the key, 'John' is the value
       age: 25         // "age" is the key, 25 is the value
     };

//3. **Method:**
//- A method is a function that is a property of an object.
//- Example:

     var person = {
       name: 'John',
       sayHello: function() {
         console.log('Hello, my name is ' + this.name);
       }
     };

     person.sayHello();  // Output: Hello, my name is John


//Here, `sayHello` is a method of the `person` object.

//4. **Function:**
//- A function is a reusable block of code that performs a specific task.
//- Functions can be standalone or methods of an object.
//- Example:

     function add(a, b) {
       return a + b;
     }

     var result = add(3, 5);  // Result will be 8

//5. **Arguments:**
//- Arguments are the values that you pass to a function when you call it.
//- Parameters are the variables that receive these values inside the function.
//- Example:

     function multiply(x, y) {
       return x * y;
     }

     var product = multiply(4, 6);  // 4 and 6 are arguments

//Here, `x` and `y` are parameters that receive the values 4 and 6 as arguments. The result would be 24.

//In JavaScript, instantiation refers to the process of creating a new instance or copy of an //object. An object is a collection of key-value pairs, and when you instantiate an object, you //essentially create a specific occurrence of that object with its own unique set of values.

//Here's a simple example using a constructor function:

// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Instantiate a new Person object
var person1 = new Person("John", 25);
var person2 = new Person("Jane", 30);

//Example two 
// Constructor function
function Challenge ( item, color, price) {
  this. itemName = item;
  this. itemColor = color;
  this. itemPrice = price;
 }

// Instantiate a new OfficeFurniture object
const officeFurniture = new Challenge("desk", "brown", 7)

// Return the itemName property of the OfficeFurniture object
console. log (officeFurniture)
console. log(officeFurniture. itemName)