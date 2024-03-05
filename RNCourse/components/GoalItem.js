import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'

function GoalItem(props) {
  return (
      <View style={styles.goalItem}>
        <Pressable 
          android_ripple={{color: '#2106444'}} 
          onPress={props.onDeleteItem.bind(this, props.id)}
          style={(PressData) => PressData.pressed && styles.pressedItem}
          >
          <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
      </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: 'purple',
    },
    pressedItem: {
      opacity: 0.5
    },
    goalText: {
        color: 'white',
        padding: 8
    }
});