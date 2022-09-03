// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
  cache: new InMemoryCache(),
});

export default client;

// APOLLO_KEY=service:NextJS-with-GraphQL:_g_OeE0ZnGipZm9q1M6DiA \
//   rover subgraph publish NextJS-with-GraphQL@current \
//   --name products --schema ./products-schema.graphql \
//   --routing-url http://products.prod.svc.cluster.local:4001/graphql