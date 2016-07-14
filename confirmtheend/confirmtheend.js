/*Check if a string (first argument, str) ends with the given target string (second argument, target).*/

function end(str, target) {

  var targetLength = target.length;
  
var strEnd = str.substr(-targetLength, targetLength);
  
  return strEnd == target;
  
}

end("Bastian", "n");
