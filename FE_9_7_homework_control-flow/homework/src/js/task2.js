let play = confirm('Do you want to play a game?');
const prizeMax = 10;
const rangeMax = 5;
let fuckEslinNumber = 1;
if (!play) {
    alert('You did not become a millionaire, but can.');
} else {
    game(rangeMax, prizeMax);
}
function game(range, prize, totalPrize = 0) {
    let randomNumber = Math.floor(Math.random() * (rangeMax + fuckEslinNumber));
    let currentPrize = prize;
    let attempts = 3;
    for (attempts; attempts > 0; attempts--) {
        let enterNumber = prompt(`Enter a number from 0 to ${range} 
        \n Attempts left: ${attempts}
        \n Total prize: ${totalPrize}$
        \n Possible prize on current attempt: ${currentPrize}$ `);
        if (+enterNumber === randomNumber) {
            let finish = confirm(`Congratulation! Your prize is: ${currentPrize + totalPrize} $
            \n Do you want to continue?`);
            if (finish) {
                game(range * 2, prize * 3, totalPrize + currentPrize);
            } else {
                alert(`Thank you for a game. Your prize is: ${currentPrize + totalPrize}$`);
                if (confirm('Do you want play again?')) {
                    game(rangeMax, prizeMax);
                    break;
                } 
                break;
            }
            break;
        } else if (!enterNumber) {
            break;
        } else {
            if (attempts === fuckEslinNumber) {
                alert(`Thank you for a game. Your prize is: ${totalPrize}`);
                if (confirm('Do you want play again?')) {
                    game(rangeMax, prizeMax);
                }
            }
        }
        currentPrize = Math.floor(currentPrize / 2);
    }
}