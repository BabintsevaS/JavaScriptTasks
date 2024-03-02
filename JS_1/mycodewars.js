// Write Number in Expanded Form
//You will be given a number and you will need to return it as a string in Expanded Form
// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

// function expandedForm(num) {
    
//     let numStr = num.toString();
//     let result = [];
    
//     for (let i = 0; i < numStr.length; i++) {
        
//         if (numStr[i] !== '0') {
//             let expandedDigit = numStr[i] + '0'.repeat(numStr.length - i - 1);
//             result.push(expandedDigit);
//         }
//     }   
//     return result.join(' + ');
// }


// const number = 1020;
// console.log(expandedForm(number)); 

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
//If the function is passed a valid PIN string, return true, else return false
//https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

/* function validatePIN (pin) {

    let pinStr = pin.toString();
    let result;
    
    if ((pinStr.length == 4 || pinStr.length == 6)) {
        for (let i = 0; i < pinStr.length; i++) {
            if (pinStr[i] < '0' || pinStr[i] > '9') {
              return false;
            }
          }
        result = true;      
    } else result = false;

    return result;

  }

  const pin = "123456";
  console.log(validatePIN(pin)); */


  //Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
  //(In this case, all triangles must have surface greater than 0 to be accepted).
  //сравнить каждую сторону с суммой двух других. Если хотя бы в одном случае сторона окажется больше либо равна сумме двух других, то треугольника с такими сторонами не существует
  //https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript

  /* function isTriangle(a,b,c) {
    
    let result;

    if ((a >= b + c) || (b >= a + c) || (c >= a + b)){
        result = false;
    } else result = true;

    return result;
  }  

    let a = -5;
    let b = 1;
    let c = 3;

    console.log(isTriangle(a, b, c)); */

//Simple, given a string of words, return the length of the shortest word(s).
//String will never be empty and you do not need to account for different data types.
//https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

/* function findShort(s){

    let arrStr = s.split(' ');
    
    let min = arrStr[0].length;
    let j = 0;
    for (let i = 0; i < arrStr.length; i++) {

        if (min > arrStr[i].length) {
            min = arrStr[i].length;
            j = i;           
        }
    }

    return arrStr[j];
}

let s = 'Testing reduces the probability of defects remaining undiscovered in the test object';

console.log(findShort(s));
 */


