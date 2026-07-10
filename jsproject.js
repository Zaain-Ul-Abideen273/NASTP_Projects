// const firstName = "Zain UL Abideen";
// const lastName = "Rajpoot";

// const sentence = "Hello " + firstName + " " + lastName + "! How are you!?";
// const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you!?`;

// console.log(sentence);
// console.log(sentenceWithTemplate);



// const skyIsBlue = true;

// if (skyIsBlue) {
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

// if (friendsAtYourParty === 0) {
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

// const meow = function () {
//   console.log("meeeeeeeow");
// };

// // the => is just = > put together, the font just combines them to one glyph
// const chirp = () => {
//   console.log("chirp chirp");
// };

// bark();
// meow();
// chirp();




//converting a string to lower case
const sentence = "ThIs HaS wEiRd CaSiNg On It";
const lowerCaseSentence = sentence.toLowerCase();
console.log(lowerCaseSentence);