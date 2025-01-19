// Write a function declaration, expression, and arrow function that takes name as an argument and print Welcome {name} using template literals.

const Greet1 = function(name)
{
    console.log(`Welcome ${name}`);
}

const Greet2= (name) => { console.log(`Welcome ${name}`)};

function Greet3 (name)
{ console.log(`Welcome ${name}`);}

Greet1("Ram");
Greet2("Shyam");
Greet3("Hari");
