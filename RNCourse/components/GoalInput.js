import React, { useState } from 'react'
import { StyleSheet, Button, TextInput, View, Modal, Image } from 'react-native'

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText);
  };

  function addGoalAndClear(){
    props.addGoalHandler(enteredGoalText);
    setEnteredGoalText('');
    props.endAddGoalHandler();
  }

  function endAddGoalAndClear(){
    props.endAddGoalHandler();
    setEnteredGoalText('');
  }


  return (
    <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
            <Image style={styles.image} 
                source={require('../assets/images/goal.png')}
            />
            <TextInput placeholder='Your course goal!' 
                style={styles.textInput} 
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title='Add Goal' onPress={addGoalAndClear} color={"#b180f0"}/>
                </View>
                <View style={styles.button}>
                    <Button title='Cancel' onPress={endAddGoalAndClear} color={"#f31182"}/>
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#311b6b',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
        marginBottom: 50,
      },
      textInput: {
        borderColor: 'black',
        borderWidth: 1,
        width: '90%',
        padding: 8,
        borderColor: '#e4d0ff',
        borderRadius: 10,
        backgroundColor: '#e4d0ff',
        color: '#120438'
      },
      buttonContainer: {
        marginTop: 10,
        flexDirection: 'row'
      },
      button: {
        width: 100,
        marginHorizontal: 8
      },
      image: {
        width: 100,
        height: 100,
        margin: 20
      }
});