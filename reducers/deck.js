import { RECEIVE_DECK } from '../actions'

const initialState = {
  id: '',
  title: '',
  questions: []
}

const deck = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_DECK:
      return action.deck

    default:
      return state
  }
}

export default deck
