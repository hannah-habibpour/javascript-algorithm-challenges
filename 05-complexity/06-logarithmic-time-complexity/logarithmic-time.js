/*
Logarithmic Time (O(log n))

Logarithmic time means that the time required to complete a function is proportional to the logarithm of the input data set. 

*/

function findPower(base, exponent) {
  if (exponent === 0) {
    //1
    return 1; //1
  }

  if (exponent % 2 === 0) {
    //2
    const halfPower = findPower(base, exponent / 2); // T(n/2) + 1
    return halfPower * halfPower; // 2
  } else {
    const halfPower = findPower(base, (exponent - 1) / 2); // T((n-1)/2) + 1
    return base * halfPower * halfPower; // 3
  }
}
