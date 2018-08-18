const sideA = parseFloat(prompt('Enter the length of side "a"', '0'));
const sideB = parseFloat(prompt('Enter the length of side "b"', '0'));
const angle = parseFloat(prompt('Enter angle', '0'));
const allAngle = 180;
let sideC;
let output;
let perimeter;
let Striangule;
let outputTemplate = (sideC, Striangule, perimeter) => `
c length: ${+sideC.toFixed(2)} 
Triangle square: ${+Striangule.toFixed(2)}
Triangle perimeter: ${+perimeter.toFixed(2)}
`;

if (validateInput(sideA) || validateInput(sideB) || validateInput(angle) || angle > allAngle) {
    output = 'Invalid data';
} else {
    sideC = Math.sqrt(sideA*sideA + sideB*sideB - 2*sideA*sideB*Math.cos(Math.PI/allAngle*angle));
    perimeter = sideA + sideB + sideC;
    Striangule = getSquare(perimeter/2, sideA, sideB, sideC);
    output = outputTemplate(sideC, Striangule, perimeter);
}

function validateInput(number) {
    return isNaN(number) || typeof number !== 'number' || number < 0;
}

function getSquare(perimeter, sideA, sideB, sideC) {
    return Math.sqrt(perimeter * ((perimeter - sideA) * (perimeter - sideB) * (perimeter - sideC)));
}

console.log(output);