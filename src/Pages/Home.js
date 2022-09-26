import React from 'react';
import HomeSection from '../components/HomeSection';
import Visionen from '../components/Visionen';
import Footer from '../components/Footer';
import PsykiskArbejdsmiljø from '../components/PsykiskArbejdsmiljø';

function Home() {
  return (
    <>
      <HomeSection />
      <Visionen />
      <PsykiskArbejdsmiljø />
      <Footer />
    </>
  );
}

export default Home;
