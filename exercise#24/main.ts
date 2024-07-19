//test equality or inequality with strring
const string1:string = "Hello";
const string2:string = "World";
console.log(string1 === string2)
console.log(string1 !== string2)
// test using the lower case function
const upperCase : string = 'HELLO';
const lowerCase : string = "hello";
console.log(upperCase.toLowerCase() === lowerCase);
//numerical tests involving equality and inequality , greater than
//and less than,greater than or equality and less than or equal to
const num1 : number = 20;
const num2 : number = 30;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
//test using "and" and "or"  operators
const x : number = 1000;
const y : number = 2000;
const z : number = 3000;
console.log(x<y && y<z);
console.log(x<y || y<z);
//test whether an item is in array
const array1 : number[] = [1,2,3,4,5];
const itemToFind :number = 3;
console.log(array1.indexOf(itemToFind) !== -1);
//test whether an item is not in a array
console.log(array1.indexOf(10) === -1);