// const firstName = "Zain UL Abideen";
// const lastName = "Rajpoot";
// 
// // const sentence = "Hello " + firstName + " " + lastName + "! How are you!?";
// const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you!?`;
// 
// // console.log(sentence);
// console.log(sentenceWithTemplate);






// const skyIsBlue = true;
// 
// // if (skyIsBlue) {
//   console.log("The sky is blue!");
// } else {
//   console.log("The sky is … not blue?");
// }








// // if you see three lines, it's just three = in a row, ===. the font just combines them into one big character
// if (2 + 2 === 4) {
//   console.log(
//     "Oh thank god, the fundamental principles of mathematics still hold true."
//   );
// } else {
//   console.log("Uh, panic?");
// }







// const friendsAtYourParty = 10;
// // if (friendsAtYourParty === 0) {
//   console.log("Cool, now I have a lot of nachos to myself.");
// } else if (friendsAtYourParty <= 4) {
//   console.log("Perfect amount to play some Mario Kart.");
// } else {
//   console.log("Wooooo turn on the dance music!");
// }





// let friendsAtYourParty = 0;
// friendsAtYourParty = friendsAtYourParty + 1;
// friendsAtYourParty = friendsAtYourParty + 1;
// friendsAtYourParty = friendsAtYourParty + 1;
// friendsAtYourParty = friendsAtYourParty + 1;
// friendsAtYourParty = friendsAtYourParty + 1;
// friendsAtYourParty = friendsAtYourParty + 1;
// friendsAtYourParty = friendsAtYourParty + 1;
// friendsAtYourParty = friendsAtYourParty + 1;
// friendsAtYourParty = friendsAtYourParty + 1;
// friendsAtYourParty = friendsAtYourParty + 1;
// console.log(friendsAtYourParty);








// let friendsAtYourParty = 0;
// for (let i = 0; i <= 10; i++) {
//   friendsAtYourParty++;
// }
// console.log(friendsAtYourParty);





// //infinite loop example
// let friendsAtYourParty = 1;
// while (friendsAtYourParty > 0) {
//   friendsAtYourParty = friendsAtYourParty + 1;
// }
// console.log(friendsAtYourParty);









//character repetition example
// const timesToRepeat = 100;
// const character = "🐩";

// let word = ""; // start with an empty string
// for (let i = 0; i < timesToRepeat; i++) {
//   word = word + character;
// }

// console.log(word);





// ///fuction example 
// function product( num1, num2) {
//   return num1 * num2;
// }
// console.log(product(6,8));





// function greet(firstName, lastName) {
//   return `I hope you enjoy your stay, ${firstName} ${lastName}.`;
// }
// console.log(greet("Zain", "Ul Abideen"));
// console.log(greet("Muhammad", "Baqir"));





//function to print location details
// const myHomeCity = "Islmabad";
// const myHomeState = "Punjab";
// const myHomeCountry = "Pakistan";
// function logOutYourHome(city, state, country) {
//   console.log(`You are from ${city}, ${state} ${country}.`);
// }
// logOutYourHome(myHomeCity, myHomeState, myHomeCountry);







//functions with different types of syntax
// function bark() {
//   console.log("woof");
// }
// 
// // const meow = function () {
//   console.log("meeeeeeeow");
// };
// 
// // // the => is just = > put together, the font just combines them to one glyph
// const chirp = () => {
//   console.log("chirp chirp");
// };
// 
// // bark();
// meow();
// chirp();






// //converting a string to lower case
// const sentence = "ThIs HaS wEiRd CaSiNg On It";
// const lowerCaseSentence = sentence.toLowerCase();
// console.log(lowerCaseSentence);






// // want to round a number? use Math!
// const number = 5.3;
// const roundedNumber = Math.round(number);
// console.log(number);






// // want to see if a string contains another string?
// const testStringOne = "The quick brown fox jumps over the lazy dog";
// const testStringTwo =
//       "Mirror, mirror on the wall, don't say it cause I know I'm cute";
// const stringToLookFor = "cute";

// console.log(testStringOne.includes(stringToLookFor));
// console.log(testStringTwo.includes(stringToLookFor));







