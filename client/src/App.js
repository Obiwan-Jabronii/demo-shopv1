import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import { StoreProvider } from './utils/GlobalState';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import OrderHistory from './pages/OrderHistory';
import Success from './pages/Success';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

 function App() {
   return (
     <ApolloProvider client={client}>
       <Router>
        <div>
          <StoreProvider>
            <Nav />
            <Switch>
              <Route exact path='/' component={Home } />
              <Route exact path='/login' component={Login } />
              <Route exact path="/signup" component={Signup} />
              <Route exact path='/orderHistory' component={OrderHistory } />
              <Route exact path='/products/:id' component={Detail } />
              <Route exact path="/success" component={Success} />
            </Switch>
          </StoreProvider>
         </div>
       </Router>
     </ApolloProvider>
   );
 }


export default App;
