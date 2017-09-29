'use strict'

const store = require('../store.js')
// const events = require('./events.js')

const signUpSuccess = function (data) {
  $('#message').show()
  $('#message').text('You have successfully signed up! Log in to Play!')
  $('#sign-up').trigger('reset')
}

const signUpFailure = function () {
  $('#message').show()
  if ($('#password') !== $('#password-confirmation')) {
    $('#message').text('Passwords do not match!')
  } else $('#message').text('Sign up Failed')
}

const signInSuccess = function (data) {
  $('#message').show()
  $('#message').text('You have successfully signed in as ' + data.user.email)
  store.user = data.user
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('#sign-in').trigger('reset')
  $('#new-game').show()
  $('#get-games').show()
}

const signInFailure = function () {
  $('#message').show()
  $('#message').text('Sign in Failed. Check your user name and password and try again.')
}

const changePasswordSuccess = function () {
  $('#message').show()
  $('#message').text('You have successfully changed your password!')
  $('#change-password').trigger('reset')
}

const changePasswordFailure = function () {
  $('#message').show()
  $('#message').text('Change Password Failed - Please Try Again!')
}

const signOutSuccess = function () {
  $('#message').show()
  $('#message').text('You have successfully signed out!')
  store.user = null
  logOutDisplay()
}

const signOutFailure = function () {
  $('#message').show()
  $('#message').text('Sign Out Failed')
}

const createGameSuccess = function (data) {
  store.game = data.game
}

const createGameFailure = function () {
  $('#message').show()
  $('#message').text('Create Game Failed')
}

const getGamesSuccess = function (data) {
  $('#stats-message').show()
  $('#stats-message').text('You Have Played ' + data.games.length + ' game(s)!')
}

const getGamesFailure = function () {
  $('#message').show()
  $('#message').text('Error retrieving games')
}

const updateGameFailure = function () {
  $('#message').show()
  $('#message').text('Could not update games')
}

const logOutDisplay = function () {
  $('#new-game').hide()
  $('#gameBoard').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#message').hide()
  $('#get-games').hide()
  $('#stats-message').hide()
  $('#user-message').hide()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePasswordFailure,
  changePasswordSuccess,
  signOutSuccess,
  signOutFailure,
  getGamesSuccess,
  getGamesFailure,
  createGameSuccess,
  createGameFailure,
  updateGameFailure
}
