
/*Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.*/

function where(arr, num) {
  
 arr.push(num);
 arr.sort(function(a, b) {
  return a - b;
 });
 
 return arr.indexOf(num);
  
}

where([40, 60], 50);
