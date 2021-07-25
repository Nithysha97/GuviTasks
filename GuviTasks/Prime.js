var Prime=function(arr){
let primeArray=0;
  primeArray = arr.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(primeArray)}
Prime([2, 3, 4, 5, 6, 7, 8, 9, 10]);