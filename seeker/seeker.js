/* You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments. */   

     var seekers = [];
    var j = 0;
function destroyer(arr){
 
   for(i=1; i < arguments.length; i++){
    seekers[j] = arguments [i];
     j++;
    }
  
  var destroyed = arr.filter(getEm);
  
 function getEm(arrValue){
   for(k = 0; k < seekers.length; k++){
     console.log(seekers[k]);
     if(seekers[k] === arrValue){
       
       return false;
           
      }
      }
   return true;
     
   }
     
  
  return destroyed;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
