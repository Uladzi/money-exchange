// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let coinsBox = {};
    if (currency > 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    } else {
        let H = 0;
        for (; currency >= 50; currency -= 50) {
            H = H + 1;
            coinsBox.H = H;
        }
        let Q = 0;
        for (; 50 > currency && currency >= 25; currency -= 25) {
            Q = Q + 1;
            coinsBox.Q = Q;
        }
        let D = 0;
        for (; 25 > currency && currency >= 10; currency -= 10) {
            D = D + 1;
            coinsBox.D = D;
        }
        let N = 0;
        for (; 10 > currency && currency >= 5; currency -= 5) {
            N = N + 1;
            coinsBox.N = N;
        }
        let P = 0;
        for (; 5 > currency && currency > 0; currency -= 1) {
            P = P + 1;
            coinsBox.P = P;
        }
        return coinsBox;
    }
}