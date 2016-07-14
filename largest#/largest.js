/*Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

*/

function largestOfFour(arr) {
 var largeArray = [];
  for(i=0; i < arr.length; i++){
    var currentArray = arr[i];
    currentArray.sort(function(a,b){return b-a});
     
   largeArray.push(currentArray[0]);
    
  }
  return largeArray;
 
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
