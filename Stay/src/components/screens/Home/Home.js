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
import { Dimensions } from "react-native";

// Home component to show the list of available screens

const Home = () => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{ uri: "https://i.imgur.com/JARMkib.png" }}
          style={{ width: width * 0.7, height: height * 0.2 }}
        />
      </View>
      <TouchableOpacity style={styles.tile} onPress={() => Actions.listings()}>
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

      <TouchableOpacity
        onPress={() => Actions.createlisting()}
        style={styles.tile}
      >
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
};

const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  },
  tile: {
    margin: 15,
    width: "95%",
    height: "10%",
    shadowColor: "black",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: "white",
    borderRadius: 2,
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
