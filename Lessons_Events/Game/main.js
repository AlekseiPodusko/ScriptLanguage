var board = document.getElementsByClassName('board')[0],
    player = document.getElementsByClassName('gamer')[0], elememt, innerElement,
    gamer1 = true,
    gameTable = [[null, null, null,], [null, null, null], [null, null, null]],
    nullCount = 9,
    winner = null;

player.innerText = 'Сейчас ходит Х';


for (var i = 0; i < 9; i++) {
    elememt = document.createElement('div');
    elememt.classList.add('cell');
    innerElement = document.createElement('div');
    innerElement.classList.add('inner-cell');
    innerElement.onclick = tableCklick;
    innerElement.setAttribute('x', (i % 3).toString());
    innerElement.setAttribute('y', parseInt(i / 3).toString());
    elememt.appendChild(innerElement);
    board.appendChild(elememt);
}

document.getElementsByClassName('button')[0].onclick = reset;

function tableCklick() {
    if (this.innerText == '') {
        this.innerText = gamer1 ? 'X' : '0';
        var y = this.getAttribute('y'), x = this.getAttribute('x');
        gameTable[y][x] = gamer1;
        nullCount--;
        if (
            (gameTable[y][0] === gamer1 && gameTable[y][1] === gamer1 && gameTable[y][2] === gamer1) ||
            (gameTable[0][x] === gamer1 && gameTable[1][x] === gamer1 && gameTable[2][x] === gamer1) ||
            (gameTable[0][0] === gamer1 && gameTable[1][1] === gamer1 && gameTable[2][2] === gamer1) ||
            (gameTable[2][0] === gamer1 && gameTable[1][1] === gamer1 && gameTable[0][2] === gamer1)) {
            winner = gamer1;
        }
        gamer1 = !gamer1;
        player.innerText = gamer1 ? 'Сейчас ходит Х' : 'Сейчас ходит О';
        if (nullCount == 0 || winner !== null) {
            if (winner !== null) {
                if (confirm('Победили ' + (winner ? 'X' : 'O') + '.\nЖелаете сыграть ещё?')) {
                    reset();
                }
            }
            else if (confirm('Игра закончилась в ничью. \nЖелаете сыграть ещё?')) {
                reset();
            }
        }
    }
    else {
        alert('Недопустимый ход');
    }
}

function reset() {
    gamer1 = true;
    gameTable = [[null, null, null], [null, null, null], [null, null, null]];
    nullCount = 9;
    winner = null;
    var table = document.getElementsByClassName('inner-cell');
    for (var i = 0; i < table.length; i++) {
        table[i].innerText = '';
    }

    player.innerText = 'Сейчас ходит Х';
}