import { Text, View, StyleSheet, Alert, useWindowDimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import Title from '../components/Title'
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import { AntDesign } from '@expo/vector-icons';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOverHandler}) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [ currentGuess, setCurrentGuess ] = useState(initialGuess);
  const { width, height } = useWindowDimensions();

  let content = (
    <>
      <Text>Higher or lower?</Text>
      <View>
        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>  
      </View>
    </>
  )
  useEffect(() => {
    if(currentGuess === userNumber) {
      onGameOverHandler();
    }
  },[currentGuess, userNumber, onGameOverHandler]);

  function nextGuessHandler(direction){ // lower, greater
    console.log(userNumber);
    if (
      (direction === 'lower' && userNumber < currentGuess) 
    || (direction === 'greater' && userNumber > currentGuess)
    ){
    }else {
      Alert.alert("Don't lie!", "Wrong Choose", [
        {text: "Sorry!", style: 'cancel'}
      ])
      return;
    }
    if(direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
       <AntDesign name="rightcircle" size={24} color="black" />
        <Title>Opponents Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
      <View>
      {content}
    </View>
    <View><Text>LOG ROUNDS</Text></View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    padding: 40
  }
})