///Objects making and practicing
// const person = {
//   firstName: "Zain",
//   lastName: "Ul Abideen",
//   age: 20,
//   hobbies: ["coding", "gaming", "reading"],
//   address: {
//     street: "123 Main St",
//     city: "Islamabad",
//     state: "Punjab",
//     country: "Pakistan",
//   },
// };  
// 
// // console.log(person)
// console.log(person["firstName"])
// console.log(person.hobbies)
// console.log(person.address.city)








// //Objects making and practicing
// const personCotactInfo1 = {
//   firstName: "Zain",
//   lastName: "Ul Abideen",
//   age: 20,
//   email: "zain.ul.abideen@example.com",
//   phone: "+92 123 456 7890",
// };
// const personCotactInfo2 = {
//   firstName: "Ali",
//   lastName: "Khan",
//   age: 25,
//   email: "ali.khan@example.com",
//   phone: "+92 123 456 7891",
// };  

// function suggestmusic(person) {if (person.age === 20) {
//   console.log(`${person.firstName} ${person.lastName} might enjoy pop music.`);
// } else if (person.age === 25) {
//   console.log(`${person.firstName} ${person.lastName} might enjoy rock music.`);
// } else {
//   console.log(`${person.firstName} ${person.lastName} might enjoy classical music.`);
// }
// }
// suggestmusic(personCotactInfo1);
// suggestmusic(personCotactInfo2);









// //objects calling and iterating for in loop
// const person = {
//   name: "Fiaz Hussain",
//   city: "RYK",
//   state: "Punjab",
//   favoriteDrink: "Water",
// };

// for (const key in person){
//     console.log(`${key}: ${person[key]}`)
// }

// //or using Object.entries() to iterate over the key-value pairs of the object
// for (const [key, value] of Object.entries(person)) {
//   console.log(`${key}: ${value}`);
// }









// //understanding this in arrow functions and regular methods
// const person = {
//   name: "Zain",
  
//   // 1. Fails: Looks past the object to the global scope
//   arrowFails: () => {
//     console.log("Arrow at root level: " + this.name); 
//   },

//   // 2. Works: Regular method binds 'this' to 'person'
//   regularWorks() {
//     // 3. Arrow function inside a regular method works!
//     // It inherits 'this' from 'regularWorks', which is bound to the object.
//     const nestedArrow = () => {
//       console.log("Nested Arrow: jj"   + this.name);
//     };
//     nestedArrow();
//   }
// };

// person.arrowFails();   // Outputs: "Arrow at root level: undefined"
// person.regularWorks(); // Outputs: "Nested Arrow: Zain"








// // //object with nested objects and a method to get the full address
// const me = {
//   name: {
//     first: "Zain Ul Abideen",
//     last: "Rajpoot",
//   },
//   location: {
//     streetNumber: 2,
//     street: "Quaid-e-Azam University Road",
//     city: "Islamabad",
//     state: "ICT",
//     zipCode: 44000,
//     country: "Pakistan",
//   },
//   getAddress() {
//     return `${this.name.first} ${this.name.last}
// ${this.location.streetNumber} ${this.location.street}
// ${this.location.city}, ${this.location.state} ${this.location.zipCode}
// ${this.location.country}`;
//   },
// };

// console.log(me.getAddress());







// //arrays and accessing elements
// const daysOfTheWeek = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];
// console.log(daysOfTheWeek);
// console.log(daysOfTheWeek[0]);
// console.log(daysOfTheWeek[1]);
// console.log(daysOfTheWeek[6]);






// // array of objects representing courses and their teachers
// const courses = [
//   { teacher: "Ahmed Raza", course: "Data Analysis with Python" },
//   { teacher: "Sara Khan", course: "Mobile App Development with Flutter" },
//   { teacher: "Fiaz Hussain", course: "Full Stack Web Development" },
//   { teacher: "Usman Ali", course: "Frontend Web Development" },
//   { teacher: "Ayesha Malik", course: "Backend Development with Node.js" },
// ];

// courses.push({ teacher: "Hassan Ahmed", course: "UI/UX Design Fundamentals" });
// console.log(courses);
// console.log(courses[4].teacher); // Accessing the teacher of the 5th course (index 4)
// console.log(courses);







