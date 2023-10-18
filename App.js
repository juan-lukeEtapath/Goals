import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [visible, setVisible] = useState(false);

  function startAddGoalHandler() {
    setVisible(true);
  };

  function endAddGoalHandler() {
    setVisible(false);
  };

  function addGoalHandler(enteredGoalText) {
    setGoals((goalsArray) => [...goalsArray, {text: enteredGoalText, uuid: Math.random().toString() }]);
    endAddGoalHandler();
  };

  function deleteGoalHandler(uuid) {
    setGoals((goalsArray) => {
      return goalsArray.filter((goal) => goal.uuid !== uuid);
    });
  }


  return (
    <View style={styles.container}>
      <Button title="Add new goals" color='#5E0ACC' onPress={startAddGoalHandler} />
    {visible && <Text style={styles.heading}>Hello World!</Text> &&  <GoalInput onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>}
      <View style={styles.goalsContainer}>
        <FlatList data={goals} renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text} uuid={itemData.item.uuid} onDeleteGoal={deleteGoalHandler}/>;
        }}
        keyExtractor={(item, index) => { return item.uuid}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: '#fff',
  },
  goalsContainer: {
    flex: 3,
    padding: 4,
    justifyContent: 'space-evenly',
  },
  heading: {
    fontSize: 42,
    color: '#000000',
    marginBottom: 8
  },
});
