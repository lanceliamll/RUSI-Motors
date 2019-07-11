let phPrice = data => {
  let priceData = data.split("");
  let priceLength = priceData.length;

  if (priceLength === 4) {
    priceData.splice(1, 0, ",");
    let joined = priceData.join("");
    return joined;
  } else if (priceLength === 5) {
    priceData.splice(2, 0, ",");
    let joined = priceData.join("");
    return joined;
  } else if (priceLength === 6) {
    priceData.splice(3, 0, ",");
    let joined = priceData.join("");
    return joined;
  } else if (priceLength === 7) {
    priceData.splice(1, 0, ",");
    priceData.splice(5, 0, ",");
    let joined = priceData.join("");
    return joined;
  }
};

module.exports = phPrice;
