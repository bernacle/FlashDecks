import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, AsyncStorage, KeyboardAvoidingView } from 'react-native'
import { receiveDecks, addDeck } from '../actions'
import { connect } from 'react-redux'
import { red, white} from '../utils/colors'
import SubmitButton from './SubmitButton'
import { storeDecks, fetchDeckResults } from '../utils/api'
import { DECK_STORAGE_KEY } from '../utils/decks'
import { setLocalNotification } from '../utils/notifications'

class AddDecks extends Component {

  state = {
    title: ''
  }

  submit = () => {

    const { title } = this.state
    const { decks } = this.props
    const { navigate }= this.props.navigation

    let deck = {}
    // UID
    deck.id = new Date().getTime().toString() + Math.floor(Math.random()*1000000);
    deck.title = title
    deck.questions = []
    this.props.dispatch(addDeck(deck))
    storeDecks(deck, decks)
    navigate('DeckDetail', {deck: deck})
  }

  render() {
    const { decks } = this.props
    return(
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={(title) => this.setState({title})}
          value={this.state.title}
          placeholder="Deck Title"
        />
        <SubmitButton onPress={this.submit} title='SUBMIT'></SubmitButton>
      </KeyboardAvoidingView>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  textInput: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    backgroundColor: 'white',
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3,
    }
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
