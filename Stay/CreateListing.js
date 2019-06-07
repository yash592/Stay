import React, { Component } from "react";
import { View, Text, TextInput, Image, Button } from "react-native";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";

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
    <Mutation mutation={addReservationMutation}>
      {(createReservation, { data }) => (
        <Button
          title="Reserve your!"
          onPress={() => {
            createReservation({
              variables: {
                fullName: "Joe Lundiani",
                hotel: "LemonTree",
                arrival: "06/05/2019",
                departure: "06/12/2019"
              }
            });
          }}
        />
      )}
    </Mutation>
  );

  render() {
    // console.log(this.props);
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 10
        }}
      >
        <Text
          style={{
            fontSize: 30,
            color: "black",
            fontFamily: "sans-serif-condensed"
          }}
        >
          Create a Reservation
        </Text>
        <TextInput
          style={{
            width: "90%",
            height: 40,
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 10,
            padding: 10
          }}
          placeholder="First Name"
          placeholderTextColor="black"
        />
        {this.onReserve()}
      </View>
    );
  }
}

export default CreateListing;
