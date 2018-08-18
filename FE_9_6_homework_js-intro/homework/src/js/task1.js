const money = parseFloat(prompt('Enter Your amount of money', '0'));
const discount = parseFloat(prompt('Enter Your discount', '0'));
let output;
let saved = money / 100 * discount;
let priceWithDiscount = money - saved;

let outputTemplate = (money, discount, priceWithDiscount, saved) => `
Price without discount: ${+money.toFixed(2)}
Discount: ${+discount.toFixed(2)}%
Price with discount: ${+priceWithDiscount.toFixed(2)}
Saved: ${+saved.toFixed(2)}
`;

if (validateInput(money) || validateInput(discount) || discount > 100) {
    output = 'Invalid data';
} else {
    output = outputTemplate(money, discount, priceWithDiscount, saved);
}

function validateInput(number) {
    return isNaN(number) || typeof number !== 'number' || number < 0;
}

console.log(output);