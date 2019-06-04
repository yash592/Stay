import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const ReservationCard = props => {
  return (
    <TouchableOpacity style={styles.container}>
      {props.children}
      <View style={styles.nameBox}>
        <Text style={styles.text}>{props.name}</Text>
      </View>
      <View style={styles.arrivalDateBox}>
        <Image
          source={{ uri: "https://i.imgur.com/H3lTadk.png" }}
          style={{ width: 24, height: 24, padding: 10 }}
        />
        <Text numberOfLines={1} style={styles.text}>
          {props.arrivalDate}
        </Text>
      </View>
      <View style={styles.departureDateBox}>
        <Text numberOfLines={1} style={styles.text}>
          {props.departureDate}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    flex: 1,
    marginTop: 30,
    width: "98%",
    height: 100,
    shadowColor: "black",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 5,
    backgroundColor: "white"
  },
  imageBox: {
    width: 100
  },
  image: {
    width: "100%",
    height: 100
  },
  nameBox: {
    position: "absolute",
    left: "5%"
  },
  arrivalDateBox: {
    position: "absolute",

    bottom: "10%",
    left: "5%"
  },
  departureDateBox: {
    position: "absolute",
    bottom: "10%",
    right: "5%"
  },
  text: {
    fontSize: 20
  }
};

export { ReservationCard };
