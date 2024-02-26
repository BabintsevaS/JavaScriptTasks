//task 1 - Write a function to split a string and convert it into an array of words.
//https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript
/* let string = "I love JavaScript";

function stringToArray(string){
	return string.split(" ");
}

console.log(stringToArray(string)); */

// task 2 - Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.
//https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript
/* let x = [1, 2, '3', 0, '10'];

function sumMix(x){
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += parseInt(x[i]); 
       }    
       return sum;                              
    } 

console.log(sumMix(x)); */

//task 3 - You are given two sorted arrays that both only contain integers. 
//Your task is to find a way to merge them into a single one, sorted in asc order. 
//Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
//https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript
/* arr1 = [1, 3, 5, 7, 9, 11, 12];
arr2 = [1, 2, 3, 4, 5, 10, 12];

function mergeArrays(arr1, arr2) {
    let concatArr = arr1.concat(arr2).sort(function(a, b){return a - b});
    let result = [...new Set(concatArr)];
    return result; 
};

console.log(mergeArrays(arr1, arr2)); */

// task 4 - Input: Array of elements ["h","o","l","a"] Output: String with comma delimited elements of the array in th same order.
// https://www.codewars.com/kata/56e2f59fb2ed128081001328/train/javascript

/* function printArray(array){
    let prArr = array.join(",");
    return prArr;
  }

  array = [2,4,5,2];
  console.log(printArray(array)); */

  // task 5 - Add the value "codewars" to the websites array. After your code executes the websites array should == ["codewars"]
  // https://www.codewars.com/kata/511f0fe64ae8683297000001/train/javascript

  /* let websites = [];
  websites.push('codewars');

  console.log(websites); */

 //task 6 - Given an array of numbers (in string format), you must return a string. 
 //The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc.
 // https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c/train/javascript

 /* let x = ["29","2","3"];
 let arrLettets = ['z', 'y', 'x', 'w', 'v', 'u',
                   't', 's', 'r', 'q', 'p', 'o',
                   'n', 'm', 'l', 'k', 'j', 'i',
                   'h', 'g', 'f', 'e', 'd', 'c',
                   'b', 'a', '!', '?', ' '];
 
 function switcher(x){
    newArr = [];
    for (i = 0; i < x.length; i++){
        for (j = 0; j <= arrLettets.length; j++){
            if (parseInt(x[i]) === j){
                newArr.push(arrLettets[j-1]);
            }
        }        
    } return newArr.join("");
 }   
 
 console.log(switcher(x)); */

// task 7 - you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string,
// then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.
// https://www.codewars.com/kata/63f96036b15a210058300ca9/train/javascript

/* let s = 'kVgzUweayiaqcdlLHYNkPzxyKKEApEjNLlQQJDGmIxA';
let symbol = 'A'; */


/* function secondSymbol(s, symbol) {
    let firstIndex = s.indexOf(symbol); // Find the index of the first occurrence

    // If the first occurrence is not found or only occurs once, return -1
    if (firstIndex === -1 || s.indexOf(symbol, firstIndex + 1) === -1) {
        return -1;
    }

    // Find the index of the second occurrence starting from the index after the first occurrence
    let secondIndex = s.indexOf(symbol, firstIndex + 1);
    return secondIndex; 
}
*/
// function secondSymbol2(s, symbol) {
  
//     const indexArr = []; 
    
//     for(let i = 0; i < s.length; i++){
//       if (s[i] === symbol){
//         indexArr.push(i);
//       }
//     }
    
//     return indexArr[1] || -1;
//   }
  

// console.log(secondSymbol2(s, symbol)); 

//task 8 - 




 


