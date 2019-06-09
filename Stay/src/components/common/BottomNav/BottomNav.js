import React, { Compponent } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";

const BottomNav = () => (
  <View
    style={{
      height: 60,
      flexDirection: "row",
      justifyContent: "space-evenly",
      backgroundColor: "#D0FFC8",
      borderTopWidth: 0.1,
      borderColor: "black",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: -2 },
      shadowOpacity: 2,
      elevation: 2
    }}
  >
    <TouchableOpacity
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <Image
        source={require("../../assets/images/booking.png")}
        style={{ width: 24, height: 24 }}
      />
      <Text style={{ color: "black", fontFamily: "sans-serif-condensed" }}>
        Book
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <Image
        source={require("../../assets/images/list.png")}
        style={{ width: 24, height: 24 }}
      />
      <Text style={{ color: "black", fontFamily: "sans-serif-condensed" }}>
        Reservations
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Image
        source={require("../../assets/images/magnifying-glass.png")}
        style={{ width: 24, height: 24 }}
      />
      <Text style={{ color: "black", fontFamily: "sans-serif-condensed" }}>
        Search
      </Text>
    </TouchableOpacity>
  </View>
);

export { BottomNav };
