import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";

const FormInput = props => (
  <View style={styles.containerStyle}>
    <Text>{props.text}</Text>
    <TextInput
      style={styles.textInput}
      placeholder={props.placeholder}
      placeholderTextColor={props.placeholderTextColor}
    />
  </View>
);

const styles = {
  textInput: {
    width: "100%",
    backgroundColor: "white",
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10
  },
  containerStyle: {
    width: "42%",
    height: 50,
    margin: 5
  }
};
export { FormInput };
