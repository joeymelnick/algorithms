/*Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.*/

function repeat(str, num) {
 var repeatedStr ='';
  if(num >= 1){
    for(i=0; i < num; i++)
    repeatedStr += str;
    return repeatedStr;
  }
  else{
  return ''; 
  }
  
}

repeat("abc", 3);
