import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { gray } from '../utils/colors'

export default function DeckCard ({ deck }) {
  return (
    <View style={styles.metric} key={deck.id}>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>
          {deck.title}
        </Text>
        <Text style={{fontSize: 16, color: gray}}>
          {deck.questions.length} cards
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  deck: {
    flexDirection: 'row',
    marginTop: 12,
  }
})
