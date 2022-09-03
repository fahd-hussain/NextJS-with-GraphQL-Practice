import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

type MyAppProps = {
  Component: any;
  pageProps: any;
};

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
