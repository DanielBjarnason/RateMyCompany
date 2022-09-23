import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="bg-slate-700 text-white flex">
      <div className="row m-10">
        <h3>Yderligere information</h3>
        <div className="col-1 mt-10 mb-5">
          <Link to="/bagundersogelsen">Bag undersøgelsen</Link>
        </div>
        <div className="col-1">
          <Link to="/kontakt">Kontakt os</Link>
        </div>
        <div className="col-1 my-5">
          <Link to="/dataetik">Dataetik</Link>
        </div>
        <div className="col-1">
          <Link to="/kvalitetssikring"> Kvalitetssikring</Link>
        </div>
      </div>

      <div className="row ml-20 mt-10">
        <h3>Sociale medier</h3>
        <div className="col-1 mt-10">
          <Link to="">LinkedIn</Link>
        </div>
        <div className="col-1 my-5">
          <Link to="">Instagram</Link>
        </div>
      </div>
      <small className="ml-72 mt-72 ">
        © 2022 RateMyCompany. Alle rettigheder forbeholdes.
      </small>
    </div>
  );
}

export default Footer;
