import React, { useState } from 'react'; // Importa useState
import Nav1 from './menu/nav1';
import Slider from './anuncios/Slider';
import Principal from './principal/principal';

function App() {
  // Estado para almacenar el cine seleccionado
  const [selectedCine, setSelectedCine] = useState("");

  return (
    <div className='elpapi'>
      {/* Pasa selectedCine y setSelectedCine a Nav1 */}
      <Nav1 selectedCine={selectedCine} setSelectedCine={setSelectedCine} />

      {/* Slider no necesita cambios */}
      <Slider />

      {/* Pasa selectedCine y setSelectedCine a Principal */}
      <Principal selectedCine={selectedCine} setSelectedCine={setSelectedCine} />
    </div>
  );
}

export default App;