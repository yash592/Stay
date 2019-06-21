import React from "react";
import { Text, View } from "react-native";

// reusable header sticky component with title passed down as a prop

const Header = props => {
  const { textStyle, viewStyle } = styles;
  const { headerText } = props;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: "100%",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative",
    backgroundColor: "#D0FFC8"
  },
  textStyle: {
    fontSize: 20,
    fontFamily: "sans-serif-condensed",
    color: "black"
  }
};

// Make the component available to other parts of the app
export { Header };
