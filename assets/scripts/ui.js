'use strict'

const xWinningMessage = function () {
  $('#user-message').text('X Won The Game! Select New Game to play again!')
}

const oWinningMessage = function () {
  $('#user-message').text('O Won The Game! Select New Game to play again!')
}

const xTurnMessage = function () {
  $('#user-message').text('X\'s Turn!')
}

const oTurnMessage = function () {
  $('#user-message').text('O\'s Turn!')
}

const drawMessage = function () {
  $('#user-message').text('No Winner! Select New Game to play again!')
}

module.exports = {
  xWinningMessage,
  oWinningMessage,
  xTurnMessage,
  oTurnMessage,
  drawMessage
}
