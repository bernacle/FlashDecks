import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import store from './store/store'
import AddDecks from './components/AddDecks'
import DeckList from './components/DeckList'
import DeckDetail from './components/DeckDetail'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'
import { white } from './utils/colors'
import { setLocalNotification } from './utils/notifications'

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
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      title: 'DeckDetail'
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'AddCard'
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz'
    }
  }
})


export default class App extends React.Component {
  componentDidMount(){
    setLocalNotification()
  }
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
