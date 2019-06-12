import gql from "graphql-tag";

// query to return all existing reservations

export const query = gql`
  query {
    reservations(orderBy: createdAt_DESC) {
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`;

// mutation to add a new reservation to the backend

export const addReservationMutation = gql`
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
