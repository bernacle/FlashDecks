import { AsyncStorage } from 'react-native'
import { DECK_STORAGE_KEY, formatDeckResults } from './decks'


export function fetchDeckResults () {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(formatDeckResults)
}

export function addCardToDeck(deck, decks) {

  decks.push(deck)
  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks))

}
