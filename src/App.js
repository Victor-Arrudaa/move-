import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Navbar />
        <Hero />
        <Features />
        <Stats />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
        <Download />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
