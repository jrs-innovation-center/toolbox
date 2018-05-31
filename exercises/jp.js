const compose = require('../tools/compose')
const map = require('../tools/map')

const modifyCards = function(code) {
  const [num, suit] = code.split('-')

  function numToWord(num) {
    if (num === '3') {
      return 'Three of'
    } else if (num === '4') {
      return 'Four of'
    } else if (num === '10') {
      return 'Ten of'
    } else if (num === '6') {
      return 'Six of'
    }
  }

  function codeToSuit(suit) {
    if (suit === 'C') {
      return 'Clubs'
    } else if (suit === 'H') {
      return 'Hearts'
    } else if (suit === 'S') {
      return 'Spades'
    } else if (suit === 'D') {
      return 'Diamonds'
    }
  }

  return numToWord(num) + ' ' + codeToSuit(suit)
}

console.log('results', map(modifyCards, ['3-C', '4-H', '10-S']))
