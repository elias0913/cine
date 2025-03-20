import React from "react";
import "./Targeta.css";

function Targeta({ imagen, titulo, descripcion, tiempo }) {
  return (
    <div className="targeta">
      <img className="ima1" src={imagen} alt={titulo} />
      <div className="contenido">
        <div className="titulo1">{titulo}</div>
        <div className="info">
          <span className="descripcion">{descripcion}</span>
          <div className="divisor"></div>
          <span className="clasificacion-tiempo">{tiempo}</span>
        </div>
      </div>
    </div>
  );
}

export default Targeta;
