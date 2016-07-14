/*** Return the length of the longest word in the provided sentence.

Your response should be a number.***/

function findLongestWord(str) {
  var longWord= 0;
  var split = str.split(' ');
   for(i = 0; i < split.length; i++){
     var wordLength = split[i].length;
     if(wordLength > longWord){
       longWord = wordLength;
       console.log('long');
     }
          
   }
  return longWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
