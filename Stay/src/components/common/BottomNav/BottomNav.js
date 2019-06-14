import React, { Compponent } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { Actions } from "react-native-router-flux";

// BottomNav reusable component

const BottomNav = props => {
  // define tabs with title, image and an onPress handler
  const tabs = [
    {
      title: "Book",
      tabImg: require("../../assets/images/booking.png"),
      action: () => Actions.createlisting()
    },
    {
      title: "Listings",
      tabImg: require("../../assets/images/list.png"),
      action: () => Actions.listings()
    },
    {
      title: "Search",
      tabImg: require("../../assets/images/magnifying-glass.png"),
      action: () => Actions.listings()
    }
  ];

  // renderTabs function to map tabs and return tiles

  renderTabs = () => {
    return tabs.map((tiles, index) => {
      console.log(tiles, index);
      return (
        <TouchableOpacity
          style={styles.tileStyle}
          onPress={tiles.action}
          key={index}
        >
          <Image source={tiles.tabImg} style={styles.imageStyle} />
          <Text style={styles.text}>{tiles.title}</Text>
        </TouchableOpacity>
      );
    });
  };

  return <View style={styles.container}>{this.renderTabs()}</View>;
};

const styles = {
  container: {
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
  },
  tileStyle: {
    justifyContent: "center",
    alignItems: "center"
  },
  imageStyle: {
    width: 24,
    height: 24
  },
  text: {
    color: "black",
    fontFamily: "sans-serif-condensed"
  }
};

export { BottomNav };
