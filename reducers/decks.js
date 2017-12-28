import { ADD_DECK, RECEIVE_DECKS, UPDATE_DECKS } from '../actions'

const initialState = []

const decks = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DECK:
      return state.concat(action.deck)

    case RECEIVE_DECKS:
      return action.decks

    case UPDATE_DECKS:
      return state.map(deck => {
        if(deck.id === action.deck.id){
          return { ...deck, ...action.deck}
        }
        return deck
      })

    default:
      return state
  }
}

export default decks
