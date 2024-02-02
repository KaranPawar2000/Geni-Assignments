// set
const letters = new Set();

letters.add("a");
letters.add("b");
letters.add("c");

//MAP
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

  fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);


fruits.get("apples"); 

fruits.size;

fruits.delete("apples");

fruits.has("apples");

// The entries() method returns an iterator object with the [key, values] in a Map:
let text = "";
for (const x of fruits.entries()) {
  text += x;
}
console.log(text);

//RegExp
//Use a regular expression to do a case-insensitive search for "w3schools" in a string:

let texts = "Visit W3Schools";
let n = texts.search(/w3schools/i);


// Use a case insensitive regular expression to replace Microsoft with W3Schools in a string:
let text1 = "Visit Microsoft!";
let result = text1.replace(/microsoft/i, "W3Schools");




