//////////////////PROBLEM 1////////////////////


//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
  var name = "Tyler";
  function isTyler(name) {
    if (name === "Tyler") {
      return true;
    }
    else {
      return false;
    }
  }
  console.log(isTyler("Tyler"));
//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

//Code Here
 function getName() {
   var result = prompt("What is your name?");
   alert("Your name is:" + " " + result);
   return result;
 }
 getName();

 //////////////////PROBLEM 3////////////////////



 //Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
 //then alerts "Welcome, " plus whatever the users name is.

   //Code Here
   function welcome() {
     var name = getName();
     alert("Welcome, " + name);
   }

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here
  // Parameters are entered when creating a function, they are what is entered in the parentheses after the function name
  // at the beginning of the function. There can be multiple parameters, they are separated by commas.
  // Ex.
  // function fnName(parameter here...)
  //
  // Arguments are entered when you want to call(invoke) a function, the values entered represent the parameters. There can
  // also be multiple arguments, they are also seperated by commas
  // Ex.
  // fnName(argument here...)



//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
// The falsy values found in JavaScript are:
// false
// null
// undefined
// 0
// NaN
// empty string
//
// To check if something is falsy, you can use a boolean.


//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
function myName(name) {
  var str = "Jessica";
  return str;
}
myName();


//Now save the function definition of myName into a new variable called newMyName

  //Code Here
  var newMyName = myName;
  alert(newMyName()); //calling the definition of a function.

//Now alert the result of invoking newMyName



//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
  function outerFn() {
    return function() {
    var result = "Jessica";
    return result;
  }
}
//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
  var innerFn = outerFn();


//Now invoke innerFn.
innerFn();
