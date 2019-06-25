# Stay

### Stay is a hotels reservations app built to show reservations as well as create a new reservations

### Tech Stack:

#### _React-Native, GraphQL, Apollo-Client, Jest, React-Native-Router-Flux_

![AppDemo](https://i.imgur.com/900X8fS.png)

### Home Screen

The home screen is built with two simple reusable components or tiles for two different screens.
_**React-Native-Router-Flux**_ has a very simple and a powerful API to navigate between screens via the _**Actions**_ function.
To add more options to the home screen just use the reusable tiles and pass it the suitable props.

![AppDemo](https://i.imgur.com/523fkp4.png)

### Reservations screen

The reservations screen uses the GraphQL HOC to wrap the whole component with the query to retrieve all reservations.
The query passes on props loading which if is true, renders a loading reusable component or renders the list of reservations.
I used a simple flatlist to render data and passed it the initialNumToRender prop for better performance as the data can get very large.
The BottomNav, Header, and the ReservationCard all are simple ES6 stateless components which accept props and render data making it very reusable throughout the entire application.

### Create Reservation Screen

The Create Listings screen is a stateless component with reusable form inputs so more of them can be added later if needed.
I chose to use local state in order to pick up the box values and passed it on to the onReserve function as variables to the mutation component.
The button is wrapped with the createReservation mutation query which is stored in a separate queries file to make the structure more readable.
Upon submitting, pass the refetchQueries prop to the mutation so it can load the data from getAllReservations. If the reservation is successful it displays a message.
The Actions API allows me to go to the renderReservations screen again with the newly created reservation.
UpdateCache was also used to concat the new data with existing cache data, but it seemed to stop working(Seems like this is a known issue with ApolloClient)

### Reusable components

Each screen shares two reusable components, Header and BottomNav.
BottomNav maps a JSON to render different tiles on it with images, text and onPress functions.
Header component can just accept a prop with which it can display what screen you are on.

### Tests

Used the Jest framework to capture snapshots of components and GraphQL queries.

### PropTypes

Used the native prop-types package by React to check if components receive the correct types of props.

### Styles

Used the standard styles object to style the components

### Folder structure

Used a very self explanatory structure where screens have their own directory and common components have their own.
The queries and mutations have their separate directories.
Images are stored in the src/components/assets folder.
