
//call used to use function of other object
const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"Karan",
    lastName: "Pawar"
  }
  const person2 = {
    firstName:"Pawar",
    lastName: "Karan"
  }
  
 
  console.log(person.fullName.call(person1));

  //With Argument
  const person3 = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person4 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  console.log(person3.fullName.call(person4, "Oslo", "Norway"));
  