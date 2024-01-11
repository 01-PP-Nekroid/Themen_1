// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
/*const ageJohn = 30;
const ageMark = 30;

// Deklaration
let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);
console.log("------------------");
*/


/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)
// für {} --> AltGr + 7
// ACHTUNG wenn ; hinter IF wirde {...} immer aktiv

// if (true)
// if (false)
// if(isJohnOlder)
// if(isJohnEqual)
// if(ageJohn > ageMark)
/* {
    console.log("John is älter!");
} */


/************ IF - ELSE  ************/
// mit Alternative  
// entweder ja oder nein

// if (true)
// if (false)
// if(isJohnOlder)
// if(isJohnEqual)
// if(ageJohn > ageMark)
/* {
    console.log("John is älter!");
}
else
{
    console.log("John is jünger!");
} */


/************  Ternäre (ternary) Schreibweise ************/

// console.log( (isJohnOlder) ? "John is older" : "Mark is older");


/************ IF - ELSE IF  ************/
// mit alternativen Fällen (älter, jünger, gleich alt)
/*
if (isJohnOlder)
// Ja Zweig
{
    console.log("John is älter!");
}
// alternative Zweige ... 1 .n
else if (isJohnEqual)
{
    console.log("John is gleich alt");
}
// gemeinsame Alternative
else
{
    console.log("John is jünger!");
}*/


/****** Fallunterscheidung / SWITCH|CASE 1 ******/
// TAB >
// Shift + TAB <

const firstName = "Jane";
let job;

job = "driver"; // ... fährt als Taxe / Uber
job = "diver"; // ... taucht
job = "artist"; // ... alt ein bild
job = "pilot"; // .. macht etwas anderes! --> default
job = "teacher"; // .. unterrichtet!
job = "instructor"; // .. unterrichtet!

switch (job)
{
    case "driver":
        console.log(firstName + " fährt Taxi!");
        break;
    case "diver":
        console.log(firstName + " taucht!");
        break;
    case "artist":
        console.log(firstName + " malt ein bild");
        break;
        case "teacher":
        case "Instructor":
        console.log(firstName + " malt ein bild");
        break;
    default:
        console.log("Jane macht etwas anderes!");
        break;
}