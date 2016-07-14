/*Remove all falsy values from an array.*/

var trueFalse = '';


function bouncer(arr) {
  var filtered = arr.filter(Boolean);
  return filtered;
}


bouncer([7, "ate", "", false, 9]);