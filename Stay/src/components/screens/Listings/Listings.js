import React, { Component, PureComponent } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { ReservationCard } from "../../common/ReservationCard";
import { BottomNav } from "../../common/BottomNav";
import { Header } from "../../common/Header";
import { Scene, Router, Actions } from "react-native-router-flux";
import { query } from "../../../queries/queries.js";

// Listings component to display all reservations as the default screen

class Listings extends Component {
  // renderReservations function for the flatList
  // -- returns the ReservationCard component and passes it the props

  renderReservations = ({ item }) => {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <ReservationCard
          name={item.name}
          hotelName={item.hotelName}
          arrivalDate={item.arrivalDate}
          departureDate={item.departureDate}
        />
      </View>
    );
  };

  render() {
    const { loading, reservations } = this.props.data;
    // const { reservations } = this.props.data;

    // simple loading component to let the user know that the screen is loading

    if (loading) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 46 }}>Loading</Text>
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <Header headerText={"RESERVATIONS"} />
        <FlatList
          data={reservations}
          initialNumToRender={3}
          renderItem={this.renderReservations}
        />
        <BottomNav onPress={() => Actions.createlisting()} />
      </View>
    );
  }
}

export default graphql(query)(Listings);
