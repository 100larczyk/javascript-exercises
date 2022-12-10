const sumAll = function (a, b) {
  let firstValue = Number(a);
  let secondValue = Number(b);
  let i = firstValue;
  let finalSum;
  for (i; i <= secondValue; i++) {
    finalSum += i;
  }
  return finalSum;
};

sumAll(2, 6);
// Do not edit below this line
module.exports = sumAll;
