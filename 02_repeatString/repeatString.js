const repeatString = function (hey, num) {
  let i = 1;
  let sum = "";
  if (num >= 0) {
    for (i; i <= num; i++) {
      sum += hey;
    }
  } else sum = "ERROR";
  return sum;
};

// Do not edit below this line
module.exports = repeatString;
