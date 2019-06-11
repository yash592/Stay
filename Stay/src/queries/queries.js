import gql from "graphql-tag";

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
