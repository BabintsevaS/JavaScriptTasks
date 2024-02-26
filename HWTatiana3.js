// task 1 
//переменные х и у обменяются своими значениями. Выведите значения переменных х и у в консоль. Используйте 2 способа

// let x = 100;
// let y = 200;

// console.log(x, y);

// let z = x;
// x = y;
// y = z;

// console.log(x, y); 

// task 1 variant 2

/* let a = 100;
let b = 200;

console.log(a, b);

a = a + b; // a = 300 b = 200
b = a - b; // a = 300 b = 100
a = a - b; // a = 200 b = 100

console.log(a, b); */

 
// task 1 variant 2
// let x = 100;
// let y = 200;

// console.log(x, y);

// let a = [x, y];
// x = a[1];
// y = a[0];

// console.log(x, y);


// task 2 - a
// Create variables for the names with age: Tom, Sam, Jack, Ted.
// Tom is 16, each friend is 2 years older, starting from Tom in order. a)Count the age of each person

// let tomAge = 16;
// let samAge = tomAge + 2;
// let jackAge = samAge + 2;
// let tedAge = jackAge + 2;

// console.log(`Tom is - ${tomAge} years old`);
// console.log(`Sam is - ${samAge} years old`);
// console.log(`Jack is - ${jackAge} years old`);
// console.log(`Ted is - ${tedAge} years old`);

// task 2 - a variant 2 using array

// let person = new Array (4);

// person[0] = 16;
// for (let i = 1; i < person.length; i++) {
//       if (i = 1) {
//         person[i] = person[0] + 2;  
//     } if (i = 2) {
//         person[i] = person[1] + 2;  
//     } if (i = 3) {
//         person[i] = person[2] + 2;  
//     }   
// }


// console.log(person);
// console.log(`Tom is - ${person[0]} years old`);
// console.log(`Sam is - ${person[1]} years old`);
// console.log(`Jack is - ${person[2]} years old`);
// console.log(`Ted is - ${person[3]} years old`);

// task 2 - a - variant 3

/* let person = new Array (4);

person[0] = 16;

for(let i = 1; i < person.length; i++){
    person[i] = person[i-1] + 2;           
}

console.log(person);

 console.log(`Tom is - ${person[0]} years old`);
 console.log(`Sam is - ${person[1]} years old`);
 console.log(`Jack is - ${person[2]} years old`);
 console.log(`Ted is - ${person[3]} years old`); */

 // task 2 - a - variant 4 
 
/* let person = ['Tom', 'Sam', 'Jack', 'Ted'];
let index = 16;

for (let i = 0; i < person.length; i++){
    console.log(person[i] + ' is ' + (index + (i * 2)));
} */


// task 2 - b 
// Insert the names with the age to the string, using concatenation and ${}: “Tom is - 16 years old, Sam is - …. years old, Jack is … years old,Ted is … years old. 
//And the total of our age is ….years old”.

// let tomAge = 16;
// let samAge = tomAge + 2;
// let jackAge = samAge + 2;
// let tedAge = jackAge + 2;

// let totalAge = tomAge + samAge + jackAge + tedAge;

// console.log(`Tom is - ${tomAge} years old`);
// console.log(`Sam is - ${samAge} years old`);
// console.log(`Jack is - ${jackAge} years old`);
// console.log(`Ted is - ${tedAge} years old`);
// console.log(`Total of our age is - ${totalAge} years old`);



// task 2 - c 
//Find out what is the Unicode Value of the 1sr letter of the name, and add the total to the string: “The total of the Unicode values of the 1st letter of the all names is ….!”.

// let nameTom = 'Tom';
// let nameSam = 'Sam';
// let nameJack = 'Jack';
// let nameTed = 'Ted';

// let letterTom = nameTom.charCodeAt(0);
// let letterSam = nameSam.charCodeAt(0);
// let letterJack = nameJack.charCodeAt(0);
// let letterTed = nameTed.charCodeAt(0);

// console.log('Tom is ' + letterTom);
// console.log('Sam is ' + letterSam);
// console.log('Jack is ' + letterJack);
// console.log('Ted is ' + letterTed);

// console.log(`The total of the Unicode values of the 1st letter of the all names is - ${letterTom + letterSam + letterJack + letterTed}`);

