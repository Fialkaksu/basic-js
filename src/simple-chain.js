const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chains: [],

  getLength() {
    return this.chains.length;
  },

  addLink(value) {
    value === undefined ? this.chains.push(' ') : this.chains.push(`${value}`);
    return this;
  },

  removeLink(position) {
    if (position &&
      typeof position === 'number' &&
      parseInt(position) === position &&
      position > 0 &&
      position <= this.getLength()) {
      this.chains.splice(position - 1, 1);
    } else {
      this.chains = [];
      throw new Error();
    }
    return this;
  },

  reverseChain() {
    this.chains.reverse();
    return this;
  },

  finishChain() {
    const chainsToPrint = `( ${this.chains.join(' )~~( ')} )`;
    this.chains = [];
    return chainsToPrint;
  }
};

module.exports = chainMaker;