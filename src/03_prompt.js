const prompt = require('prompt-sync')({sigint: true});

// Alles muss man selber machen lassen!...
let firstName = prompt("Vorname: ");
// console.log(firstName);
let lastName = prompt("Nachname: ");
// console.log(lastName);
console.log("Username: " + firstName + " " + lastName);
