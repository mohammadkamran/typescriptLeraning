const prices = [
  "$1,200.50",
  "$499.99",
  "$750",
  "$2,300",
  "$120",
  "$999.99",
  "$5,000.75",
  "$450.25",
  "$800",
  "$50",
];

const newPriceList = prices.filter((price) => {
  // Remove the dollar sign and commas, then convert to a number.
  const numericPrice = parseFloat(price.replace(/[$,]/g, ""));
  // Filter out prices greater than $1000.
  return numericPrice > 500;
})
.sort((a, b) => {
  // Sort the filtered prices in descending order.
  const priceA = parseFloat(a.replace(/[$,]/g, ""));
  const priceB = parseFloat(b.replace(/[$,]/g, ""));
  return priceB - priceA;
});

console.log(newPriceList);

