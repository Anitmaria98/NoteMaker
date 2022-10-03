import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import viewNotes from "../screens/viewNotes";
import addNotes from "../screens/addNotes"

const StackNavigator = createStackNavigator(
  {
    ViewNotes: {
      screen: viewNotes,
    },
    addNotes: {
      screen: addNotes,
    },
  },
);

export default createAppContainer(StackNavigator);
