export const ADD_DECK = 'ADD_DECK'
export const TESTE = 'TESTE'

export const addDeck = deck =>({
    type: ADD_DECK,
    deck,
})


export const teste = deck =>({
    type: TESTE,
    deck,
})
