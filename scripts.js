const butn1 = document.querySelector('button');

const gameBoard = (() => {
    const scoreboard = [];
    const gameboard  = ['O', 'X', 'O']

    return {
        gameboard,
        scoreboard
    }
})();

// const printGameBoard = (gameboard) => {
//     gameboard.array.forEach(element => {
//         console.log(element);
//     });
// } 

console.log(gameBoard);