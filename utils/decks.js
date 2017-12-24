import { AsyncStorage } from 'react-native'

export const DECK_STORAGE_KEY = 'Flashcards:deck'

export function formatDeckResults (results) {
  return results === null
    ? setDeckObject()
    : setDeckObject()
}

function setDeckObject(){
  AsyncStorage.clear()
  const decks = new Array()
  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks))

  return decks
}
