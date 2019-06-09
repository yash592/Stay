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

const query = gql`
  query {
    reservations(orderBy: createdAt_DESC) {
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`;

class Listings extends Component {
  renderReservations = ({ item }) => {
    // console.log(this.props.data.loading);

    return (
      <View
        style={{
          backgroundColor: "",
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
        <Header headerText="RESERVATIONS" />
        <FlatList
          data={reservations}
          initialNumToRender={3}
          renderItem={this.renderReservations}
        />
        <BottomNav />
      </View>
    );
  }
}

export default graphql(query)(Listings);
