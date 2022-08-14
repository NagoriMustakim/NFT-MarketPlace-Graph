import '../styles/globals.css'
import Header from '../components/Header'
import { MoralisProvider } from 'react-moralis'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
const client = new ApolloClient({ //this will tell us code that where to perfome quvery
  cache: new InMemoryCache(),
  uri: "https://api.studio.thegraph.com/query/32667/nft-marketplace/v0.0.3"
})
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <MoralisProvider initializeOnMount={false}>
        <ApolloProvider client={client}>
          <Header></Header>
          <Component {...pageProps} />
        </ApolloProvider>
      </MoralisProvider>
    </div>
  )
}

export default MyApp
