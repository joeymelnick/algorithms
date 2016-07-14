/*Return true if the string in the first element of the array contains all 
of the letters of the string in the second element of the array.*/

function mutation(arr) {
  var firstWord = arr.slice(0,1).toString().toLowerCase();
  var secondWord = arr.slice(1,2).toString().toLowerCase();
  var lettersWordTwo = secondWord.split('');
  
  // This loop will compare each letter in word two the word one
  for(i = 0; i < secondWord.length; i++){
    var index = firstWord.indexOf(lettersWordTwo[i]);
    if(index === -1){
      return false;
    }
    else{
      index = 0;
    }
  }
  return true;
  
  
  
}

mutation(["hello", "hey"]);