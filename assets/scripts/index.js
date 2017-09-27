'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./events')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
$(() => {
  $('#row1col1').on('click', events.addSelector)
  $('#row1col2').on('click', events.addSelector)
  $('#row1col3').on('click', events.addSelector)
  $('#row2col1').on('click', events.addSelector)
  $('#row2col2').on('click', events.addSelector)
  $('#row2col3').on('click', events.addSelector)
  $('#row3col1').on('click', events.addSelector)
  $('#row3col2').on('click', events.addSelector)
  $('#row3col3').on('click', events.addSelector)
})

// console.log('clicked 1st cell')
// $('#row1col1').css('background-image', 'url(lib/images/o.png)')
