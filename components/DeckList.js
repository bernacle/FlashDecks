import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Platform, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
import { red, white } from '../utils/colors'
import SubmitButton from './SubmitButton'
import DeckCard from './DeckCard'
import { fetchDeckResults } from '../utils/api'


class DeckList extends Component {

  componentDidMount(){
    fetchDeckResults()
      .then((decks) => this.props.dispatch(receiveDecks(decks)))
  }

  _renderItem = ({item}) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate(
        'DeckDetail',
        {deck: item}
      )}>
              <DeckCard deck={item}/>
      </TouchableOpacity>
    </View>
  )

  keyExtractor = (item, index) => item.id


  render() {
    const { decks, navigation } = this.props

      if (decks.length > 0){
        return (
          <View style={styles.container}>
            <FlatList
              data={this.props.decks}
              renderItem={this._renderItem}
              keyExtractor={this.keyExtractor}
            />
            <SubmitButton onPress={() => navigation.navigate('AddDecks')} title="ADD DECK"></SubmitButton>
          </View>
        )
      } else {
        return (
          <View style={styles.container}>
            <Text>No decks to show, please add some</Text>
            <SubmitButton onPress={() => navigation.navigate('AddDecks')} title="ADD DECK"></SubmitButton>
          </View>
        )
      }
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
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
  },
  item: {
    backgroundColor: white,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3,
    }
  }
})


function mapStateToProps(state){
  return {
    decks: state.decks
  }
}

export default connect(mapStateToProps)(DeckList)
