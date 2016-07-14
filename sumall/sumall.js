/*We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.*/



function sumAll(arr) {
 var small = Math.min(arr[0], arr[1]);
 var big = Math.max(arr[0], arr[1]);
 var newArr =[small];

  for(i=small; i < big; i++){
    newArr.push(small+1);
    small++

  }
 
 var sum = newArr.reduce(function(a, b, c){
    console.log(a, b, c);
   return(a+b);
 
 }, 0);
console.log(sum)
  return sum;
  
}

sumAll([5, 10]);