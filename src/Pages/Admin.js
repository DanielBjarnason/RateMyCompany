import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function Admin() {
  const [listOfFirma, setListOfFirma] = useState([]);
  const [navn, setNavn] = useState('');
  const [beliggenhed, setBeliggenhed] = useState('');
  const [antalAnsatte, setAntalAnsatte] = useState(0);
  const [branche, setBranche] = useState('');
  const [omsætning, setomsætning] = useState('');

  useEffect(() => {
    Axios.get('http://localhost:3001/getFirma').then((response) => {
      setListOfFirma(response.data);
    });
  }, []);

  /* const opdaterFirma = (id) => {
    const newNavn = prompt('Opdater navn: ');
    const newBeliggenhed = prompt('Opdater beliggenhed: ');
    const newAntalAnsatte = prompt('Opdater antal ansatte: ');
    const newBranche = prompt('Opdater branche: ');
    const newOmsætning = prompt('Opdater omsætning: ');

    Axios.put('http://localhost:3001/updateFirma', {
      newNavn,
      newBeliggenhed,
      newAntalAnsatte,
      newBranche,
      newOmsætning,
      id,
    });
  }; */

  const sletFirma = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
      setListOfFirma(
        listOfFirma.filter((firmas) => {
          return firmas._id != id;
        })
      );
    });
  };

  const createFirma = () => {
    Axios.post('http://localhost:3001/createFirma', {
      navn,
      beliggenhed,
      antalAnsatte,
      branche,
      omsætning,
    }).then((response) => {
      setListOfFirma([
        ...listOfFirma,
        {
          _id: response.data._id,
          navn,
          beliggenhed,
          antalAnsatte,
          branche,
          omsætning,
        },
      ]);
    });
  };

  return (
    <div className="h-screen">
      <div className="grid w-full pt-20 bg-emerald-400 justify-items-center">
        <input
          className="flex w-48 h-12 m-5 text-lg align-middle border-2 border-black border-solid rounded justify-items-center columns-1"
          type="text"
          placeholder="Navn..."
          onChange={(event) => {
            setNavn(event.target.value);
          }}
        />
        <input
          className="flex w-48 h-12 m-5 text-lg align-middle border-2 border-black border-solid rounded justify-items-center columns-1"
          type="text"
          placeholder="Beliggenhed..."
          onChange={(event) => {
            setBeliggenhed(event.target.value);
          }}
        />
        <input
          className="flex w-48 h-12 m-5 text-lg align-middle border-2 border-black border-solid rounded justify-items-center columns-1"
          type="number"
          placeholder="Antal ansatte..."
          onChange={(event) => {
            setAntalAnsatte(event.target.value);
          }}
        />
        <input
          className="flex w-48 h-12 m-5 text-lg align-middle border-2 border-black border-solid rounded justify-items-center columns-1"
          type="text"
          placeholder="Branche..."
          onChange={(event) => {
            setBranche(event.target.value);
          }}
        />
        <input
          className="flex w-48 h-12 m-5 text-lg align-middle border-2 border-black border-solid rounded justify-items-center columns-1"
          type="text"
          placeholder="Omsætning..."
          onChange={(event) => {
            setomsætning(event.target.value);
          }}
        />
        <button
          className="w-48 h-12 m-10 text-white border-2 border-solid rounded bg-emerald-800 border-lime-500"
          onClick={createFirma}
        >
          Opret Firma
        </button>
      </div>

      <div className="grid bg-emerald-200 justify-items-center">
        {listOfFirma.map((firmas) => {
          return (
            <div className="flex mt-10 text-white row bg-emerald-700">
              <div className="">
                <h1 className="mb-4 text-6xl font-bold">Navn: {firmas.navn}</h1>
                <h1 className="mb-4 text-6xl font-bold">
                  Beliggenhed: {firmas.beliggenhed}
                </h1>
                <h1 className="mb-4 text-6xl font-bold">
                  Antal ansatte: {firmas.antalAnsatte}
                </h1>
                <h1 className="mb-4 text-6xl font-bold">
                  Branche: {firmas.branche}
                </h1>
                <h1 className="mb-4 text-6xl font-bold">
                  Omsætning: {firmas.omsætning}
                </h1>
              </div>
              {/* <button
                onClick={() => {
                  opdaterFirma(firmas._id);
                }}
                className="w-20 mx-2 bg-emerald-700"
              > 
                Opdater
              </button> */}
              <button
                onClick={() => {
                  sletFirma(firmas._id);
                }}
                className="w-20 bg-emerald-700"
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Admin;
