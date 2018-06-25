/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
  var count = 0;
 
  for (var i = L; i <= R; i++) {
    var positiveBits = countPositiveBits(i);
    if (isPrime(positiveBits)) {
      count++;
    }
  }

  return count;
};

var isPrime = function(number) {
  if (number === 1) {
    return false;
  }
  
  var flag = true;
  var limit = Math.floor(number / 2);
  for (var i = 2; i <= limit; i++) {
    if (number % i === 0) {
      flag = false;
      break;
    }
  }
  
  return flag;
};

var countPositiveBits = function(number) {
  var count = 0;
  var current = number;
  while (current > 1) {
    var bit = current % 2;
    
    if (bit === 1) {
      count++;
    }
    
    current = Math.floor(current / 2);
  }
  
  if (current === 1) {
    count++;
  }
  
  return count;
};
