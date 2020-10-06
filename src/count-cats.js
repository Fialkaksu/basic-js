const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let count = 0;

  backyard.forEach(arr => {
    arr.forEach(el => {
      if(el === '^^'){
        count += 1;
      }
    })
  })

  return count;
};
