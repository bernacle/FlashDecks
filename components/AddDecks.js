import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import { receiveDecks, insertDeck } from '../actions'
import { connect } from 'react-redux'
import { red, white} from '../utils/colors'
import SubmitButton from './SubmitButton'

class AddDecks extends Component {

  state = {
    text: ''
  }

  submit = () => {

    const {title} = this.state

    let deck = {}
    deck.id = new Date().getTime().toString() + Math.floor(Math.random()*1000000);
    deck.title = title
    deck.questios = []
    this.props.dispatch(insertDeck(deck))
  }


  render() {
    const { decks } = this.props
    return(
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
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
    textAlign: 'center'
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

function mapStateToProps(decks){
  return {
    decks
  }
}
export default connect (mapStateToProps)(AddDecks)
