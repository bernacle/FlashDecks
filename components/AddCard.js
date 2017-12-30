import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { white, gray, red } from '../utils/colors'
import { receiveDeck, updateDecks, updateQuestions } from '../actions'
import { DeckCard } from './DeckCard'
import { storeDecks, storeCards } from '../utils/api'
import SubmitButton from './SubmitButton'

class AddCard extends Component {

  state = {
    question: '',
    answer: ''
  }

  submit = () => {
    const { question, answer } = this.state
    const { deck } = this.props.navigation.state.params
    const { decks } = this.props

    let card = {}
    card.question = question
    card.answer = answer
    deck.questions.push(card)
    this.props.dispatch(receiveDeck(deck))
    this.props.dispatch(updateDecks(deck))
    this.props.dispatch(updateQuestions(deck.questions))
    storeCards(decks)
    this.setState({
      question: '',
      answer: ''
    })
  }

  render() {

    return(
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View>
          <TextInput
            style={styles.textInput}
            onChangeText={(question) => this.setState({question})}
            value={this.state.question}
            placeholder="Question"
          />
          <TextInput
            style={styles.textInput}
            onChangeText={(answer) => this.setState({answer})}
            value={this.state.answer}
            placeholder="Answer"
          />
        </View>
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
    marginTop: 2,
    borderRadius: 4,
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
  },
})

function mapStateToProps(state){
  return {
    decks: state.decks
  }
}


export default connect(mapStateToProps)(AddCard)
