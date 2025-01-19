// Use a while loop to calculate the factorial of a given number.

function findFactorial(num)
{
    while(num>0)
    {
        --num;
        num*=num;
    }
    return num;
      
}

num = 7;
console.log("The factorial of", num , "is ", findFactorial(num));