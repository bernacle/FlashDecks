import { AsyncStorage } from 'react-native'
import * as DeckAPI from '../utils/api'

export const ADD_DECK = 'ADD_DECK'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'


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
