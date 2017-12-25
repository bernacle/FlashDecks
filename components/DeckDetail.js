import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { white } from '../utils/colors'

class DeckDetail extends Component {

  render() {
    const { deck } = this.props.navigation.state.params

    return(
      <View style={styles.container}>
        <Text>{deck.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 15,
  }
})

function mapStateToProps({ navigation }) {
  const { deckId } = navigation.state.params

  return {
    deckId
  }
}


export default connect()(DeckDetail)
