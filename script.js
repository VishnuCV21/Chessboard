const chessboard = document.getElementById('chessboard');

for (let i = 0; i < 64; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    
    const row = Math.floor(i / 8);
    const col = i % 8;
    
    if ((row + col) % 2 === 0) {
        square.style.backgroundColor = 'white';
    } else {
        square.style.backgroundColor = 'black';
    }
    
    chessboard.appendChild(square);
}
