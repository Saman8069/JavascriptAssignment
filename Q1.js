//Write a program that prints all even numbers from 1 to 50
//using proper indentation and comments to explain your code.
// let n = 50;
// for(let i=1; i<=n; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

function Evennum(n, num) {
  if (n === 50) return;
}

function checkEven(Evennum) {
  if (n % 2 == 0) return Evennum(n + 1, num);
}

// find your state : number
// pass state too each fn call printEven(number)
// define base case : n==50 rokiney
// perform operation : print even
// return call for next cycle : printEven(num++)

function printEven(from, to) {
  if (from === to) {
    return;
  }
  if (from % 2 == 0) {
    console.log(from);
  }
  return printEven(from + 1, to);
}

printEven(1, 50);
// console.log("The even numbers are &{checkEven(1)}");
