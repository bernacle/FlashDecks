import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, AsyncStorage } from 'react-native'
import { receiveDecks, addDeck } from '../actions'
import { connect } from 'react-redux'
import { red, white} from '../utils/colors'
import SubmitButton from './SubmitButton'
import { addCardToDeck, fetchDeckResults } from '../utils/api'
import { DECK_STORAGE_KEY } from '../utils/decks'

class AddDecks extends Component {

  state = {
    title: ''
  }

  submit = () => {

    const {title} = this.state

    let deck = {}
    deck.id = new Date().getTime().toString() + Math.floor(Math.random()*1000000);
    deck.title = title
    deck.questions = []
    this.props.dispatch(addDeck(deck))
    addCardToDeck(deck, this.props.decks)

  }

  view = () => {
    console.log(this.props.decks)
  }

  render() {
    const { decks } = this.props
    return(
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={(title) => this.setState({title})}
          value={this.state.title}
          placeholder="Deck Title"
        />
        <SubmitButton onPress={this.submit} title='SUBMIT'></SubmitButton>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    backgroundColor: 'white',
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
    decks: state.decks
  }
}
export default connect (mapStateToProps)(AddDecks)
