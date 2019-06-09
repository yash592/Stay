import React, { Component } from "react";
import { View, Text, TextInput, Image, Button } from "react-native";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";
import { FormInput } from "./src/components/common/FormInput";

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
                departre: "06/12/2019"
              }
            }).then((res, rej) => {
              console.log(rej);
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
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#4C508E"
        }}
      >
        <FormInput placeholder="First Name" placeholderTextColor="black" />

        <FormInput placeholder="Hotel Name" placeholderTextColor="black" />
        <FormInput placeholder="Arrival date" placeholderTextColor="black" />
        <FormInput placeholder="Departure date" placeholderTextColor="black" />
        {this.onReserve()}
      </View>
    );
  }
}

export default CreateListing;
