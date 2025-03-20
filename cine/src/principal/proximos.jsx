import React from "react";
import Targeta from "./Targeta";
import "./Targeta.css";

function proximos() {
  return (
    <div className="contenedor-tarjetas">
      <Targeta
        imagen="/peliculas/peli1.png"
        titulo="Anora"
        descripcion="Mayores de 18 años"
        tiempo="139 minutos"
      />
      <Targeta
        imagen="/peliculas/peli2.png"
        titulo="Atentado en Madrid Esp"
        descripcion="Mayores de 15 años"
        tiempo="106 minutos"
      />
      <Targeta
        imagen="/peliculas/peli3.png"
        titulo="Blanca Nieves"
        descripcion="A-Todo Publico"
        tiempo="110 minutos"
      />
      <Targeta
        imagen="/peliculas/peli4.png"
        titulo="Capitan América: Un Nuevo Mundo"
        descripcion="AA"
        tiempo="120 minutos"
      />
      <Targeta
        imagen="/peliculas/peli5.png"
        titulo="El Baño del Diablo"
        descripcion="TBC"
        tiempo="120 minutos"
      />
      <Targeta
        imagen="/peliculas/peli6.png"
        titulo="Flow"
        descripcion="A-Todo Público"
        tiempo="86 minutos"
      />
      <Targeta
        imagen="/peliculas/peli7.png"
        titulo="Mickey 17"
        descripcion="Mayores de 15 años"
        tiempo="137 minutos"
      />
    </div>
  );
}

export default proximos;