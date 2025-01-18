// Write a program that filters out even numbers from an array and returns a new array with only the odd numbers



let arr = [1,2,4,6,3,12,54,98];


// filter(predicate: (value: number, index: number, array: number[]) => value is number, thisArg?: any): number[]
// filter(predicate: (value, index, arrary)-> boolean) -> arrayNumber[]
let oddArr = arr.filter(v=> v%2!=0)
console.log(oddArr);
