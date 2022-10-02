import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

function FirmaProfil() {
  const { id } = useParams();
  const [firmaProfil, setFirmaProfil] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3001/getFirma/${id}`).then((response) => {
      setFirmaProfil(response.data);
    });
  }, [id]);

  return (
    <div className="flex flex-row justify-center mt-36">
      <div className="border-4 border-yellow-500 border-solid">
        <h1 className="m-5 text-6xl font-bold">{firmaProfil.navn}</h1>
        <h3 className="m-5 text-6xl font-bold">
          Beliggenhed: {firmaProfil.beliggenhed}
        </h3>
        <h3 className="m-5 text-6xl font-bold">
          Antal ansatte: {firmaProfil.antalAnsatte}
        </h3>
        <h3 className="m-5 text-6xl font-bold">
          Branche: {firmaProfil.branche}
        </h3>
        <h3 className="m-5 text-6xl font-bold">
          Omsætning: {firmaProfil.omsætning}
        </h3>
        <button className="m-5 border-4 border-green-500 border-solid rounded-full bg-lime-200">
          Tag undersøgelsen
        </button>
      </div>
      <div className="border-4 border-yellow-500 border-solid ml-80">
        <h3 className="m-5 text-6xl font-bold">
          Arbejdsopgaver, løn og uddannelse
        </h3>
        <p></p>
        <h3 className="m-5 text-6xl font-bold">Psykisk arbejdsmiljø</h3>
        <p></p>
        <h3 className="m-5 text-6xl font-bold">Fysisk vilkår for arbejdet</h3>
        <p></p>
      </div>
    </div>
  );
}

export default FirmaProfil;
