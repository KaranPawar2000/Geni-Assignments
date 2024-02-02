//Object
 const student=
 {
    Name:"Karan",
    Last_Name:"Pawar",
    UCID:2022510045,
    college:"SPIT",
    Full_Name: function(){
        return this.Name+" "+this.Last_Name;
    }
 };

let text ="";
for(let x in student){
    text+= student[x];
}
console.log(text);



 //Accessing Object Properties

 const b=student["UCID"];
 const a =student.Name;
 console.log(a);
 console.log(b);
 console.log(student.Full_Name());
 //When a JavaScript variable is declared with the keyword "new", the variable is created as an object

 //Nested Object
//  myObj = {
//     name:"John",
//     age:30,
//     cars: {
//       car1:"Ford",
//       car2:"BMW",
//       car3:"Fiat"
//     }
//   }

//   console.log(myObj.cars.car2);

  //Nested Arrays Object
  const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }
  //Accessing
  let x = "";
  for (let i in myObj.cars) {
      x += myObj.cars[i].name + ": ";
      for (let j in myObj.cars[i].models) {
          x += myObj.cars[i].models[j] + " ";
      }
      x += "\n"; // Add a newline 
  }
  
  console.log(x);