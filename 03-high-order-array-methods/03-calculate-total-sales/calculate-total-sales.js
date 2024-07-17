function calculateTotalSalesWithTax(products, taxRate) {
  const taxRatePercent = taxRate / 100;
  const salesWithoutTax = products.map((num) => num.quantity * num.price);
  const totalSalesWithoutTax = salesWithoutTax.reduce((total, num) => {
    return total + num;
  }, 0);

  const salesTaxAmount = totalSalesWithoutTax * taxRatePercent;

  return totalSalesWithoutTax + salesTaxAmount;
}

module.exports = calculateTotalSalesWithTax;
