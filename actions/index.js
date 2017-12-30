import { AsyncStorage } from 'react-native'
import * as DeckAPI from '../utils/api'

export const ADD_DECK = 'ADD_DECK'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const RECEIVE_DECK = 'RECEIVE_DECK'
export const ADD_QUESTIONS = 'ADD_QUESTIONS'
export const UPDATE_DECKS = 'UPDATE_DECKS'
export const UPDATE_QUESTIONS = 'UPDATE_QUESTIONS'


export const addDeck = deck =>({
    type: ADD_DECK,
    deck,
})

export const insertDeck = (deck) => dispatch => (
   DeckAPI
      .addCardToDeck((deck) => dispatch(addDeck(deck)))
)

export const receiveDecks = decks => ({
  type: RECEIVE_DECKS,
  decks
})

export const fetchDecks = (decks) => dispatch => (
   DeckAPI
      .fetchDeckResults((decks) => dispatch(receiveDecks(decks)))
)

export const receiveDeck = deck => ({
  type: RECEIVE_DECK,
  deck
})

export const addQuestionsToDeck = deck => ({
  type: ADD_QUESTIONS,
  deck
})

export const updateDecks = deck => ({
  type: UPDATE_DECKS,
  deck
})

export const updateQuestions= questions => ({
  type: UPDATE_QUESTIONS,
  questions
})
