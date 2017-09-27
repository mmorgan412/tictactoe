'use strict'

const ui = require('./ui.js')

const cells = []

const addSelector = function (event) {
  if ($(event.target).css('background-image') === 'none') {
    $(event.target).css('background-image', makeMove(event))
    checkWinner()
  }
}

const makeMove = function (event) {
  const currentPlayer = $('#gameBoard').attr('data-player')
  cells[$(event.target).attr('data-index')] = currentPlayer
  console.log(cells)
  if (currentPlayer === 'x') {
    $('#gameBoard').attr('data-player', 'o')
    return 'url(lib/images/letter_x.png)'
  } else {
    $('#gameBoard').attr('data-player', 'x')
    return 'url(lib/images/o.png)'
  }
}

const checkWinner = function () {
  // check row 1 for x winner
  if (cells[0] !== 'undefined' && cells[0] === cells[1] && cells[0] === cells[2] && cells[0] === 'x') {
    ui.xWinningMessage()
  // check row 1 for o winner
  } else if (cells[0] !== 'undefined' && cells[0] === cells[1] && cells[0] === cells[2] && cells[0] === 'o') {
    console.log('o is the winner!')
    // check if row 2 has a winner
  } else if (cells[3] !== 'undefined' && cells[3] === cells[4] && cells[3] === cells[5] && cells[3] === 'x') {
    console.log('x is the winner!')
  } else if (cells[3] !== 'undefined' && cells[3] === cells[4] && cells[3] === cells[5] && cells[3] === 'o') {
    console.log('o is the winner!')
    // check if row 3 has a winner
  } else if (cells[6] !== 'undefined' && cells[6] === cells[7] && cells[6] === cells[8] && cells[6] === 'x') {
    console.log('x is the winner!')
  } else if (cells[6] !== 'undefined' && cells[6] === cells[7] && cells[6] === cells[8] && cells[6] === 'o') {
    console.log('o is the winner!')
    // check if diagnal has a winner
  } else if (cells[0] !== 'undefined' && cells[0] === cells[4] && cells[0] === cells[8] && cells[0] === 'x') {
    console.log('x is the winner!')
  } else if (cells[0] !== 'undefined' && cells[0] === cells[4] && cells[0] === cells[8] && cells[0] === 'o') {
    console.log('o is the winner!')
  } else if (cells[2] !== 'undefined' && cells[2] === cells[4] && cells[2] === cells[6] && cells[2] === 'o') {
    console.log('o is the winner!')
  } else if (cells[2] !== 'undefined' && cells[2] === cells[4] && cells[2] === cells[6] && cells[2] === 'x') {
    console.log('x is the winner!')
  }
}

module.exports = {
  addSelector
}
