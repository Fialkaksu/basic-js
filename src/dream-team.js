const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let dreamTeam = [];
  if (members && members instanceof Array) {
    members.forEach(member => {
      if (member &&
        typeof member === 'string') {
        dreamTeam.push(member.trim().charAt(0).toUpperCase());
      }
    });

    return dreamTeam.sort().join('');
  } else return false;
};