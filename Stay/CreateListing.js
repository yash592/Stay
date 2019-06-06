import React, { Component } from "react";
import { View, Text, Input, Image } from "react-native";

class CreateListing extends Component {
  render() {
    return (
      <View>
        <Text>Create a Reservation</Text>
        <Input />
        <Input />
      </View>
    );
  }
}

export default CreateListing;
