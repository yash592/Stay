import React, { Component } from "react";
import { View, Text, TextInput, Image, Button } from "react-native";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";
import { FormInput } from "../../common/FormInput";
import { Scene, Router, Actions } from "react-native-router-flux";
import { Header } from "../../common/Header";
import { BottomNav } from "../../common/BottomNav";
import {
  getAllReservations,
  addReservationMutation
} from "../../../queries/queries.js";

class CreateListing extends Component {
  constructor(props) {
    super(props);
    // initialize the state inside the constructor
    this.state = {
      name: "",
      hotelName: "",
      arrivalDate: "",
      departureDate: ""
    };
    this.onReserve = this.onReserve.bind(this);
    this.updateCache = this.updateCache.bind(this);
  }

  // updateCache function to update the cached data from the query and concat it with the new data

  //  // I haven't passed the update cache function to the mutation as a prop as it was failing to concat new data with the cached data. The mutation works though. UpdateCache worked earlier but fails now somehow

  updateCache = (cache, { data: { createReservation } }) => {
    const { reservations } = cache.readQuery({
      query: getAllReservations
    });

    cache.writeQuery({
      query: getAllReservations,
      data: {
        reservations: reservations.concat(createReservation)
      }
    });
  };

  // onReserve function called from ln 124
  // renders a button and calls onPress to make a reservation

  onReserve = () => (
    // I haven't passed the update cache function here as it was failing to concat new data with the cached data. The mutation works though
    <Mutation
      mutation={addReservationMutation}
      refetchQueries={[{ query: getAllReservations }]}
    >
      {(createReservation, { data, loading, error }) => {
        console.log(data, loading, error);
        if (data) {
          return <Text style={{ fontSize: 23 }}>Booking sucessful!</Text>;
        }
        return (
          <Button
            title="Book"
            color="#3DDB93"
            style={{ width: "100%" }}
            onPress={() => {
              createReservation({
                variables: {
                  fullName: this.state.name,
                  hotel: this.state.hotelName,
                  arrival: this.state.arrivalDate,
                  departure: this.state.departureDate
                }
              }).then(() => {
                this.setState({
                  name: "",
                  hotelName: "",
                  arrivalDate: "",
                  departureDate: ""
                });
                // Call on Actions from react-native-router-flux to go to a different screen once mutation is complete
                Actions.listings();
              });
            }}
          />
        );
      }}
    </Mutation>
  );

  render() {
    console.log(this.state);
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <Header headerText={"New Reservation"} />
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <FormInput
            placeholder="First Name"
            placeholderTextColor="black"
            onChangeText={name => this.setState({ name })}
            value={this.state.name}
          />
          <FormInput
            placeholder="Hotel Name"
            placeholderTextColor="black"
            onChangeText={hotelName => this.setState({ hotelName })}
            value={this.state.hotelName}
          />
          <FormInput
            placeholder="Arrival date"
            placeholderTextColor="black"
            keyboardType="numeric"
            onChangeText={arrivalDate => this.setState({ arrivalDate })}
            value={this.state.arrivalDate}
          />
          <FormInput
            placeholder="Departure date"
            placeholderTextColor="black"
            keyboardType="numeric"
            onChangeText={departureDate => this.setState({ departureDate })}
            value={this.state.departureDate}
          />
          {this.onReserve()}
        </View>
        <BottomNav />
      </View>
    );
  }
}

export default CreateListing;
