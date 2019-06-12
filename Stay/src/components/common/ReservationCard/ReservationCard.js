import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

// ReservationCard reusable pure component which can be used across the app

const ReservationCard = props => {
  // console.log(props);
  return (
    <TouchableOpacity style={styles.container}>
      {props.children}
      <View style={styles.nameBox}>
        <Text style={styles.nameText}>{props.name}</Text>
      </View>
      <View style={styles.arrivalDateBox}>
        <Image
          source={require("../../assets/images/arrival.png")}
          style={{ width: 28, height: 28, opacity: 0.5 }}
        />
        <Text numberOfLines={1} style={styles.text}>
          {props.arrivalDate}
        </Text>
      </View>
      <View style={styles.departureDateBox}>
        <Image
          source={require("../../assets/images/departures.png")}
          style={{ width: 28, height: 28, opacity: 0.5 }}
        />
        <Text numberOfLines={1} style={styles.text}>
          {props.departureDate}
        </Text>
      </View>
      <View style={styles.locationBox}>
        <Image
          source={require("../../assets/images/location-pin.png")}
          style={{ width: 28, height: 28, opacity: 0.5 }}
        />
        <Text numberOfLines={2} style={styles.text}>
          {props.hotelName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    flex: 1,
    marginTop: 30,
    width: "95%",
    height: 150,
    borderRadius: 10,
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
    left: "5%",
    top: "10%"
  },
  arrivalDateBox: {
    position: "absolute",
    top: "10%",
    right: "5%"
  },
  departureDateBox: {
    position: "absolute",
    bottom: "10%",
    right: "5%"
  },
  locationBox: {
    position: "absolute",
    width: "50%",

    flexWrap: "wrap",
    bottom: "10%",
    left: "5%"
  },
  nameText: {
    fontSize: 30,
    color: "black",
    fontWeight: "normal",
    fontFamily: "sans-serif-condensed"
  },
  text: {
    fontSize: 18,
    fontFamily: "sans-serif-condensed"
  }
};

export { ReservationCard };
