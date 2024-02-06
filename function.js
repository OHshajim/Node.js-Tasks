// task-1
//Write a function to convert temperature from Celsius to Fahrenheit.
// Formula- (0°C × 9/5) + 32 = 32°F .

function CelsToFarh(num) {
    return (num * 9 / 5) + 32;
}
console.log('Fahrenheit :',CelsToFarh(0));

// task-2
// You are given an array of numbers. Count how many times the a number is repeated in the array.

function find(num) {
    const numbers = [5, 6, 11, 12, 98, 5];
    let count = 0;
    for (const number of numbers) {
        if (number === num) {
            count++
        }
    }
    return count;
}
console.log("repeated :", find(5));
console.log("repeated :", find(20));

// task-3
// Write a function to count the number of vowels in a string.

function vowelCount(text) {
    let count = 0, i;
    for (i = 0; i <= text.length; i++) {
        if (text[i] === 'a' || text[i] === 'e' || text[i] === 'i' || text[i] === 'o' || text[i] === 'u' || text[i] === 'A' || text[i] === 'E' || text[i] === 'I' || text[i] === 'O' || text[i] === 'U') {
            count++;
        }
    }
    return count;
};
console.log('the number of vawel in this text :' ,vowelCount('Write A function to count the number of vowels in A string.'));

// task-4
// Write a function to find the longest word in a given string.

function longWord(text) {
    let words = text.split(' '), longWordLength = 0, longWord = '';
    for (let i = 0; i <= words.length - 1; i++) {
        if (words[i].length > longWordLength) {
            longWordLength = words[i].length;
            longWord = words[i]
        };
    };
    return longWord;
};
console.log('longgest word is :', longWord('I am learning Programming to become a programmer'));


// task-5
// Generate a random number between 10 to 20.
function lotary (){
 let num = Math.floor((Math.random()*11)+10)
 return num ;
};
console.log('lotary result between (10-20) :', lotary());
