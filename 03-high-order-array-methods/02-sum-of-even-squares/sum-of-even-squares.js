function sumOfEvenSquares(numbers) {
  const evenNums = numbers.filter((num) => num % 2 === 0);
  const evenNumsSqure = evenNums.map((num) => num * num);
  const sumOfevenNumsSqure = evenNumsSqure.reduce((total, num) => {
    return total + num;
  }, 0);

  return sumOfevenNumsSqure;
}

module.exports = sumOfEvenSquares;
