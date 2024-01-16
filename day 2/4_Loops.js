//for-loop
const a = [1, 2, 3, 45, 32];

for (let i = 0; i < a.length; i++) {
    a[i] = parseInt(prompt("Enter a value for index " + i + ":"));
}

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

  //for in
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

 //2.for off loop
const str1 = "KaranPawarGeni";
for (const char of str1) {
    console.log(char);
};

//while do whil is same as C++ and Java;

  