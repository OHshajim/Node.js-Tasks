
function calculateMoney(ticketSale) {
    if (ticketSale >= 0) {
        const total = (ticketSale * 120) - (500 + (8 * 50));
        return total;
    }
    else {
        return "Invalid Number"
    }
};

function checkName(name) {
    // if input not string that output is invalid..
    if (typeof name !== "string") { return "Invalid" };

    // the last letter of name input on a variable 
    const letter = name[name.length - 1].toLowerCase();

    //if the last letter of the name is {a,y,i,o,u,w} than return the value is "good name" 
    if (letter === 'a' || letter === 'y' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' || letter === 'w') {
        return "Good Name"
    }

    else {
        return "Bad Name"
    }
};
console.log(checkName('RAFEE'));

function deleteInvalids(array) {
    // if input not a array than return "invalid array"
    if (Array.isArray(array) !== true) {
        return "Invalid Array"
    };
    let number = [];
    for (const item of array) {
        // taking only number 
        if (typeof item === "number" && Number.isNaN(item) !== true) { number.push(item) };
    }
    return number;
};


function password(obj) {

    objectLength = Object.keys(obj).length
    // if object keys more than or less then 3 this function return 'invalid'
    if (objectLength != 3) { return "invalid" }

    //  birth year length is not equal than 4 this function return 'invalid'
    else if (obj.birthYear.toString().length != 4) { return "invalid" }

    else {
        let password = obj.siteName + '#' + obj.name + '@' + obj.birthYear;
        return obj.siteName[0].toUpperCase() + password.slice(1);
    }
};

function monthlySavings(array, livingCost) {

    if (Array.isArray(array) !== true || typeof livingCost !== "number") { return "Invalid Input" };
    let sum = 0, num1 = 0;
    for (const number of array) {
        if (number >= 3000) { num1 = (number * 20) / 100, sum = sum - num1 };
        sum = sum + number;
    }

    const savings = sum - livingCost;
    if (sum < livingCost) { return "Earn More" }
    else { return savings; }
};

// console.log(monthlySavings(0,[89,89]));
