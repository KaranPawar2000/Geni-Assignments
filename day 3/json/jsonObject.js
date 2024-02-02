const myJSON = '{"name":"John", "age":30, "car":null}';
const myObj = JSON.parse(myJSON);
x = myObj.name;
console.log(x);



let text = "";
for (const x in myObj) {
  text += x + ":" +myObj[x]+ " ";
}
console.log(text);


//Array

let y= '{"name":"John","age":30,"cars":["Ford", "BMW", "Fiat"]}';

    let k=JSON.parse(y);
    console.log(k.cars[0]);


  