'use strict'

const store = require('../store.js')

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
  $('#sign-up').show()
  $('#sign-in').show()
  $('#sign-out').hide()
  $('#change-password').hide()
}

const signOutFailure = function (error) {
  console.error(error)
  $('#message').text('Sign Out Failed')
}

const getGamesSuccess = function () {
  $('#message').text('You have successfully recieved games!')
}

const getGamesFailure = function (error) {
  console.error(error)
}

const createGameSuccess = function (data) {
  $('#message').text('You have successfully created a game!')
  store.game = data.game
  console.log('store game is ', store.game)
}

const createGameFailure = function (error) {
  console.error(error)
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
