import { combineReducers } from 'redux'
import decks from './decks'
import deck from './deck'


const rootReducer = combineReducers({
    decks,
    deck
});

export default rootReducer
