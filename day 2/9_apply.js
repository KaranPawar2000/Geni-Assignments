const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person1 = {
    firstName: "Karan",
    lastName: "Pawar"
  }
  
 
 console.log (person.fullName.apply(person1));


 //With Arguments
 //take arguments as array
 
 const person2= {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person3 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  console.log(person2.fullName.apply(person3, ["Oslo", "Norway"]));