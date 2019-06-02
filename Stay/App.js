/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import { END_POINT } from "./config";

const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: END_POINT }),
  cache: new InMemoryCache()
});

const reservationListings = gql`
  query {
    reservations {
      name
      hotelName
      arrivalDate
    }
  }
`;

export default class App extends Component {
  render() {
    console.log("ENDPOINT", END_POINT, this.props);
    return (
      <ApolloProvider client={apolloClient}>
        <Query query={reservationListings}>
          <View style={styles.container}>
            <Image
              source={{ uri: "https://i.imgur.com/seSekaX.png" }}
              style={{ width: 400, height: 400, resizeMode: "contain" }}
            />
            <Text style={styles.instructions}>
              Lookup and book reservations from your phone!
            </Text>
          </View>
        </Query>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
