// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

let outside ="i am outsite the function";
function closure() {
  let inside = "I am inside this function";
  console.log(outside);
  console.log(inside) ;
};
//console.dir(closure);

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count =0;

  return function () {
    //console.log(count);
    return count++;
  } 
};
const counterOne = counter();
//counterOne();
//counterOne();
//counterOne();
//counterOne();

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count=0;
  // Return an object that has two methods called `increment` and `decrement`.
  return {
    // `increment` should increment a counter variable in closure scope and return it.
    increment: function() {
      count++;
      return count;
    },
    // `decrement` should decrement the counter variable and return it.
    decrement: function() {
      count--
      return count;
    },
    //checks what the counter is at
    check: function() {
      return count;
    }
  }  
};
const counterF = counterFactory();