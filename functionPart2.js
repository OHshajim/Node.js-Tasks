// task-1
// Find the lowest number in the array below.
function lownum(numbers) {
    let min = numbers[0];
    for (const number of numbers) {
        if (number < min) { min = number; }
    }
    return min;
}
console.log("the lowest number in the array :",lownum( [167, 190, 120, 165, 137]));

// task-2
// Find the friend with the smallest name.

function smallestName(list) {
    let smallName = list[0];
    for (const name of list) {
        if (name.length < smallName.length) { smallName = name }
    };
    return smallName;
};
console.log('the smallest name is :',smallestName(['rahim', 'robin', 'rafi', 'ron', 'rashed']));

// task-3
// Your task is to calculate the total budget required to buy electronics:

function calculateElectronicsBudget(NumberOfLaptop, NumberOfTablet, NumberOfMobile) {
    if (typeof NumberOfLaptop !== "number" || typeof NumberOfTablet !== "number" || typeof NumberOfMobile !== "number") {
                console.log("please Enter three number like this (1,2,3)  and if you don't want some thing give it 0 ");
    };
    let laptopPrice = 35000;
    let tabletPrice = 15000;
    let MobilePrice = 20000;
    const tOtalPrice = NumberOfLaptop * laptopPrice + NumberOfTablet * tabletPrice + NumberOfMobile * MobilePrice;
    return tOtalPrice;
}
console.log("price of your Devices :", calculateElectronicsBudget(10, 10 ,0 )+'tk');


// task-4
// return the avg of price
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];
function findAveragePhonePrice(phone) {
    let sum = 0 , avg = 0 ;
    for (const item of phone) {
       sum = sum + item.price
    }
    avg = sum / phone.length
    return avg ;
}
console.log("Average price of phone" ,findAveragePhonePrice(phones)+'tk');


// task -5
const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
function calculateSalary(employees) {
    let total = 0 , salary = 0 , increment  ;
    for (const employee of employees) {
        increment = employee.experience*employee.increment ;
        total = total + increment + employee.starting ;
    }
    return total ;
}
console.log('the total salary has to be provided by the company in a month is :',calculateSalary(employees) +"tk");