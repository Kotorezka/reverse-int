module.exports = function reverse (n) {
    let str = ''+n;
    console.log(str);
  return parseInt(str.split('').reverse().join(''));
}
