import React, { useState, useEffect } from "react";

export default function HookUseEffect() {
  const [characters, setCharacters] = useState([]); //i useState ginete init me empty array , 
  const [isLoading, setIsLoading] = useState(true); //to characters einai empty array to setCharacters einai i function pou tha allaksei ta data . to isLoading eina iboolean k to setIsLoading einai i methodos pou allazei autoTechcareerbooster
  useEffect(() => { // exei 2 argument, 1 function k ena array sto telos []. to empty array xreiazete gia to component update mount unmount. an 
    //den exei  array sto telos tote trexei sunexeia, trexei to effect oli tin wra. 3on mporei na pernei values eite props eite const k tha trexei to effect otan allazoun auta px [name]
    fetch("http://localhost:3001/characters")
      .then((res) => res.json())
      .then((characters) => {
        setCharacters(characters);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>
        Hooks 02:<small className="text-muted"> useEffect()</small>
      </h2>
      <br />
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          characters.map(({ id, name, culture, isFemale }) => (
            <div className="card m-b" key={id}>
              <div className="card-header">{name}</div>
              <div className="card-body">
                <p className="card-text">
                  {culture} / {isFemale ? "female" : "male"}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
