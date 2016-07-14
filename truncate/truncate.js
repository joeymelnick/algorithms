/*Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.*/

function truncate(str, num) {
  console.log(num);
  var dotStr ='';
  var numMinusThree = '';
  var truncStr ='';
  
  if(str.length > num){
    if(num >= 3){
     numMinusThree = num - 3;
     truncStr = str.slice(0, numMinusThree);
     dotStr = truncStr + '...';
      return dotStr;

    }

    else{
      truncStr= str.slice(0, num);
      dotStr = truncStr + '...';
      return dotStr;
    }
  } 
  else{
    return str;
  }
 }

truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
