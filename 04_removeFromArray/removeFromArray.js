const removeFromArray = function (array, ...args) {
  return array.filter((arrayItem) => {
    const found = args.find((argsItem) => argsItem === arrayItem);
    return found ? false : true;
  });
};

module.exports = removeFromArray;
