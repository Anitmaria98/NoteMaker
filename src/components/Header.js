import React from "react";
import { StyleSheet, View } from "react-native";
import { Title, Appbar} from "react-native-paper";

const Header = ({titleText}) => {
  return (
    <Appbar.Header style={styles.header}>
    <View style={styles.container}>
      <Title style={styles.title}> {titleText}</Title>
    </View>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
   backgroundColor:'#b0a496'
  },
  title: {
    color: "red",
  },
});

export default Header;
