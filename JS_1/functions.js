//Function constructor can be used to create functions dynamically 

/* let addFunction = new Function('a', 'b', 'return a + b;');

let result = addFunction(3, 5);
console.log(result); */

// An Immediately Invoked Function Expression (IIFE) allows a function to be executed immediately after it's defined.
// We declare an anonymous function inside a set of parentheses. Inside the function body, we can define variables.
// We add an additional pair of parentheses (); to immediately invoke the function.

/* (function() {
    console.log("Эта функция вызывается очень интересно!");
  })();

  // Anonymous Function
  //Call the function by variable's name. We cannot call the function before its declare.

  let doTheThing = function(thingsToDo){
    console.log('I will do ' + thingsToDo);
  };

  doTheThing('work');

  doTheThing('nothing');
 */

  //recursive function
  
  console.log(findLongestString(['apple', ['banana', 'orange', 'strawberry'], ['grape', ['kiwi', 'pear']]]));

  function findLongestString(arr) {
      let longest = '';
      for (let i = 0; i < arr.length; i++) {
          if (typeof arr[i] === 'object') {
              let nestedLongest = findLongestString(arr[i]);
              if (nestedLongest.length > longest.length) {
                  longest = nestedLongest;
              }
          } else if (typeof arr[i] === 'string') {
              if (arr[i].length > longest.length) {
                  longest = arr[i];
              }
          }
      }
      return longest;
  }



 