/*
function outer() {
  let outerVar = "I'm in the outer scope!";
  
  function inner() {
    console.log(outerVar);
    outerVar = "Updated";
  }

  return inner; 
}

const closure = outer();  // outer() runs, but returns inner()
closure();  // prints: I'm in the outer scope!
closure();  // prints: Updated

function counter() {
  let count = 0; // private variable

  return function() {
    count++;
    return count;
  };
}

const increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3
const counter = (function () {
  let count = 0;

  return {
    increment: function() {
      count++;
      console.log(count);
    },
    reset: function() {
      count = 0;
      console.log("Counter reset");
    }
  };
})();

counter.increment(); // 1
counter.increment(); // 2
counter.reset();     // Counter reset*/
