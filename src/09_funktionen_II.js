

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : check
*/

// module: addition a+b | test
//output(add(2,2));
//output(add(4,-5));

function add(a,b)
{
	return a + b;
}


// module: subtraction a-b | test
// output(subtract(3,4));
// output(subtract(3,0));
// output(subtract(3,-4));
// output(subtract(0,4));

function subtract(a,b)
{
	return a - b;
}


// module: multiplication a * b |  test
// output(multiply(3,2));
// output(multiply(3,-2));
// output(multiply(3,0));

function multiply(a,b)
{
	return a * b;
}


// module: division a / b |  test
output(divide(4,2));
output(divide(3,2));
output(divide(3,-2));
output(divide(0,2));
output(divide(3,0));

function divide(a,b)
{
	if (b !== 0) // b != 0 ("!=" bedeutet ungleich)
	{	
		return a / b;
	}
	else
	{
		return "Division durch 0 ist nicht definiert."
	}
}


// module: output | test:
// output("hello");
// output(2);
function output(outputData) 
{
	console.log(outputData);
}
  