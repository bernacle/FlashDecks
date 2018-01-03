import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Platform, FlatList, Button } from 'react-native'
import { connect } from 'react-redux'
import { blue, white, red } from '../utils/colors'
import CorrectButton from './CorrectButton'
import IncorrectButton from './IncorrectButton'
import SubmitButton from './SubmitButton'
import { receiveDeck } from '../actions'
import DeckCard from './DeckCard'
import { fetchDeckResults } from '../utils/api'
import { setLocalNotification, clearLocalNotifications } from '../utils/notifications'


class Quiz extends Component {

  state = {
    showAnswer: false,
    showScore: false,
    score: 0,
    index: 0
  }


  componentDidMount(){
    const { deck } = this.props.navigation.state.params
    this.props.dispatch(receiveDeck(deck))
    // Here i implemented the Local notification just like in the video class, but
    // they didnt work, can you help me??
    // clearLocalNotifications()
    //   .then(setLocalNotification)
  }

  showAnswer = () => {
    this.setState({showAnswer: true})
  }

  showQuestion = () => {
    this.setState({showAnswer: false})
  }


  quiz = (option) => {
    const { index, score } = this.state
    const { deck } = this.props


    if (option === 'correct'){
      this.setState({score: score + 1})
    }

    if(index === (deck.questions.length - 1)){
      this.setState({showScore: true})

    } else {
      this.setState({showAnswer: false, index: this.state.index + 1})
    }

  }

  goBack = () => {
    const { goBack }= this.props.navigation

    goBack()
  }


  restartQuiz = () => {
    this.setState({
      showAnswer: false,
      showScore: false,
      score: 0,
      index: 0  
    })

  }

  render() {
    const { deck } = this.props
    const { showAnswer, index, showScore, score } = this.state

    return (
      <View style={styles.container}>
          {showScore
            ? <View style={styles.center}>
                <Text style={{fontSize: 40}}>Score: {score}/{deck.questions.length}</Text>
                <SubmitButton onPress={this.restartQuiz} title='Restart Quiz'></SubmitButton>
                <SubmitButton onPress={this.goBack} title='Back to Deck'></SubmitButton>
              </View>

            : <View style={styles.container}>
                <View style={styles.corner}>
                  <Text style={{fontSize: 18}}>{index + 1}/{deck.questions.length}</Text>
                </View>
                <View style={styles.center}>
                  {showAnswer
                    ? <View>
                        <Text style={styles.questionText}>{deck.questions[index].answer}</Text>
                        <Button color={red} onPress={this.showQuestion} title="Show Question"></Button>
                        <CorrectButton onPress={() => {this.quiz("correct")}}></CorrectButton>
                        <IncorrectButton onPress={() => {this.quiz("incorrect")}}></IncorrectButton>
                      </View>

                    : <View>
                        <Text style={styles.questionText}>{deck.questions[index].question}</Text>
                        <Button color={red} onPress={this.showAnswer} title="Show Answer"></Button>
                      </View>
                  }
                </View>
              </View>
          }
      </View>
    )

  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  corner: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    margin: 10
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
  questionText: {
    fontSize: 22,
    textAlign: 'center',
  },
  buttonText: {
    color: red
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
    deck: state.deck
  }
}

export default connect(mapStateToProps)(Quiz)
