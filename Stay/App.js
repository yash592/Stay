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
import Routes from "./Routes";

const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: END_POINT }),
  cache: new InMemoryCache()
});

export default class App extends Component {
  render() {
    // console.log("ENDPOINT", END_POINT, this.props);
    return (
      <ApolloProvider client={apolloClient}>
        <Routes />
      </ApolloProvider>
    );
  }
}
