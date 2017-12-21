import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import store from './store/store'
import AddDecks from './components/AddDecks'
import DeckList from './components/DeckList'
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'
import { white, purple } from './utils/colors'

const MainNavigator = StackNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      title: 'Home'
    }
  },
  AddDecks: {
    screen: AddDecks,
    navigationOptions: {
      title: 'AddDecks'
    }
  }
})


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
