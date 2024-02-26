
// Step 1: Create an array of numbers. Use the '.map' function to double all the numbers in the array.
const numbers:number[] = [1, 2, 3, 4, 5];
console.log("numbers        " + numbers);
const doubledNumbers:number[] = numbers.map((number:number) => number*2);
console.log("doubledNumbers " + doubledNumbers);
console.log("\n");

// Step 2: Create an array of words. Use the '.filter' function to select only the words that are longer than 5 letters.
const words:string[] = ["Create", "an",  "array", "of", "words"];
console.log("words       " + words);
const longWords:string[] = words.filter((word:string)=> word.length > 5);
console.log("longWords   " + longWords);
console.log("\n");

// Step 3: Create an array of numbers. Use the '.reduce' function to calculate the sum of all the numbers in the array.
const numbers2:number[] = Array.from({ length: 20 }, (_, index) => index + 1);
console.log("numbers2        " + numbers2);
const sum:number = numbers2.reduce((acc:number, number:number) => acc + number, 0);
console.log("sum             " + sum);
console.log("\n");

// Step 4: Create an array of numbers. Use the '.some' function to check if at least one number is greater than 10.
const numbers3:number[] = Array.from({ length:10}, (_, index) => index * index);
console.log("numbers3        " + numbers3);
const some:boolean = numbers3.some((number:number) => number > 10);
console.log("some            " + some);


console.log("\n");
console.log("!--- BONUS ---!\n");
const list:number[] = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];
console.log("list            " + list);
// Sort these numbers in descending order.
list.sort((a:number, b:number) => a - b).reverse();
console.log("list sorted     " + list);
console.log("\n");

// Square these numbers.
list.map((number:number) => number*number);
console.log("list squared    " + list);
console.log("\n");

// Remove the lowest two numbers and the highest 4 numbers from the list.
const shortenedList:number[] = list.slice(4, list.length-2);
console.log("shortenedList   " + shortenedList);
console.log("\n");

// Remove all numbers that are divisible by 4.
const filteredList:number[] = shortenedList.filter((number:number) => number % 4 !== 0);
console.log("filteredList    " + filteredList);
console.log("\n");

// Add up all the numbers.
const sum2:number = filteredList.reduce((acc:number, number:number) => acc + number, 0);
console.log("sum2            " + sum2);
console.log("\n");

