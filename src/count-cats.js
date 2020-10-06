const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let count = 0;

  backyard.forEach(arr => {
    arr.forEach(el => {
      if (el === '^^') {
        count += 1;
      }
    })
  })

  return count;
};