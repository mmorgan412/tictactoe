'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$('#row1col1').on('click', function () {
  console.log('clicked 1st cell')
  $('#row1col1').css('background-image', 'url(lib/images/o.png)')
})
$('#row1col2').on('click', function () {
  $('#row1col2').css('background-image', 'url(lib/images/letter_x.png)')
  console.log('clicked 2nd cell')
})
$('#row1col3').on('click', function () {
  console.log('clicked 3rd cell')
})
$('#row2col1').on('click', function () {
  console.log('clicked 1st cell')
})
$('#row2col2').on('click', function () {
  console.log('clicked 2nd cell')
})
$('#row2col3').on('click', function () {
  console.log('clicked 3rd cell')
})
$('#row3col1').on('click', function () {
  console.log('clicked 1st cell')
})
$('#row3col2').on('click', function () {
  console.log('clicked 2nd cell')
})
$('#row3col3').on('click', function () {
  console.log('clicked 3rd cell')
})
