import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

export default function App() {

  const [number, onChangeNumber] = React.useState('');

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Your course goal!' style={styles.textInput}/>
        <Button title='Add Goal'/>
      </View>
      <View style={styles.textContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: 50,
    margin: 20
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
    marginBottom: 50,
    borderBottomWidth: 1,
    borderBlockColor: 'black'
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    width: '70%',
    marginLeft: 8,
    padding: 8,
    borderColor: 'grey'
  },
  textContainer: {
    flex: 3
  }
});
