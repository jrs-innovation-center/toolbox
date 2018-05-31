/*
input: ['3-C', '4-H', '10-S']

output: ['Three of Clubs', 'Four of Hearts', 'Ten of Spades']

Create modifier function that takes a codified card value
and returns the resulting saying: 6H = Six of Hearts

HINT: create two conditionals one that converts numbers to
their respective words, and ['C','H', 'S', 'D'] to
(Clubs, Hearts, Spades, and Diamonds)
*/
const map = require('../tools/map')
const compose = require('../tools/compose')
const join = require('../callbacks/join')
const split = require('../callbacks/split')

const numToWord = function([num, suit]) {
  // what about Jack, King, Queen, Ace
  if (num === 'J') {
    num = 11
  }
  if (num === 'Q') {
    num = 12
  }
  if (num === 'K') {
    num = 13
  }
  if (num === 'A') {
    num = 14
  }
  const words = [
    'Zero',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
    'Jack',
    'Queen',
    'King',
    'Ace'
  ]

  return [words[Number(num)], suit]
}

function codeToSuit([word, suit]) {
  const suits = {
    C: 'Clubs',
    S: 'Spades',
    H: 'Hearts',
    D: 'Diamonds'
  }
  return [word, suits[suit]]
}

const convertCards = compose(join(' of '), codeToSuit, numToWord, split('-'))

console.log('cards', map(convertCards, ['A-H', '4-D', '10-S', 'J-S']))
