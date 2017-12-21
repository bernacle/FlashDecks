import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { receiveDecks, addDeck } from '../actions'
import { connect } from 'react-redux'
import { red, white} from '../utils/colors'

class AddDecks extends Component {



  render() {
    const { decks } = this.props
    return(
      <View style={styles.container}><Text>Hi</Text></View>
    )
  }
}


function mapStateToProps(decks){
  return {
    decks
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

export default connect (mapStateToProps)(AddDecks)
