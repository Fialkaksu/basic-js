const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  depth = 1;
  calculateDepth(arr) {
    if (arr && Array.isArray(arr)) {
      let depth = 0;

      arr.forEach(el => {
        depth = Math.max(depth, this.calculateDepth(el));
      });

      return depth + 1;
    }

    return 0;
  }
};