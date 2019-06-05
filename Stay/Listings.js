import React, { Component, PureComponent } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList
} from "react-native";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { ReservationCard } from "./src/components/common/ReservationCard";

const query = gql`
  query {
    reservations {
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`;

class Listings extends PureComponent {
  renderReservations = ({ item }) => {
    console.log(this.props.data.loading);

    return (
      <ReservationCard
        name={item.name}
        hotelName={item.hotelName}
        arrivalDate={item.arrivalDate}
        departureDate={item.departureDate}
      />
    );
  };

  render() {
    console.log(this.props);
    if (this.props.data.loading) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 46 }}>Loading</Text>
        </View>
      );
    }

    return (
      <View>
        <FlatList
          data={this.props.data.reservations}
          initialNumToRender={7}
          renderItem={this.renderReservations}
        />
      </View>
    );
  }
}

export default graphql(query)(Listings);
