//test equality or inequality with strring
var string1 = "Hello";
var string2 = "World";
console.log(string1 === string2);
console.log(string1 !== string2);
// test using the lower case function
var upperCase = 'HELLO';
var lowerCase = "hello";
console.log(upperCase.toLowerCase() === lowerCase);
//numerical tests involving equality and inequality , greater than
//and less than,greater than or equality and less than or equal to
var num1 = 20;
var num2 = 30;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
//test using "and" and "or"  operators
var x = 1000;
var y = 2000;
var z = 3000;
console.log(x < y && y < z);
console.log(x < y || y < z);
//test whether an item is in array
var array1 = [1, 2, 3, 4, 5];
var itemToFind = 3;
console.log(array1.indexOf(itemToFind) !== -1);
//test whether an item is not in a array
console.log(array1.indexOf(10) === -1);
