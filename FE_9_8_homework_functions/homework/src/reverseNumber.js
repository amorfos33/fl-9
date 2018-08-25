function reverseNumber(number) {
    return Number(Array.from(String(Math.abs(number))).reverse().join('')) * Math.sign(number);
}