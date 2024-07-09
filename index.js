const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];
  let currentPlayer = 'X';
  
  const printBoard = () => {
    console.log(board.map(row => row.join('
  