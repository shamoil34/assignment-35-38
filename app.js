//! Chapter 35-38

//? Question 1

// var date = new Date("05 Dec 2015 22:18:39");
// console.log(date);

//? Question 2

// function greet(){
//     var firstName = prompt("Enter First Name: ");
//     var lastName = prompt("Enter last Name: ")
//     document.write(`Hello! ${firstName} ${lastName}`)
// }
// greet();

//? Question 3

// function Add(){
//     var firstNum = +prompt("Enter First number: ");
//     var secondNum = +prompt("Enter last number: ")
//     var result = firstNum+secondNum;
//     document.write(`The sum of the two numbers are ${result}`);
// }
// Add();

//? Question 4

// function calculator(){
//     var num1 = +prompt("Enter first number: ");
//     var num2 = +prompt("Enter second number: ");
//     var operator = prompt("Enter operator: ")

//     if (operator === "+"){
//         return `The addition of numbers are ${num1+num2}`
//     }
//     else if(operator === "*"){
//         return `The multiplicatopn of numbers are ${num1*num2}`
//     }
//     else if(operator === "-"){
//         return `The subtraction of numbers are ${num1-num2}`
//     }
//     else if (operator === "/"){
//         if (num2 > 0){
//             return `The division of the numbers are ${num1/num2}`
//         }
//         else{
//             return `The second number should be greater than 0`
//         }
//     }
// }
// document.write(calculator())

//? Question 5

// function squares(num){
//     return num*num
// }
// document.write(squares(2));

//? Question 6

// function factorial(num){
//     if (num>1){
//         return num* factorial(num-1)
//     }
//     else if(num === 1 || num === 0){
//         return 1 
//     }

//     else{
//         return `The number should be greater than 0`
//     }
// }

// document.write(factorial(3));

//? Question 7

// function count(){
//     numStart = +prompt("Enter the starting number");
//     numEnd = +prompt("Enter last number")
//     for (let i = 1; i<=numEnd; i++){
//         document.write(`${i} <br>`);
//     }
// }
// count()

//? Question 8

// function calculateHypotnuse(b,p){
//     var base = b,
//     perpendicular = p 

//     function calculateSquare(){
//         var result = base**2 + perpendicular**2
//         return result
//     }
//     var finalOutput = Math.round(Math.sqrt(calculateSquare()))
//     return finalOutput;
// }
// document.write(calculateHypotnuse(5,6));

//? Question 9

// function Area(w,h){
//     var width = parseInt(w),
//     height = parseInt(h)

//     var Area = width*height
//     return Area;
// }
// document.write(Area("2.365","5.6and"))

//? Question 10

// function palindrome(word){

//     var reverseWord = word.split('').reverse().join('')
//     console.log(reverseWord);
//     return word === reverseWord;

// }
// document.write(palindrome("civic"));

//? Question 11

// function upper(sentence){
//     var sentence = sentence.split(" ")
//     var string = ""
//     for (let i = 0;i <sentence.length;i++){
//         sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//         string+=sentence[i]+" "
//     }
//     return string;
// }
// document.write(upper("my name is muneeb"))

//? Question 12

// function longestWord(word){
//     var word = word.split(" ");
//     var long = word[0];
//     for (let i = 0; i<word.length; i++){
//         if (word[i].length> long.length){
//             long = word[i]
//         }
//     }
//     return long
// }
// document.write(longestWord("my name is Muneeb Pakistan"));


//? Question 13

// function counting(word, occ) {
//     var word = word.split(" ")
//     var sum = 0;

//     for (let i = 0; i < word.length; i++) {
//         for (let j = 0; j < word[i].length; j++) {
//             if (word[i][j] === occ) {
//                 sum += 1
//             }
//         }
//     }
//     return sum;
// }

// document.write(counting("JSResource.com", "o"))

//? Question 14

// function calcCircumference(r){
//     return Math.round(2*3.142*r);
// }

// function calcArea(r){
//     return Math.round(3.142*r**2);
// }
// document.write(calcCircumference(2) + "<br>");
// document.write(calcArea(2));