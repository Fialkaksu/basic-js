const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = str !== undefined ? `${str}` : '';

  let addition = options.addition !== undefined ? `${options.addition}` : '';
  let additionRepeatTimes = (options.additionRepeatTimes && typeof options.additionRepeatTimes === 'number') ? options.additionRepeatTimes : 1;
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';

  let inner = [];
  for (let i = 0; i < additionRepeatTimes; i++) {
    inner.push(addition);
  }
  str = inner.length === 0 ? str : `${str}${inner.join(additionSeparator)}`;

  let repeatTimes = (options.repeatTimes && typeof options.repeatTimes === 'number') ? options.repeatTimes : 1;
  let separator = options.separator ? options.separator : '+';

  let output = [];
  for (let i = 0; i < repeatTimes; i++) {
    output.push(`${str}`);
  }
  str = output.length === 0 ? str : `${output.join(separator)}`;

  return str;
};