import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { white, gray, red } from '../utils/colors'
import { receiveDeck } from '../actions'
import { DeckCard } from './DeckCard'
import SubmitButton from './SubmitButton'

class DeckDetail extends Component {

  state = {
    deck: {}
  }

  componentWillMount(){
    const { deck } = this.props.navigation.state.params
    this.props.dispatch(receiveDeck(deck))
  }

  render() {
    const { deck, navigation } = this.props
    return(
      <View style={styles.container}>
          <View>
            <Text style={{fontSize: 20, textAlign: 'center'}}>
              {deck.title}
            </Text>
            <Text style={{fontSize: 16, color: gray, textAlign: 'center'}}>
              {deck.questions.length} cards
            </Text>
          </View>
          <View>
            <SubmitButton onPress={() => navigation.navigate('AddCard', {deck: deck})} title="ADD CARD"></SubmitButton>
            {deck.questions.length > 0 &&
              <SubmitButton onPress={() => navigation.navigate('Quiz', {deck: deck})} title='TEST YOUR MIGHT'></SubmitButton>
            }
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  iosSubmitBtn: {
    width: 300,
    backgroundColor: red,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
  },
  androidSubmitBtn: {
    width: 300,
    backgroundColor: red,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  }
})

function mapStateToProps(state){
  return {
    deck: state.deck
  }
}


export default connect(mapStateToProps)(DeckDetail)
