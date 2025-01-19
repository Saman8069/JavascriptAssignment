// Showcase the array method .map() .filter()

const arr = [1,2,3,4,5];
console.log(arr);
const squaredNum = arr.map(num=>num*num);
console.log(squaredNum);
const filterOdd = squaredNum.filter(num=>(num%2==0));
console.log(filterOdd);