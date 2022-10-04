import React, { useState } from "react";
import { StyleSheet, View, Dimensions} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Header from "../components/Header";
import { TextInput, Button } from "react-native-paper";

const data = [
  { label: "Note 1", value: "1" },
  { label: "Note 2", value: "2" },
  { label: "Note 3", value: "5" },
  { label: "Note 4", value: "4" },
  { label: "Note 5", value: "3" },
];
const window = Dimensions.get("window");
const displayNotes = () => {
  const [value, setValue] = useState(null);
  const [text, setText] = useState(null);
  const AddTask = () => {
    setText([...text, value]);
  };
  return (
    <>
      <Header titleText="Notes displayed" />
      <View style={styles.container}>
        <Dropdown
          style={styles.dropdown}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={data}
          search
          labelField="label"
          valueField="value"
          placeholder="Select Note"
          searchPlaceholder="Search..."
          value={value}
          onChange={(item) => {
            setValue(item.value);
          }}
        />
        <View>
          <TextInput
            label="User Name"
            style={styles.input}
            mode="outline"
            value={text}
            onChangeText={(text) => setText(text)}
            outlined
          />
          <Button icon="plus" onPress={() => AddTask()}>
            Add This
          </Button>
        </View>

      </View>
    </>
  );
};

export default displayNotes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "silver",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
  },
  selectedTextStyle: {
    fontSize: 16,
    fontStyle: "italic",
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    fontStyle: "italic",
  },
  input: {
    backgroundColor: "beige",
    fontSize: 20,
  },
  logo: {
    width: 50,
    height: 50,
    alignItems: "center",
  },
  OrangeBox: {
    width: window.width * 0.4,
    height: window.height * 0.15,
    backgroundColor: "#FF6600",
    elevation: 1.5,
    borderRadius: window.width * 0.03,
    overflow: "hidden",
  },
  text: {
    fontWeight: 600,
    fontSize: 13,
  },
});
