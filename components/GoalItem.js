import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem(props) {
  return (
      <View style={styles.goalsView}>
        <Pressable onPress={props.onDeleteGoal.bind(this, props.uuid)} style={({pressed}) => pressed && styles.pressedItem}>
          <Text style={styles.goalsText}>{props.text}</Text>
        </Pressable>
      </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalsView: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5E0ACC',
  },
  goalsText: {
    padding: 8,
    color: 'whitesmoke'
  },
  pressedItem: {
    backgroundColor: '#210644',
  },
});
