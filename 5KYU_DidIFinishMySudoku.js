/**
 * Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter.
 * If the board is valid return 'Finished!', otherwise return 'Try again!'
 *
 * Sudoku rules:
 * Complete the Sudoku puzzle so that each and every row, column, and region contains the numbers one
 * through nine only once.
 * For those who don't know the game, here are some information
 * about rules and how to play Sudoku: http://en.wikipedia.org/wiki/Sudoku and http://www.sudokuessentials.com/
 */

console.log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2],
                              [6, 7, 2, 1, 9, 5, 3, 4, 8],
                              [1, 9, 8, 3, 4, 2, 5, 6, 7],
                              [8, 5, 9, 7, 6, 1, 4, 2, 3],
                              [4, 2, 6, 8, 5, 3, 7, 9, 1],
                              [7, 1, 3, 9, 2, 4, 8, 5, 6],
                              [9, 6, 1, 5, 3, 7, 2, 8, 4],
                              [2, 8, 7, 4, 1, 9, 6, 3, 5],
                              [3, 4, 5, 2, 8, 6, 1, 7, 9]]));

console.log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2],
                              [6, 7, 2, 1, 9, 0, 3, 4, 9],
                              [1, 0, 0, 3, 4, 2, 5, 6, 0],
                              [8, 5, 9, 7, 6, 1, 0, 2, 0],
                              [4, 2, 6, 8, 5, 3, 7, 9, 1],
                              [7, 1, 3, 9, 2, 4, 8, 5, 6],
                              [9, 0, 1, 5, 3, 7, 2, 1, 4],
                              [2, 8, 7, 4, 1, 9, 6, 3, 5],
                              [3, 0, 0, 4, 8, 1, 1, 7, 9]]))

function doneOrNot(board){
    let sum = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            sum += board[i][j];
        }
        if (sum !== 45){
            return 'Try again!'
        }
        sum = 0;
    }
    let col = 0;
    sum = 0;
    while (col<board.length){
        for (let i = 0; i < board.length; i++) {
            for (let j = col; j < col+1; j++) {
                sum += board[i][j];
            }
        }
        if (sum !== 45){
            return 'Try again!'
        }
        sum = 0;
        col++;
    }
    let row = 0;
    col = 0;
    sum = 0;
    let counter = board.length*board.length;
    while (counter !== 0){
        for (let i = row; i < row+3; i++) {
            for (let j = col; j < col+3; j++) {
                sum += board[i][j];
                counter--;
            }
        }
        if (sum !== 45){
            return 'Try again!'
        }
        if (col>5){
            row += 3;
            col = 0;
        } else {
            col += 3;
        }
        sum = 0;
    }
    return 'Finished!'
}
