/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.


function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  
  var sourceKey = Object.keys(source);
  var win;
  var dealBreak;
  for(i=0; i < collection.length; i++){
     var storeObj = collection[i];
      var xSourceKey = sourceKey[0];
     
        if(source[xSourceKey] === storeObj[xSourceKey] && source[sourceKey[1]] === storeObj[sourceKey[1]]){
               arr.push(collection[i]);
        }
  }
  return arr;
  }
 
  // Only change code above this line


whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });*/