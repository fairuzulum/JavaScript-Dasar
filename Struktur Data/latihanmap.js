const currency = new Map([
    ["USD", 14000],
    ["JPY", 131],
    ["SGD", 11000],
    ["MYR", 3500]
])

const priceInJPY = 5000;
const priceInIDR = currency.get('JPY') * priceInJPY;

console.log(priceInIDR);

const oneTwoThree = [1, 2, 3];
const sevenEightNine = [7, 8, 9];

const result = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];

console.log(result);