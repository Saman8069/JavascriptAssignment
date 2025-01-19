// Write a function that takes three numbers as input and prints the largest of the three


function findLargest(a, b, c) {
    if (a >= b && a >= c) {
        console.log(`${a} is the largest number.`);
    } else if (b >= a && b >= c) {
        console.log(`${b} is the largest number.`);
    } else {
        console.log(`${c} is the largest number.`);
    }
}

findLargest(10, 20, 30); 

