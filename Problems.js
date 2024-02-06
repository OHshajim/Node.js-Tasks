// problem-1
// A function who take a number and give its cube .
function cube(number) {
    if(typeof number !== "number"){
        return "give a number..!"
    }
    const cube = Math.pow(number , 3);
    return cube;
}
// console.log(cube(5));

// problem-2
// input  2 string if 2nd string match with 1st than return true else false 
function matchFinder(Text , text) {
    if( typeof Text !== "string"||typeof text !== "string"){return "ERROR!!! Please input only texts "}
    return Text.includes(text);
}
console.log(matchFinder('iam shajim','shaj'));//if word or texts match return true 
console.log(matchFinder('iam Shajim','shaj'));//else false 