import './styles.css';

function Gameboard() {
    const columns = 7;
    const rows = 6;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(Cell());
        }
    }

    const getBoard = () => board;
    const dropToken = (column, player) => {
        const availableCells = board.filter(row => row[column].getValue() === 0).map(row => row[column]);

        if (!availableCells.length) return;

        const lowestRow = availableCells.length - 1;
        board[lowestRow][column].addToken(player);
    }

    const printBoard = () => {
        const boardWithCellValues = board.map(row => row.map(cell => cell.getValue()));
        console.log(boardWithCellValues);
    }

    return {
        getBoard, dropToken, printBoard
    }
}

function Cell() {
    let value = 0;

    function addToken(player) {
        value = player;
    }
    function getValue() {
        return value;
    }

    return {
        addToken,
        getValue
    };
};

function gameController(
    playerOneName = 'Player One',
    playerTwoName = 'Player Two'
) {
    const board = Gameboard();

    const players = [
        {
            name: playerOneName,
            token: 1
        },
        {
            name: playerTwoName,
            token: 2
        }
    ]

    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    }
    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn.`);
    }

    const checkBoardforWinner = (column, token) => {
        let adjacentSameTokens = 0;

        for (let i = 0; i < board.getBoard().length; i++) {
            if (!board.getBoard()[i][column].getValue()) continue;
            else if (board.getBoard()[i][column].getValue() != token) adjacentSameTokens = 0;
            else {
                adjacentSameTokens++;
                if (adjacentSameTokens === 4) break;
            }
        }
        if(adjacentSameTokens === 4) console.log(`winner is ${activePlayer.name}`);
    }

    const playRound = (column) => {
        board.dropToken(column, activePlayer.token);
        checkWinner(column, activePlayer.token);
        switchPlayerTurn();
        printNewRound();
    }

    printNewRound();

    return {
        playRound,
        getActivePlayer,
        board: board.printBoard
    }
}

const game = gameController();
game.playRound(1);
game.playRound(3);
game.playRound(1);
game.playRound(3);
game.playRound(1);
game.playRound(3);
game.playRound(1);
game.playRound(3);
game.playRound(1);
game.playRound(3);
game.playRound(1);
game.playRound(3);
game.playRound(1);
game.playRound(3);