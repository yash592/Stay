import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";

// FormInput reusable component taking in placeholder, onChangeText and keyboardType as a prop

const FormInput = props => (
  <View style={styles.containerStyle}>
    <TextInput
      style={styles.textInput}
      placeholder={props.placeholder}
      placeholderTextColor={props.placeholderTextColor}
      onChangeText={props.onChangeText}
      value={props.value}
      keyboardType={props.keyboardType}
    />
  </View>
);

const styles = {
  textInput: {
    width: "100%",
    backgroundColor: "white",
    height: 40,
    borderColor: "#d1d7db",
    borderWidth: 1,
    padding: 10
  },
  containerStyle: {
    width: "92%",
    height: 50,
    margin: 5
  }
};
export { FormInput };
