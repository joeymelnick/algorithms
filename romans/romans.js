/*
Convert the given number into a roman numeral.*/


function convertToRoman(num) {
 var roman =[];
 var digits = [];
  
  while (num > 0) {
    digits[digits.length] = num % 10;
    num = parseInt(num / 10);
}

   console.log(digits)

for(i=0; i < digits.length; i++){
  var firstDigit = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  var secondDigit = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  var thirdDigit = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  var fourthDigit =['', 'M', 'MM', 'MMM'];
  
  if(i===0){
  roman.push(firstDigit[digits[i]]); 
  }
  else if(i===1){
  roman.push(secondDigit[digits[i]]); 
 
    
  }
  else if(i===2){
  roman.push(thirdDigit[digits[i]]);  
  }
  else{
  roman.push(fourthDigit[digits[i]]);     
  }

}
  roman = roman.reverse();
  roman = roman.join('');
  return roman;
}



convertToRoman(12);
