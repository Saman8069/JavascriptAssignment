/* Write a function findMax that accepts an array of numbers and returns the maximum value.*/



const findMax = (arr,max) =>
{
  if(arr.length == 0)
    return max;
  
  return findMax(arr.slice(1),(max>arr[0] ? max : arr[0]))

  
}


// const findMax = (arr) =>{
//     var max = arr[0];
//     for(let i =0; i<arr.length; i++){
//         if(arr[i]>max){
//             max = arr[i];
//         }
//     }
//     return max;
// }

let arr = [1,2,3,7,4,9];
console.log("The elements of array are :", arr);
console.log("The maximum value in the array is ", findMax(arr,arr[0]));
