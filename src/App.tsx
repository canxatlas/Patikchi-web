import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import theme from './theme';
import './styles/fonts.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Hero />
      <Collection />
      <About />
      <Contact />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
