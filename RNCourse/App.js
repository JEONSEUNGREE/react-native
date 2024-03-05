import { StyleSheet, View, FlatList, Button } from 'react-native';
import React, { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar'

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(enteredGoalText){
    console.log(enteredGoalText)
    setCourseGoals((currentCourseGoals) => [...courseGoals, {text: enteredGoalText, id: Math.random().toString()}]);
  }; 

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((item) => item.id !== id);
    })
  }

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endAddGoalHandler(){
    setModalIsVisible(false);
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button 
        title='Add New Goal' 
        color="#a065ec" 
        onPress={startAddGoalHandler}
      />
      <GoalInput visible={modalIsVisible} addGoalHandler={addGoalHandler} endAddGoalHandler={endAddGoalHandler}/>
        <View style={styles.goalsContainer}>
        {/* ScrollView는 모든 목록을 불러와서 렌더링하기때문에 성능이슈 발생 
        사용범위는 제한된 목록뷰에 적용에 알맞음 */}
        <FlatList data={courseGoals} 
        renderItem={itemData => {
          return (
            <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler} />
          );
        }} alwaysBounceVertical={false} />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: 50,
    margin: 20
  },
  goalsContainer: {
    flex: 3
  }
});
