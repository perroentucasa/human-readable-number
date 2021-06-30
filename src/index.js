

module.exports = function toReadable (number) {
let result ='';
let hundreds, tens, digits;
let wordsNumbers = {
    0:"zero",
    1:"one",
    2:"two",
    3:"three",
    4:"four",
    5:"five",
    6:"six",
    7:"seven",
    8:"eight",
    9:"nine",
    10:"ten",
    11:"eleven",
    12:"twelve",
    13:"thirteen",
    14:"fourteen",
    15:"fifteen",
    16:"sixteen",
    17:"seventeen",
    18:"eighteen",
    19:"nineteen",
    20:"twenty",
    30:"thirty",
    40:"forty",
    50:"fifty",
    60:"sixty",
    70:"seventy",
    80:"eighty",
    90:"ninety",
    100:"hundred"
}


if (number < 21){return wordsNumbers[number]};
if (number > 20 && number < 100 && Number(number.toString().slice(1)) > 0){
  tens = Number(number.toString()[0])*10;
  digits = Number(number.toString()[1]);

result = wordsNumbers[tens] + " " + wordsNumbers[digits];
return result;
}
if (number > 100 && Number(number.toString()[2]) > 0 && Number(number.toString()[1]) > 1){
    hundreds = Number(number.toString()[0]);
    tens = Number(number.toString()[1])*10;
    digits = Number(number.toString()[2]);
result = wordsNumbers[hundreds] + " hundred " + wordsNumbers[tens] + " " + wordsNumbers[digits];
   return result;  }
    
   if (number > 100 && Number(number.toString()[2]) == 0 && Number(number.toString()[1]) > 0){
    hundreds = Number(number.toString()[0]);
    tens = Number(number.toString()[1])*10;
    result = wordsNumbers[hundreds] + " hundred " + wordsNumbers[tens];
    return result;
   }

   if (number > 100 && Number(number.toString()[1]) == 1){
    hundreds = Number(number.toString()[0]);
    tens = Number(number.toString().slice(1));
    result = wordsNumbers[hundreds] + " hundred " + wordsNumbers[tens];
    return result;
   }

   if (number > 100 && Number(number.toString()[1]) == 0 && Number(number.toString()[2]) > 0){
    hundreds = Number(number.toString()[0]);
    digits = Number(number.toString().slice(2));
    result = wordsNumbers[hundreds] + " hundred " + wordsNumbers[digits];
    return result;
   }

   if (number > 99 && Number(number.toString().slice(1)) == 0){
    hundreds = Number(number.toString()[0]);
    
    result = wordsNumbers[hundreds] + " hundred";
    return result;
   }

   if (number < 100 && Number(number.toString().slice(1)) == 0){
    
    
    result = wordsNumbers[number];
    return result;
   }



}
