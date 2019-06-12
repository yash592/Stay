import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { ReservationCard } from "../../common/ReservationCard";
import { Actions } from "react-native-router-flux";

// Home component to show the list of available screens

const Home = () => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.tile}>
      <ImageBackground
        source={{
          uri:
            "https://images.pexels.com/photos/573552/pexels-photo-573552.jpeg"
        }}
        style={{ width: "100%" }}
        imageStyle={{
          width: "100%",
          height: "100%",
          position: "relative",
          opacity: 0.2
        }}
      >
        <View style={styles.textBox}>
          <Text style={styles.text}>RESERVATIONS</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => Actions.main()} style={styles.tile}>
      <ImageBackground
        source={{
          uri:
            "https://images.pexels.com/photos/573552/pexels-photo-573552.jpeg"
        }}
        style={{ width: "100%" }}
        imageStyle={{
          width: "100%",
          height: "100%",
          position: "relative",
          opacity: 0.2
        }}
      >
        <View style={styles.textBox}>
          <Text style={styles.text}>MAKE A RESERVATION</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  </View>
);

const styles = {
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  tile: {
    margin: 15,
    width: "95%",
    height: "23.5%",
    shadowColor: "black",
    shadowOffset: { width: 20, height: 20 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  textBox: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 15,
    justifyContent: "flex-start"
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    shadowColor: "white",
    textShadowOffset: { width: 0.1, height: 0.1 },
    shadowOpacity: 0.5,
    textShadowRadius: 1,
    fontFamily: "sans-serif-condensed"
  }
};

export { Home };
