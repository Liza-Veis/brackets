module.exports = function check(str, bracketsConfig) {
  const brackets = {};
  for (let val of bracketsConfig) {
    brackets[val[0]] = val[1];
  }
  let chars = str.split("");
  for (let i = 0; i < chars.length - 1; i++) {
    if (brackets[chars[i]] === chars[i + 1] && brackets[chars[i]] !== undefined) {
      chars.splice(i, 2);
      i -= 2;
    }
  }
  return chars.join("") === "" ? true : false;
};
