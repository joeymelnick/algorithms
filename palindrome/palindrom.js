/*** Return true if the given string is a palindrome. Otherwise, return false. ***/

function palindrome(str) {
  // Good luck!
  var string = str;
  string = str.replace(/\s+/g, '');
  string = string.replace(/\W/g, '');  
   string = string.replace(/\_/g, ''); 
  string = string.toLowerCase();
   
  
  var array = string.split('');
  array.reverse();
  var reverseString = array.join('');
 return string === reverseString;

   }



palindrome("eye");
