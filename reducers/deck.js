import { RECEIVE_DECK, ADD_QUESTIONS } from '../actions'

const initialState = {
  id: '',
  title: '',
  questions: []
}

const deck = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_DECK:
      return action.deck

    case ADD_QUESTIONS:
      return state.questions.concat(action.deck)

    default:
      return state
  }
}

export default deck
