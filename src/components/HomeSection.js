import React from 'react';
import './HomeSection.css';
import SearchBar from './SearchBar';
import { useEffect, useState } from 'react';
import Axios from 'axios';

function HomeSection() {
  const [listOfFirma, setListOfFirma] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/getFirma').then((response) => {
      setListOfFirma(response.data);
    });
  }, []);

  return (
    <div className="text-center text-white home-section">
      <h1 className="pt-20 text-7xl">RateMyCompany</h1>
      <h2 className="my-5 text-4xl">Arbejdsmiljø - I fokus</h2>
      <SearchBar placeholder="Søg efter virksomhed" data={listOfFirma} />
    </div>
  );
}

export default HomeSection;
