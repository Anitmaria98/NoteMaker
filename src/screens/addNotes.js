import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, IconButton, TextInput, FAB } from "react-native-paper";
import Header from "../components/Header";
import displayNotes from "./displayNotes";

const addNotes = ({ navigation }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");
  const saveNote = () => {
    navigation.state.params.addNote({ noteTitle, noteValue });
    navigation.goBack();
  };
  // const NotesAdd =()=>{
  // setNoteDescription([...noteDescription, noteTitle]);
  //   setNoteTitle(null);
  // }
  return (
    <>
      <Header titleText="Add a new note" />
      <IconButton
        icon="close"
        size={20}
        color="white"
        onPress={() => navigation.goBack()}
        style={styles.iconButton}
      />
      <View style={styles.container}>
        <TextInput
          label="Add Note Title here"
          value={noteTitle}
          onChangeText={setNoteTitle}
          style={styles.Input}
          mode={"outlined"}
        />
        <TextInput
          label="Add Note Description here"
          value={noteDescription}
          onChangeText={setNoteDescription}
          multiline={true}
          mode={"flat"}
        />
        <TouchableOpacity >
          <FAB style={styles.add} small icon="plus"
          onPress={() => navigation.navigate("displayNotes",{ displayNotes })} />
        </TouchableOpacity>

        <View style={styles.title}>
          <Text style={styles.text}>You can add notes here</Text>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cf9bc4",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  title: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
  },
  iconButton: {
    backgroundColor: "#219653",
    right: 0,
    top: 5,
    margin: 10,
    position: "absolute",
  },
  Input: {
    marginBottom: 50,
  },
  add: {
    width: 50,
    height: 40,
    alignItems: "center",
  },
});
export default addNotes;
