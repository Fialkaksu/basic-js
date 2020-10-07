const CustomError = require("../extensions/custom-error");

const START_KEY_CODE = 65;
const COUNT_OF_LETTERS = 26;

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error();

    message = message.toUpperCase();
    key = key.toUpperCase();

    let encryptedMessage = '';

    for (let i = 0, j = 0; i < message.length; i++) {
      if (/[A-Z]/.test(message[i])) {
        encryptedMessage += String.fromCharCode((((message[i].charCodeAt() - START_KEY_CODE) + (key[j % key.length].charCodeAt() - START_KEY_CODE)) % COUNT_OF_LETTERS) + START_KEY_CODE);
        j++;
      } else {
        encryptedMessage += message[i];
      }
    }

    return this.isDirect ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }
  
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error();

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let message = '';

    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      if (/[A-Z]/.test(encryptedMessage[i])) {
        message += String.fromCharCode((((encryptedMessage[i].charCodeAt() - START_KEY_CODE) - (key[j % key.length].charCodeAt() - START_KEY_CODE) + COUNT_OF_LETTERS) % COUNT_OF_LETTERS) + START_KEY_CODE);
        j++;
      } else {
        message += encryptedMessage[i];
      }
    }

    return this.isDirect ? message : message.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;