'use client';

import React from 'react';
import Landing from './pages/landing';
import Box from './components/Box';
import Work from './pages/Work';
import Footer from './pages/Footer';

export default function Home() {
  return (
    <>
    <Landing />
    <Box/>
    <Work/>
    <Footer/>
    </>
  );
}
