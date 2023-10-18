import { View, Button, TextInput, Modal, StyleSheet, Image } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  };

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/goals.jpg')} />
        <TextInput 
          style={styles.inputField} 
          placeholder='Your course goal' 
          onChangeText={goalInputHandler} 
          value={enteredGoalText} />
        <View style={styles.buttonsContainer}>
          <Button title='Add Goal' onPress={addGoalHandler} color='#5b0acc' />
          <Button title='Cancel' onPress={props.onCancel} color='#5b0acc'  />
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput; 

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#0f0f0f',
    width: '90%',
    marginRight: 8,
    padding: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 8,
    paddingHorizontal: 8,
    width: '80%',
  },
  image: {
    width: 350,
    height: 350,
  },
});
