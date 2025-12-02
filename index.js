//string concatenation

let dealerName= "Gracieux Kitsa";
let location = "Uganda";

const message= "Dealer: "+dealerName+"| Location: "+location;
console.log(message);

//use of backticks for clean code

const message2=`Dealer: ${dealerName} | Location: ${location}`;
console.log(message2)

//type checking and conversion
const greeting="hello";

console.log(typeof(greeting));

const val = "900";

//before, it is still string
console.log(typeof(val));
const newVal = parseInt(val);

//after it is int
console.log(typeof(newVal));

let a = 456;

console.log(typeof(String(a)));

//string methods

const firstName="fred";
let lastName="okia";

console.log(firstName.toUpperCase());
console.log(lastName.toUpperCase());

console.log(`${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}`);

//removing spaces in a string
const middleName = "  joseph  ";
console.log(middleName);
console.log(middleName.trim());