import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import Signup from './pages/Signup';
import Login from './pages/Login';
import SingleReview from './pages/SingleReview';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Nav from './components/Nav'
import Pagenotfound from './pages/404page';
import Reviews2 from './pages/Reviews2';
// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
        <Nav />
         
            <Routes>
            <Route path="*" element={<Pagenotfound />} />
              <Route 
                path="/" 
                element={<Home />} 
              />
               <Route 
                path="/reviews" 
                element={<Reviews />} 
              />
                <Route 
                path="/reviews/:reviewId" 
                element={<SingleReview />} 
              />
           
                <Route 
                path="/about" 
                element={<About />} 
              />
                <Route 
                path="/contact" 
                element={<Contact />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route 
                path="/services" 
                element={<Services />} 
              />
            </Routes>
          
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
