import React, { Component } from "react";
import { View, Text, TextInput, Image, Button } from "react-native";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";
import { FormInput } from "../../common/FormInput";
import { Scene, Router, Actions } from "react-native-router-flux";
import { Header } from "../../common/Header";
import { BottomNav } from "../../common/BottomNav";
import { query } from "../../../queries/queries.js";

const addReservationMutation = gql`
  mutation createReservation(
    $fullName: String!
    $hotel: String!
    $arrival: String!
    $departure: String!
  ) {
    createReservation(
      data: {
        name: $fullName
        hotelName: $hotel
        departureDate: $departure
        arrivalDate: $arrival
      }
    ) {
      name
      hotelName
    }
  }
`;

class CreateListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      hotelName: "",
      arrivalDate: "",
      departureDate: ""
    };
    // this.onReserve = this.onReserve.bind(this);
  }

  onReserve = () => (
    <Mutation
      mutation={addReservationMutation}
      refetchQueries={[{ query: query }]}
    >
      {(createReservation, { data }) => (
        <Button
          title="Book"
          color="#3DDB93"
          style={{ width: "100%" }}
          onPress={() => {
            createReservation({
              variables: {
                fullName: "Joe Lundiani",
                hotel: "LemonTree",
                arrival: "06/05/2019",
                departure: "06/12/2019"
              }
            }).then(res => {
              if (!res) {
                console.log("Not sucessful");
              }
              return (
                <View style={{ flex: 1 }}>
                  <Text>{res.data.createReservation.hotelName}</Text>
                </View>
              );
            });
          }}
        />
      )}
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
            keyboardType="number-pad"
            onChangeText={arrivalDate => this.setState({ arrivalDate })}
            value={this.state.arrivalDate}
          />
          <FormInput
            placeholder="Departure date"
            placeholderTextColor="black"
            keyboardType="number-pad"
            onChangeText={departureDate => this.setState({ departureDate })}
            value={this.state.departureDate}
          />
          {this.onReserve()}
        </View>
        <BottomNav onPress={() => Actions.listings()} />
      </View>
    );
  }
}

export default CreateListing;
