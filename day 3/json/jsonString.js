//Json.parse used to convert data into object

const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');


// useful for sending data to a server, storing data in a database, or transmitting data between a client and a server.
const text1 = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text1);

// Convert a string into a date:
const text = '{"name":"John", "birth":"2000-12-14", "city":"New York"}';
const obj2 = JSON.parse(text);
obj2.birth = new Date(obj2.birth);

console.log(obj2.name + ", " + obj2.birth);

// Convert a string into a function:
const text2 = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
const obj1 = JSON.parse(text2);
obj1.age = eval("(" + obj1.age + ")");
console.log(obj1.name + ", " + obj1.age());

//JavaScript function JSON.stringify() to convert it into a string.
//convert into string to send data on server
const ob = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(ob);
console.log(ob);
console.log(myJSON);

const arr = ["John", "Peter", "Sally", "Jane"];
const myJ = JSON.stringify(arr);
console.log(myJ);



