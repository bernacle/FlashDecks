import { ADD_DECK, RECEIVE_DECKS } from '../actions'

const initialState = []

const decks = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DECK:
      return state.concat(action.deck)

    case RECEIVE_DECKS:
      return action.decks

    default:
      return state
  }
}

export default decks
