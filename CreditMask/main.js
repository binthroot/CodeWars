const maskify = (cc) => {
  let maskedCC = '';
  if (cc.length < 4) {
    return cc;
  } else {
    for (let i = 0; i < cc.length - 4; i++) {
      maskedCC += '#';
    }
    maskedCC += cc.slice(-4);
    return maskedCC;
  }
};

console.log(maskify('123143352'));
console.log(maskify('3352'));

// top solution on code wars
// uses regex to replace everything from the beginning to the last 4 with #
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}
