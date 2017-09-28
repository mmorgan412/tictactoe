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
  $('#user-message').text('X\'s turn!')
  console.log('data user is ', data.user)
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
  console.log('store.user is ', store.user)
}

const signOutFailure = function (error) {
  console.error(error)
  $('#message').text('Sign Out Failed')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePasswordFailure,
  changePasswordSuccess,
  signOutSuccess,
  signOutFailure
}
