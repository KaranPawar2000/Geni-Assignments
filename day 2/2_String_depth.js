

// Escape Characters
let text1 = "We are the so-called \"Vikings\" from the north.";
console.log(text1);

// Template Strings
// Templates were introduced with ES6 
let text3 =
`The quick
brown fox
jumps over
the lazy dog`;
console.log(text3);

//  strings can also be defined as objects with the keyword new

// String Methods
//.length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);

//.toUpperCase,.toLowerCase()
let text4 = "Hello World!";
let text2 = text1.toUpperCase();
console.log(text2);

//concat()
text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");

//.replace,.replaceAll
let text6 = "Please visit Microsoft!";
let newText = text6.replace(/MICROSOFT/i, "W3Schools");
console.log(newText);

let texts ="Hello Cats"
let text7 = texts.replaceAll("Cats","Dogs");
console.log(text7);

// Sting Traversal
// 1.for loop
const str = "GenihubKaran";
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
};

//2.for off loop
const str1 = "KaranPawarGeni";
for (const char of str1) {
    console.log(char);
};

//




