// problem-1
// A function who take a number and give its cube .
function cube(number) {
    if (typeof number !== "number") {
        return "give a number..!"
    }
    const cube = Math.pow(number, 3);
    return cube;
}
// console.log(cube(5));

// problem-2
// input  2 string if 2nd string match with 1st than return true else false 
function matchFinder(Text, text) {
    if (typeof Text !== "string" || typeof text !== "string") { return "ERROR!!! Please input only texts " }
    return Text.includes(text);
};

//problem-3
// input 2 number and find the big number 
function sortmaker(array) {
    const [a, b] = array;
    if (a < 0 || b < 0) { return "invalid number " };
    if (a === b) { return "Equal number" };
    if (a > b) { return [a, b]; }
    else { return [b, a]; }
}

// problem-4
// take a object and output only keys value if value missing replace with __
function findAddress(object) {
    const street = object.street ||'__';
    const house = object.house ||'__';
    const Society = object.Society ||'__';
    const str = street+','+house+','+Society;
    return str;
};

// problem -5
function canPay(array,totalDuo){

    if (array.length==0){return "please give some value in array"};
 let sum = 0 ;
    for (const num of array) {
        sum = sum + num ;
    }
    if(sum>=totalDuo){return true }
    else{return false };
};