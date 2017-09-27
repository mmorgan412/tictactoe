'use strict'

const addSelector = function (event) {
  $(event.target).css('background-image', displayImg)
}

const displayImg = function () {
  if ($('#gameBoard').attr('data-player') === 'x') {
    $('#gameBoard').attr('data-player', 'o')
    return 'url(lib/images/letter_x.png)'
  } else {
    $('#gameBoard').attr('data-player', 'x')
    return 'url(lib/images/o.png)'
  }
}

module.exports = {
  addSelector
}
