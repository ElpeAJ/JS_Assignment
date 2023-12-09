// A function that takes 5 numbers and
// adds the first two numbers, and subtract the third number for the result of the first
// then multiply the result by the fourth number, then divide the result by the 5th number
// The final result must be rounded to a whole number

function fiveNum(no1, no2, no3, no4, no5) {
  if (
    typeof no1 === "Number" &&
    typeof no2 === "Number" &&
    typeof no3 === "Number" &&
    typeof no4 === "Number" &&
    typeof no4 === "Number"
  ) {
    let result = ((no1 + no2 - no3) * no4) / no5;
    return Math.floor(result);
  } else {
    console.log(`One or more of your five numbers is not valid `);
  }
}

console.log(fiveNum(2, 4, 3, 5, 3));
console.log(fiveNum(20, 40, 30, 50, 30));
console.log(fiveNum(12, 14, 13, 15, 13));
console.log(fiveNum(2, 4, 3, 0, 3));
