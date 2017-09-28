'use strict'

// const store = require('../store.js')
const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const eventsMain = require('../events')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('data is ', data)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onCreateGame = function (event) {
  event.preventDefault()
  // const data = getFormFields(this)
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onGetGames = function (event) {
  event.preventDefault()
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

const onUpdateGame = function (event) {
  console.log('event.target is ', event.target)
  event.preventDefault()
  const index = $(event.target).attr('data-index')
  const player = eventsMain.changePlayer
  const over = eventsMain.gameOver
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
  api.updateGame(data)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFail)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#new-game').on('click', onCreateGame)
  $('#get-games').on('click', onGetGames)
}

module.exports = {
  addHandlers,
  onUpdateGame
}
