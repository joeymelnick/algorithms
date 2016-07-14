/**** Return the factorial of the provided integer.****/

function factorialize(num) {
console.log(num);
  var add = 1;
for(i = 1; i <= num; i++){
 add *= i;
  console.log(add);
  }
return add;
}

factorialize(5);
