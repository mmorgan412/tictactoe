'use strict'

const store = require('../store.js')
// const events = require('./events.js')

const signUpSuccess = function (data) {
  $('#message').text('You have successfully signed up!')
  $('#sign-up').trigger('reset')
}

const signUpFailure = function () {
  if ($('#password') !== $('#password-confirmation')) {
    $('#message').text('passwords do not match!')
  } else $('#message').text('Sign up Failed')
}

const signInSuccess = function (data) {
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
  $('#message').text('Sign in Failed')
}

const changePasswordSuccess = function () {
  $('#message').text('You have successfully changed your password!')
  $('#change-password').trigger('reset')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#message').text('Change Password Failed - Please Try Again!')
}

const signOutSuccess = function () {
  $('#message').text('You have successfully signed out!')
  store.user = null
  logOutDisplay()
}

const signOutFailure = function (error) {
  console.error(error)
  $('#message').text('Sign Out Failed')
}

const createGameSuccess = function (data) {
  store.game = data.game
  console.log('store.game is ', store.game)
}

const createGameFailure = function (error) {
  console.error(error)
}

const getGamesSuccess = function (data) {
  $('#stats-message').show()
  $('#stats-message').text('You Have Played ' + data.games.length + ' games!')
}

const getGamesFailure = function (error) {
  console.error(error)
}

const updateGameSuccess = function (data) {
  (console.log('YOU UPDATED THE GAME!!'))
}

const updateGameFailure = function (error) {
  console.error(error)
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
  updateGameSuccess,
  updateGameFailure
}