// // //array methods and properties
// const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17];
//   console.log(primeNumbers.length);
//   console.log(primeNumbers.join(" // "));











// //iterating over arrays using different methods
// const cities = [
//   "Islamabad",
//   "Rawalpindi",
//   "Lahore",
//   "Karachi",
//   "Rahim Yar Khan"
// ];
// let i=0;
// for ( i; i<cities.length;i++) //for (let i = 0; i < cities.length; i++)  //for loop
// {
// console.log(cities[i]);
// }

// for (const city of cities) //for (const city of cities)  //for of loop
// {
//   console.log(city);
// }

// cities.forEach(function(city) //cities.forEach((city) =>  //arrow function
// {  
//   console.log(city);
// });











// //modules in JavaScript
//CommonJS: used by Node.js for many years.
//ES modules (often just called "modules" or "module JS"): the modern standard supported by browsers and newer Node.js versions.

// // // //exporting and importing functions
// // This is the math.js file
// // You can import this function in other files using ES6 module syntax.
// export function add(a, b) 
// {
//   return a + b;
// }

// // main.js
// import { add } from "./math.js";
// console.log(add(3, 4)); 









// // //exporting and importing functions using default export
// logger.js
// export default function log(message) {
//   console.log(message);
// }
// // main.js
// import log from "./logger.js";
// log("Hello modules");






// //spread operator in JavaScript
// const cities = ["Islamabad", "Lahore", "Karachi"];
// // copy an array
// const moreCities = [...cities];
// console.log(moreCities);
// console.log(moreCities === cities); // false — it's a new array
// // merge arrays
// const northernCities = ["Peshawar", "Muzaffarabad"];
// const allCities = [...northernCities, ...cities];
// console.log(allCities);






// //rest parameters in JavaScript
// function cities(city1,city2,...otherCities) {
// console.log(city1); 
// console.log(otherCities[3]);
// console.log(otherCities);
// }
// cities("Islamabad", "Lahore","Rawalpindi","Sargodha","Gilgit", "Karachi", "Peshawar", "Muzaffarabad");


// //rest parameters in JavaScript
// function sum(...numbers) {
//   let total = 0;
//   for (const num of numbers) {
//     total += num;
//   }
//   return total;
// }
// console.log(sum(1, 2, 3));       // 6
// console.log(sum(10, 20, 30, 40)); // 100





// //map method in JavaScript
const prices = [500, 1200, 800, 2500];
const pricesWithTax = prices.map(function (price) {
  return price * 1.17;
});
console.log(prices);        // [500, 1200, 800, 2500] — unchanged
console.log(pricesWithTax); // [585, 1404, 936, 2925]









// //map method with arrow function
// const cities = ["islamabad", "lahore", "karachi"];
// const capitalized = cities.map((city) => {
// return ( city[0].toUpperCase() + city.slice(1) );
// });
// const slicings = cities.map((city) => {
// return (city[0].toUpperCase() + city.slice(1,4));
// });
// console.log(capitalized)
// console.log(slicings); // ["Isl", "Lah", "Kar"] — first three letters capitalized





//filter method in JavaScript
const score=[34,43,34,345,9,0,87,34,79,38,78]
const fil=score.filter(
    (score)=>{
        return  score<= 34;
    }
);
console.log(fil); // Output: [34, 34, 9, 0, 34]
console.log (...fil); // Output: 34 34 9 0 34
console.log(fil.join(", "));  // Output: 34, 34, 9, 0, 34
fil.forEach(num => console.log(num));
/* Output:
34
34
9
0
34
*/







// //filter method with array of objects
// const courses = [
//   { teacher: "Zain Ul Abideen", course: "Full Stack Web Development", seats: 30 },
//   { teacher: "Sara Khan", course: "Mobile App Development", seats: 0 },
//   { teacher: "Ahmer Raza", course: "Data Analysis with Python", seats: 12 },
// ];

// const availableCourses = courses.filter((course) => {
//   return course.seats > 0;
// });

// console.log(...availableCourses);








//reduce method in JavaScript
const prices = [500, 1200, 800, 2500];

const total = prices.reduce(function (runningTotal, price) {
  return runningTotal + price;
}, 0);

console.log(total); // 5000