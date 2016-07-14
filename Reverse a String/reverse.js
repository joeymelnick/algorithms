*** Reverse the string ***

function reverseString(str) {
  var newArray = str.split('');
  newArray.reverse();
 
  var reversed = newArray.join('');
 return reversed;
  
}

reverseString("hello");
