function getMin() {
  let args = [];
  for (let i = 0; i < arguments.length; i++) {
    args[i] = arguments[i];
  }
   return Math.min.apply(null, args);
}

//console.log(getMin(33,-3));
function getMin() {
  let args = [];
  for (let i = 0; i < arguments.length; i++) {
    args[i] = arguments[i];
  }
  let min = args.sort(function(a, b){return a - b});
  return min[0];
}
//console.log(getMin(33,-99,-88, 77, -8989));