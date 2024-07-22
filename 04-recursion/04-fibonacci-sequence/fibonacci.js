function fibonacci(num) {
  if (num < 2) return num;

  const result = fibonacci(num - 1) + fibonacci(num - 2);

  return result;
}

module.exports = fibonacci;
