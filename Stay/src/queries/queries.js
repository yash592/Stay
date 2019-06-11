import gql from "graphql-tag";
//
// export const query = gql`
//    {
//     reservations {
//       name
//     }
//   }
// }`;

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
