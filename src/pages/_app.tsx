import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout/layout/Layout';
import { ApolloProvider } from '@apollo/client';
import pokemonClient from '@/lib/api/pokemonClient';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ApolloProvider client={pokemonClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Layout>
  );
}
