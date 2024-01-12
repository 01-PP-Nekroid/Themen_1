/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaurruf | call
// Test();

// Funktionsrumpf / Funktionsdeklaration
function test()
{
    console.log("Hallo");
}


/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// Call
//ausgabeNamen();

// Funktion
function ausgabeNamen()
{
    // interne Variable | "What happens in VEGAS..."
    let firstName = "Kevin";
    console.log("Hallo, Bores");
    console.log("Hallo, " + firstName);
}

// console.log(firstName); // Fehler : scope!


/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// Argumente sind Daten für Parameter
//ausgabeNamen2("Marie"); // Argument

function ausgabeNamen2(firstName) // Parameter
{
    console.log("Hallo, " + firstName);
}


/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente
const prompt = require('prompt-sync')({sigint: true});

//ausgabeNamenParams(prompt("Bitte Vorname eingeben: "), prompt("Bitte nachname einbeben: "));

function ausgabeNamenParams(firstName, familyName) // Parameter
{
    console.log("Hallo, " + firstName + " " + familyName);
}


/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Funktionalitäten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

ausgabeNamenSRP("max", "Mütze");

function ausgabeNamenSRP(firstName, familyName) // Parameter
{
    // 1. Funktionalität: string composing
    const GAP = " ";
    let outputStr = "hallo, " + firstName + GAP + familyName

    // 2. Funktionalität: string output
    console.log(outputStr);
}