import { AsyncStorage } from 'react-native'
import { DECK_STORAGE_KEY, storeDecks } from './decks'


export const setDecks = (deck) =>
  AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      storeDecks(results, deck)
})

export function addCardToDeck({ card, title }) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title]: card,
  }))
}
