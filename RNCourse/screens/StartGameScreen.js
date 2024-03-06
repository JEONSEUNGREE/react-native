import React, { useState } from 'react'
import { TextInput, View, StyleSheet, Alert, Dimensions, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import Colors from '../constants/Colors'
export default function StartGameScreen({onPickNumber}) {
  const [enteredNmber, setEnteredNumber] = useState('');


  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }


  function resetInputHandler(){
    setEnteredNumber('');
  }

  function confirmInputHandler(){
    const choseNumber = parseInt(enteredNmber);

    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99){
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
      return;
    }
    onPickNumber(choseNumber);
  }

  // 훅으로 디멘션 API사용
  const { width, height } = useWindowDimensions();
  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior='position'>
        <View style={[styles.inputContainer, {marginTop: marginTopDistance}]}>
            <TextInput 
              style={styles.numberInput} 
              maxLength={2} 
              keyboardType='number-pad'
              onChangeText={numberInputHandler}
              value={enteredNmber}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
              </View>
            </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  inputContainer: {
    alignItems: 'center',
    padding: 16,
    // marginTop: deviceHeight < 400 ? 30 : 100,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 10,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset:  { width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: 'center',
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold'
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  }
})