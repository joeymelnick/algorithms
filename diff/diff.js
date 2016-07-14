/*Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.*/

function diffArray(arr1, arr2) {
  var arr1Length = arr1.length;
  var arr2Length = arr2.length;
  var newArray = [];

  for(i=0; i < arr1Length; i++){
  	if(arr2.indexOf(arr1[i]) === -1){
  		newArray.push(arr1[i]);
  	}
  	}
  

  for(j=0; j < arr2Length; j++){
  	if(arr1.indexOf(arr2[j]) === -1){
  		newArray.push(arr2[j]);
  		console.log('fire');
  	}
  }
return newArray;
  }


 

diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
