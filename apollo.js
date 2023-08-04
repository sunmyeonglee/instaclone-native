import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);

const client = new ApolloClient({
  uri: "https://bfd3-124-5-112-73.ngrok-free.app/graphql",
  cache: new InMemoryCache(),
});

export default client;
