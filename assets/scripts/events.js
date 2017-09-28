'use strict'

const ui = require('./ui.js')

const cells = new Array(9)
let winner

const newGame = function () {
  $('#gameBoard').show()
  $('#user-message').text('X\'s turn!')
  $('#new-game').show()
}

const checkWinner = function () {
  console.log(cells)
  // check row 1 for x winner
  if (cells[0] !== 'undefined' && cells[0] === cells[1] && cells[0] === cells[2] && cells[0] === 'x') {
    winner = 'player_x'
    ui.xWinningMessage()
  // check row 1 for o winner
  } else if (cells[0] !== 'undefined' && cells[0] === cells[1] && cells[0] === cells[2] && cells[0] === 'o') {
    winner = 'player_o'
    ui.oWinningMessage()
    // check if row 2 has a winner
  } else if (cells[3] !== 'undefined' && cells[3] === cells[4] && cells[3] === cells[5] && cells[3] === 'x') {
    winner = 'player_x'
    ui.xWinningMessage()
  } else if (cells[3] !== 'undefined' && cells[3] === cells[4] && cells[3] === cells[5] && cells[3] === 'o') {
    winner = 'player_o'
    ui.oWinningMessage()
    // check if row 3 has a winner
  } else if (cells[6] !== 'undefined' && cells[6] === cells[7] && cells[6] === cells[8] && cells[6] === 'x') {
    winner = 'player_x'
    ui.xWinningMessage()
  } else if (cells[6] !== 'undefined' && cells[6] === cells[7] && cells[6] === cells[8] && cells[6] === 'o') {
    winner = 'player_o'
    ui.oWinningMessage()
    // check if diagnal has a winner
  } else if (cells[0] !== 'undefined' && cells[0] === cells[4] && cells[0] === cells[8] && cells[0] === 'x') {
    winner = 'player_x'
    ui.xWinningMessage()
  } else if (cells[0] !== 'undefined' && cells[0] === cells[4] && cells[0] === cells[8] && cells[0] === 'o') {
    winner = 'player_o'
    ui.oWinningMessage()
  } else if (cells[2] !== 'undefined' && cells[2] === cells[4] && cells[2] === cells[6] && cells[2] === 'o') {
    winner = 'player_o'
    ui.oWinningMessage()
  } else if (cells[2] !== 'undefined' && cells[2] === cells[4] && cells[2] === cells[6] && cells[2] === 'x') {
    winner = 'player_x'
    console.log(winner)
    ui.xWinningMessage()
    // check column 1 for winner
  } else if (cells[0] !== 'undefined' && cells[0] === cells[3] && cells[0] === cells[6] && cells[0] === 'x') {
    winner = 'player_x'
    ui.xWinningMessage()
  } else if (cells[0] !== 'undefined' && cells[0] === cells[3] && cells[0] === cells[6] && cells[0] === 'o') {
    winner = 'player_o'
    ui.oWinningMessage()
    // check column 2 for winner
  } else if (cells[1] !== 'undefined' && cells[1] === cells[4] && cells[1] === cells[7] && cells[1] === 'x') {
    winner = 'player_x'
    ui.xWinningMessage()
  } else if (cells[1] !== 'undefined' && cells[1] === cells[4] && cells[1] === cells[7] && cells[1] === 'o') {
    winner = 'player_o'
    ui.oWinningMessage()
    // check column 3 for winner
  } else if (cells[2] !== 'undefined' && cells[2] === cells[5] && cells[2] === cells[8] && cells[2] === 'x') {
    winner = 'player_x'
    ui.xWinningMessage()
  } else if (cells[2] !== 'undefined' && cells[2] === cells[5] && cells[2] === cells[8] && cells[2] === 'o') {
    winner = 'player_o'
    ui.oWinningMessage()
  } else if (cells[0] !== undefined && cells[1] !== undefined && cells[2] !== undefined && cells[3] !== undefined &&
      cells[4] !== undefined && cells[5] !== undefined && cells[6] !== undefined && cells[7] !== undefined &&
      cells[8] !== undefined) {
    ui.drawMessage()
  }
}

const addSelector = function (event) {
  if ($(event.target).css('background-image') === 'none') {
    $(event.target).css('background-image', makeMove(event))
  }
}

const makeMove = function (event) {
  const currentPlayer = $('#gameBoard').attr('data-player')
  cells[$(event.target).attr('data-index')] = currentPlayer
  if (currentPlayer === 'x') {
    $('#gameBoard').attr('data-player', 'o')
    ui.oTurnMessage()
    return 'url(lib/images/letter_x.png)'
  } else {
    $('#gameBoard').attr('data-player', 'x')
    ui.xTurnMessage()
    return 'url(lib/images/o.png)'
  }
}

module.exports = {
  addSelector,
  newGame
}
