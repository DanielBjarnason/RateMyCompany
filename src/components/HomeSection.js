import React from 'react';
import './HomeSection.css';

function HomeSection() {
  return (
    <div className="home-section text-center text-white">
      <h1 className="text-7xl pt-32">RateMyCompany</h1>
      <h2 className="text-4xl my-5">Arbejdsmiljø - I fokus</h2>
      <input
        type="text"
        placeholder="   Søg på virksomhed"
        className="mt-32 h-12 w-96 rounded text-black cursor-pointer"
      />
    </div>
  );
}

export default HomeSection;
