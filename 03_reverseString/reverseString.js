const reverseString = function (a) {
  let string = a;
  let myArray = a.split("");
  let reverseArray = myArray.reverse();
  let finalString = reverseArray.join("");
  return finalString;
};

// Do not edit below this line
module.exports = reverseString;
