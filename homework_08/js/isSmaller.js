let isBigger = function(a,b) {
  return a>b;
};
let isSmaller = function(a,b) {
  return !isBigger() && a!==b;
};
