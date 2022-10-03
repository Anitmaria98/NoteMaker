import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, FAB } from "react-native-paper";
import addNotes from "./addNotes";
import Header from "../components/Header";
const viewNotes = ({ navigation }) => {
  return (
    <>
    <Header titleText='Simple Note Maker'/>
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.text}>Get Started by creating Notes</Text>
      </View>
      <FAB
        style={styles.fab}
        small
        icon="plus"
        label="Add Notes"
        onPress={() => navigation.navigate("addNotes",{ addNotes })}
      />
    </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  title: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    color:'#3f5723'
  },
  fab: {
    color: "#219653",
    margin: 20,
    bottom: 10,
  },
});
export default viewNotes;
