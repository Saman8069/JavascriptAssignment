// Write a program that checks if a number is positive, negative, or zero and logs the result.

function checkNumber(num) {
  if (num > 0) {
    console.log(`${num} is positive.`);
  } else if (num < 0) {
    console.log(`${num} is negative.`);
  } else {
    console.log(`${num} is zero.`);
  }
}

checkNumber(100);
checkNumber(-40);
checkNumber(0);
