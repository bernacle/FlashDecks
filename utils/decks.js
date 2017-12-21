import { AsyncStorage } from 'react-native'

export const DECK_STORAGE_KEY = 'Flashcards:deck'

export function storeDecks (results, deck) {
  return results === null
    ? setDeckObject(deck)
    : addDeckToObject(deck)
}

function setDeckObject(deck){
  const decks = []
  decks.push(deck)
  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks))

  return deck
}

function addDeckToObject(deck){

   return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(deck))

}
