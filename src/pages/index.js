import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./style.css";

export default () => {
  const [status, setStatus ] = useState('Chargement...');
  const [ouvrages, setOuvrages ] = useState(null);

  useEffect(() => {
    if (status !== "Chargement...") return;
    axios("/api/get-ouvrages").then(result => {
      if (result.status !== 200) {
        console.error("Erreur au chargement des ouvrages");
        console.error(result);
        return;
      }
      setOuvrages(result.data.ouvrages);
      setStatus("Chargé");
    });
  }, [status]);

  return (
    <>
    <h1>Liste des ouvrages</h1>
    {ouvrages && ouvrages.map((ouvrage, index) =>(
      <div key={ index }>
        <div className="ouvrage">
          <h2>{ ouvrage.title } &middot; </h2>
          <p>{ ouvrage.nom } { ouvrage.prenom }</p>
        </div>
      </div>
    ))}
    </>
  );
}