export const unitPriceFormatStr = (unitPrice, unitsNumber) => {
  return `${unitPrice.toFixed(2)} x ${unitsNumber}`;
};

export const priceFormatStr = (unitPrice) => {
  return `$${unitPrice.toFixed(2)}`;
};

export const totalPriceFormatStr = (unitPrice, unitsNumber) => {
  const total = unitPrice * unitsNumber;
  return `Total: $${total.toFixed(2)}`;
};
