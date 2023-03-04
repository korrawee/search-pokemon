import { ApolloClient, InMemoryCache } from '@apollo/client';

const pokemonClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URI,
  cache: new InMemoryCache(),
});

export default pokemonClient;
