/*Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".*/


function titleCase(str) {
 //Splits the string into an array of each word
  var splitStr = str.split(' ');
  var newString = '';
  
  for(i = 0; i < splitStr.length; i++){
   //brings each string to lower case
    splitStr[i] = splitStr[i].toLowerCase();
    //replaces the first letter in the string with an uppercase version
    splitStr[i] = splitStr[i].replace(splitStr[i].charAt(0), splitStr[i].charAt(0).toUpperCase());
   
    }
  newString = splitStr.join(' ');
 return newString;
}

titleCase("I'm a little tea pot");
