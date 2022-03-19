const allGameButtons = document.querySelectorAll('.gameArea');
let clicks = 0;

const gameBoard = (() => {
    const gameboard = ['O', 'X', 'O']
    return {
        gameboard,
    }
})();

const playArea = (() => {
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
    })
})();

const checkVictory = () => {

}
