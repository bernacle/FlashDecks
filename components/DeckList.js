import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
import { red, white } from '../utils/colors'
import SubmitButton from './SubmitButton'


class DeckList extends Component {



  render() {
    const { decks, navigation } = this.props

    if (decks.title === undefined){
      return (
        <View style={styles.container}>
          <Text>No decks to show, please add some</Text>
          <SubmitButton onPress={() => navigation.navigate('AddDecks')} title="ADD DECK"></SubmitButton>
        </View>
      )
    } else {
      return(
        <View style={styles.container}>
          <Text>{decks}</Text>
        </View>
      )
    }
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

export default connect(mapStateToProps)(DeckList)
