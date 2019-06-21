import React, { Component } from "react";
import { View, Text, Image } from "react-native";

const Loading = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Image
      source={{ uri: "https://i.imgur.com/u6kVKHP.gif" }}
      style={{ width: 100, height: 100 }}
    />
  </View>
);

export { Loading };
