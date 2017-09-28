'use strict'

const store = require('../store.js')
const events = require('./events.js')

const signUpSuccess = function (data) {
  console.log(data)
  $('#message').text('You have successfully signed up!')
  $('#sign-up').trigger('reset')
}

const signUpFailure = function (error) {
  if ($('#password') !== $('#password-confirmation')) {
    $('#message').text('passwords do not match!')
  } else $('#message').text('Sign up Failed')
  console.error(error)
}

const signInSuccess = function (data) {
  $('#message').text('You have successfully signed in!')
  store.user = data.user
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('#sign-in').trigger('reset')
  $('#new-game').show()
  $('#get-games').show()
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Sign in Failed')
}

const changePasswordSuccess = function () {
  $('#message').text('You have successfully changed your password!')
  $('#change-password').trigger('reset')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#message').text('Change Password Failed')
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
  // store.games = data.games
  $('#stats-message').text('You Have Played ' + data.games.length + ' games!')
}

const getGamesFailure = function (error) {
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
  createGameFailure
}
