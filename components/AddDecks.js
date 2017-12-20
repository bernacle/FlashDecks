import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { receiveDecks, addDeck } from '../actions'
import { connect } from 'react-redux'


class AddDecks extends Component {

  componentWillMount(){
    this.props.dispatch(addDeck("Deck"))
  }

  render() {
    const { decks } = this.props
    return(
      <Text>{decks}</Text>
    )
  }
}


function mapStateToProps(decks){
  return {
    decks
  }
}

export default connect (mapStateToProps)(AddDecks)
