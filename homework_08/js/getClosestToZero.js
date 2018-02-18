function getClosestToZero() {
  var closest = Math.abs(0 - arguments[0]);
  var closestArguments = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (closest > Math.abs(0 - arguments[i])) {
      closest = Math.abs(0 - arguments[i]);
      closestArguments = i;
    }
  }
  return arguments[closestArguments];
}
//console.log(getClosestToZero(3, -4, 2, -1,1,0.5));