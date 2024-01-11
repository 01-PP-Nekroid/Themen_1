
/* Berechnung Alter */

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = /*2000*/ 1980;
const birthYearMark = 1990;

// Berechnung Alter
let date = new Date(); // Systemfunktion Datum
let year = date.getFullYear(); // Daten liefern lassen!!
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

// Ausgabe
console.log("age John: " + ageJohn);
console.log("age Mark: " + ageMark);
console.log("Datum: " + date);


// Deklaration
let isJohnOlder; // Is John older? --> y/n
isJohnOlder = (ageJohn > ageMark); // Test größer/kleiner
isJohnEqual = (ageJohn == ageMark); // Test Gleichheit
console.log("is John Older? " + isJohnOlder);
console.log("is John Equal? " + isJohnEqual);

