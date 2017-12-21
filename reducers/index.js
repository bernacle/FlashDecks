import { ADD_DECK } from '../actions'

const initialState = []

const decks = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DECK:
      return state.concat(action.deck)

    default:
      return state
  }
}

export default decks
