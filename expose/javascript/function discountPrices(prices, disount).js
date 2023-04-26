function discountPrices(prices, disount) {
    var discounted = [];
    var finalPrice = 0;

    for (var i = 0; i < prices.length; i++) {
        var discountPrices = prices[i] * (1 - disount);
        finalPrice = Math.round(discountPrices *100) / 100;
        discounted.push(finalPrice);
    }

    //console.log(i);
    console.log(discountPrice);
    //console.log(finalPrice);

    return discounted;
}

discountPrices([100, 200, 300], 0.5);