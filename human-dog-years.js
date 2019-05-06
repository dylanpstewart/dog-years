// Initialize myAge variable.
let myAge = 43;
// Initialize earlyYears variable.
let earlyYears = 2;
// Multiply the value saved to earlyYears by 10.5.
earlyYears *= 10.5;
myAge = myAge - 2;
laterYears = myAge;
// Calculate the number of dog years accounted for by later years.
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
// Calculate my age in dog years.
myAgeInDogYears = earlyYears + laterYears;
// Convert my name to lower case.
myName = 'Dylan'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);