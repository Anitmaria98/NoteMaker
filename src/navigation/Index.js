import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import viewNotes from "../screens/viewNotes";
import addNotes from "../screens/addNotes";
import displayNotes from "../screens/displayNotes";

const StackNavigator = createStackNavigator({
  ViewNotes: {
    screen: viewNotes,
  },
  addNotes: {
    screen: addNotes,
  },
  displayNotes: {
    screen: displayNotes,
  },
});

export default createAppContainer(StackNavigator);
