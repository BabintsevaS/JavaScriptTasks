// task 1 Implement a function which convert the given boolean value into its string representation.
// https://www.codewars.com/kata/551b4501ac0447318f0009cd/train/javascript

/* function booleanToString(b){
    return b.toString();
  }

  let b = true;

  console.log(booleanToString(b)); */

  // task 2 - Write a function to split a string and convert it into an array of words.
  // https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript
/* 
  function stringToArray(string){
    return string.split(" ");
  }

  let string = "I like JavaScript";

  console.log(stringToArray(string)); */

  // task 3 - Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string)
  //https://www.codewars.com/kata/5966e33c4e686b508700002d/train/javascript

  /* function sumStr(a, b) {
    if (a == '' && b == ''){
        return '0';
    } else if (a == '') {
        return b;
    } else if (b == '') {
        return a;
    } else {
        sum = parseInt(a) + parseInt(b);
        return sum.toString();
    }
     
  } */
  
/*   function sumStr(a,b) {
    return String(Number(a)+Number(b));
 }

  let a = '';
  let b = '';

  console.log(sumStr(a, b)); */

  // task 4 - Create a method to see whether the string is ALL CAPS.
// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript

  /* function isUpperCase(str) {
  return str.toString() === str.toUpperCase();
}

let str = 'HH';

console.log(isUpperCase(str)); */

/* 
String.prototype.isUpperCase = function() {
    return this.toUpperCase() === this.toString();
  } */

  // task 5 - write me a function stringy that takes a size and returns a string of alternating 1s and 0s. the string should start with a 1
  // https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript

 /*  function stringy(size) {
    str = "1";
    for (let i = 0; i < size - 1; i++) {
      if(i % 2 == 0){
        str += "0";
      } else {
        str += "1";
      }        
    }
    return str;
  }

  let size = 3;
  console.log(stringy(size)); */

  // task 6 - Remove an exclamation mark from the end of a string. 
  // https://www.codewars.com/kata/57fae964d80daa229d000126/train/javascript

  /* function remove(string) {
    if (string.endsWith('!')) {
        let arr = string.split('');
        arr.pop();
        return arr.join('');
    } return string;
  } */

  /* function remove(string) {
    return string.replace(/!$/, '');     
  }

  let string = '!Hi!';

  console.log(remove(string)); */

