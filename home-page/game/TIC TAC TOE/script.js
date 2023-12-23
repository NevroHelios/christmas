document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const status = document.querySelector('.status');
    const resetButton = document.getElementById('resetButton');

    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], // Rows
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], // Columns
        [0, 4, 8],
        [2, 4, 6] // Diagonals
    ];

    // Create cells dynamically
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('data-index', i);
        cell.addEventListener('click', () => handleCellClick(i));
        board.appendChild(cell);
    }

    // Event listener for reset button
    resetButton.addEventListener('click', resetGame);

    // Function to handle cell click
    function handleCellClick(index) {
        if (!gameActive || gameBoard[index] !== '') return;

        gameBoard[index] = currentPlayer;
        document.querySelector(`.cell[data-index="${index}"]`).textContent = currentPlayer;

        const winner = checkWinner();
        if (winner) {
            highlightWinner(winner);
            status.textContent = `Player ${currentPlayer} wins!`;
            gameActive = false;
        } else if (gameBoard.every(cell => cell !== '')) {
            status.textContent = 'It\'s a draw!';
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            status.textContent = `Player ${currentPlayer}'s turn`;
        }
    }

    // Function to check for a winner
    function checkWinner() {
        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                return pattern;
            }
        }
        return null;
    }

    // Function to highlight the winning line
    function highlightWinner(pattern) {
        for (const index of pattern) {
            document.querySelector(`.cell[data-index="${index}"]`).classList.add('winner');
        }
    }

    // Function to reset the game
    function resetGame() {
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        gameActive = true;
        currentPlayer = 'X';
        status.textContent = `Player ${currentPlayer}'s turn`;

        document.querySelectorAll('.cell').forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('winner'); // Remove the winner class
        });
    }
});