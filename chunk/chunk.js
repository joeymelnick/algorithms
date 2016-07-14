/*Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.*/

function chunk(arr, size) {
  var loopTimes = Math.ceil(arr.length / size);
  var sliceArr = '';
  var newArray = [];
  var startCounter;
  var endCounter;
  var finalArray = [];
//this loop breaks down the string into the correct length
  for(i=0; i < loopTimes; i++){
    startCounter = 0 + (size * i);
    endCounter = size + (size * i);
    sliceArr = arr.slice(startCounter, endCounter);
    finalArray.push(sliceArr);
    }
    
     return finalArray;
 }
  


chunk([0, 1, 2, 3, 4, 5], 3);