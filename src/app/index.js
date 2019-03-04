import React from 'react';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import Usuario from '../usuario'

// url do servidor
const httpLink = createHttpLink({
    uri: 'http://localhost:4000'
})

// Configurações do apollo
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

class App extends React.Component {
    render () {
        return (
            <ApolloProvider client={client}>
                <Usuario />
            </ApolloProvider>
        )
    }
}

export default App