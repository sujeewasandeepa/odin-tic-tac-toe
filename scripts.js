const allGameButtons = document.querySelectorAll('.gameArea');

const gameBoard = (() => {
    const scoreboard = [];
    const gameboard = ['O', 'X', 'O']

    return {
        gameboard,
        scoreboard
    }
})();

let clicks = 0;

allGameButtons.forEach((element) => {
    function printBtnValue() {
        if (element.innerText == '' && clicks % 2 == 0) {
            element.innerText = "X";
            element.disabled = true;
            clicks ++;
        } if (element.innerText == '' && clicks % 2 !== 0) {
            element.innerText = "O";
            element.disabled = true;
            clicks ++;
        }
    }
    element.addEventListener('click', printBtnValue);
});
