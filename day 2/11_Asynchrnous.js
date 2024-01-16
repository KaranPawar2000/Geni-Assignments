//Example of callback

setTimeout(myFunction, 3000);

function myFunction() {
  console.log("Karan Pawar !!");
}



// setInterval(myFunction, 1000);

// function myFunction() {
//   let d = new Date();
//   console.log(
//   d.getHours() + ":" +
//   d.getMinutes() + ":" +
//   d.getSeconds());
// }


//promises
function myDisplayer(some) {
    let s= some;
    console.log(s);
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // The producing code (this may take some time)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );

  



