'use strict'

const ui = require('./ui.js')
const authApi = require('./auth/api')

let cells = new Array(9)
let winner

const newGame = function () {
  winner = undefined
  $('#gameBoard').attr('data-player', 'x')
  $('#row1col1').css('class', 'col-xs-4 box panel')
  $('#row1col2').css('class', 'col-xs-4 box panel')
  $('#row1col3').css('class', 'col-xs-4 box panel')
  $('#row2col1').css('class', 'col-xs-4 box panel')
  $('#row2col2').css('class', 'col-xs-4 box panel')
  $('#row2col3').css('class', 'col-xs-4 box panel')
  $('#row3col1').css('class', 'col-xs-4 box panel')
  $('#row3col2').css('class', 'col-xs-4 box panel')
  $('#row3col3').css('class', 'col-xs-4 box panel')
  cells = new Array(9)
  $('#gameBoard').show()
  $('#user-message').text('X\'s turn!')
  $('#new-game').show()
  $('#stats-message').hide()
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
    winner = 'draw'
    ui.drawMessage()
  }
}

const addSelector = function (event) {
  if (winner === undefined && $(event.target).css('class') !== ('x-background' || 'o-background')) {
    $(event.target).addClass(makeMove(event))
    $(event.target).removeAttr('style')
    checkWinner()
    onUpdateGame(event)
    gameOver()
    changePlayer()
  }
}

const onUpdateGame = function (event) {
  console.log('event.target is ', event.target)
  event.preventDefault()
  const index = $(event.target).attr('data-index')
  const player = changePlayer()
  const over = gameOver()
  console.log('index is ', index)
  console.log('player is ', player)
  console.log('over is ', over)
  const data = {
    'game': {
      'cell': {
        'index': index,
        'value': 'x'
      },
      'over': true
    }
  }
  authApi.updateGame(data)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFail)
}

const gameOver = function () {
  if (winner === undefined) {
    return false
  } else return true
}

const changePlayer = function () {
  const currentPlayer = $('#gameBoard').attr('data-player')
  if (currentPlayer === 'x') {
    return 'o'
  } else {
    return 'x'
  }
}

const makeMove = function (event) {
  const currentPlayer = $('#gameBoard').attr('data-player')
  cells[$(event.target).attr('data-index')] = currentPlayer
  if (currentPlayer === 'x') {
    $('#gameBoard').attr('data-player', 'o')
    ui.oTurnMessage()
    return 'x-background'
  } else {
    $('#gameBoard').attr('data-player', 'x')
    ui.xTurnMessage()
    return 'o-background'
  }
}

module.exports = {
  addSelector,
  newGame,
  changePlayer,
  gameOver
}
