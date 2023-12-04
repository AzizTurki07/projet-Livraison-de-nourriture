import React, { useState } from 'react';
import '../styles/Nom.css';
function Nom() {
  const [prenom, setPreNom] = useState('aziz');

  const handleChange = (event) => {
    setPreNom(event.target.value);
  };
  const [nom, setNom] = useState('Turki');

  const handleChange1 = (event) => {
    setNom(event.target.value);
  };
  return (
    <div class="nom">
      <h1>Nom</h1>
      <p>Il s'agit du nom que vous souhaitez que les autres utilisateurs utilisent pour vous désigner.</p>
      <label for="Fname" >Prénom</label><br/>
      <input type="text" id="Fname" class="form-control" value={prenom} onChange={handleChange} /><br/>
      <label for="name" >nom de famille</label><br/>
      <input type="text" id="name" class="form-control" value={nom} onChange={handleChange1} /><br/>
      <button type="button" class="btn btn-dark">Mettre a jour</button>

    </div>
  );
}
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Nom() {
//   const [nom, setNom] = useState('');

//   // Récupérer le nom de la base de données
//   useEffect(() => {
//     axios.get('http://localhost:5000/api/nom')
//       .then(response => {
//         setNom(response.data.nom);
//       })
//       .catch(error => {
//         console.error('Erreur de récupération des données', error);
//       });
//   }, []);

//   const handleChange = (event) => {
//     setNom(event.target.value);
//   };

//   const handleClick = () => {
//     axios.post('http://localhost:5000/api/nom', { nom: nom })
//       .then(response => {
//         console.log('Données mises à jour avec succès');
//       })
//       .catch(error => {
//         console.error('Erreur de mise à jour des données', error);
//       });
//   };

//   return (
//     <div>
//       <h1>Nom</h1>
//       <p>Il s'agit du nom que vous souhaitez que les autres utilisateurs utilisent pour vous désigner.</p>
//       <input type="text" id="name" value={nom} onChange={handleChange} />
//       <button className='mtj' onClick={handleClick}>Mettre à jour le nom</button>
//     </div>
//   );
// }

// export default Nom;

export default Nom;
