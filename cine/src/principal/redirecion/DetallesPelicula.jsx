import React, { useState } from "react";
import "./DetallesPelicula.css";
import { useLocation } from "react-router-dom";
import TarjetaMenu from "../../menu/TarjetaMenu";

function DetallePelicula({ selectedCine, setSelectedCine }) { // Recibe las props
  const location = useLocation();
  const {
    imagen,
    titulo,
    descripcion,
    genero,
    reparto,
    director,
    fechaEstreno,
    tituloOriginal,
    restriccionesEdad,
    formatoExhibicion,
    informacion,
  } = location.state;

  const [showReserva, setShowReserva] = useState(false); // Estado para mostrar/ocultar las opciones de reserva
  const [showCines, setShowCines] = useState(false); // Estado para mostrar/ocultar las tarjetas de cines
  const [selectedVisualizaciones, setSelectedVisualizaciones] = useState([]); // Estado para opciones de visualización
  const [selectedFecha, setSelectedFecha] = useState(""); // Estado para fecha seleccionada

  const handleReservar = (event) => {
    event.preventDefault(); // Evita que la página se recargue
    setShowReserva(!showReserva); // Mostrar/ocultar las opciones de reserva
  };

  const handleConfirmarReserva = (event) => {
    event.preventDefault(); // Evita que la página se recargue
    alert("Reserva confirmada"); // Acción al confirmar la reserva
    setShowReserva(false); // Ocultar las opciones de reserva después de confirmar
  };

  const toggleVisualizacion = (opcion, event) => {
    event.preventDefault(); // Evita que la página se recargue
    if (selectedVisualizaciones.includes(opcion)) {
      setSelectedVisualizaciones(selectedVisualizaciones.filter((v) => v !== opcion));
    } else {
      setSelectedVisualizaciones([...selectedVisualizaciones, opcion]);
    }
  };

  const seleccionarFecha = (fecha, event) => {
    event.preventDefault(); // Evita que la página se recargue
    setSelectedFecha(fecha);
  };

  const handleOptionClick = (cine, event) => {
    event.preventDefault(); // Evita que la página se recargue
    setSelectedCine(cine); // Actualiza el cine seleccionado usando la prop setSelectedCine
    setShowCines(false); // Oculta las tarjetas de cines después de seleccionar
  };

  return (
    <div className="detalle-pelicula">
      {/* Imagen de la película */}
      <div className="imagen-container">
        <img src={imagen} alt={titulo} />
      </div>

      {/* Contenedor de información */}
      <div className="info-container">
        {/* Título de la película */}
        <div className="titulo">
          <h1>{titulo}</h1>
          <strong>{formatoExhibicion}</strong>
        </div>

        {/* Barra horizontal */}
        <div className="barra"></div>

        {/* Detalles de la película */}
        <div className="detalles">
          <p>{informacion}</p>
          <p>{descripcion}</p>
          <p><strong>Género:</strong> {genero}</p>
          <p><strong>Reparto:</strong> {reparto}</p>
          <p><strong>Director:</strong> {director}</p>
          <p><strong>Fecha de estreno:</strong> {fechaEstreno}</p>
          <p><strong>Título original:</strong> {tituloOriginal}</p>
          <p><strong>Restricciones de edad:</strong> {restriccionesEdad}</p>
          <p><strong>Formato de exhibición:</strong> {formatoExhibicion}</p>
        </div>

        {/* Botón de reserva */}
        <button className="reserva-btn" onClick={handleReservar}>
          {showReserva ? "Ocultar Opciones" : "Reserve Ahora"}
        </button>

        {/* Opciones de reserva */}
        {showReserva && (
          <div className="opciones-reserva">
            {/* Título de la reserva */}
            <h2>Reservar: {titulo}</h2>

            {/* Barra horizontal */}
            <div className="barra-reserva"></div>

            {/* Selección de cine */}
            <div className="reserva-section">
              <h3 onClick={(event) => { event.preventDefault(); setShowCines(!showCines); }} style={{ cursor: "pointer" }}>
                Seleccionar Cine {showCines ? "▲" : "▼"}
              </h3>
              {showCines && (
                <div className="tarjetas-cines">
                  <TarjetaMenu
                    titulo="Cinépolis Galerias Escalon VIP"
                    descripcion="Colonia Escalon Centro Comercial Galerias, Paseo General Escalon #3700, San Salvador"
                    opciones={["20", "DOB", "VIP", "SUBTITLE"]}
                    onSelect={handleOptionClick}
                  />
                  <TarjetaMenu
                    titulo="Cinépolis Multiplaza Panamericana"
                    descripcion="Centro Comercial Multiplaza, Carretera Panamericana, 3er nivel, La Libertad"
                    opciones={["JUNIOR", "2D", "DOB", "SUBTITLE"]}
                    onSelect={handleOptionClick}
                  />
                  <TarjetaMenu
                    titulo="Cinépolis Metrocentro Santa Ana"
                    descripcion="Metrocentro Santa Ana, Av. Independencia Sur, LOC 22, Santa Ana"
                    opciones={["20", "DOB", "SUBTITLE"]}
                    onSelect={handleOptionClick}
                  />
                  <TarjetaMenu
                    titulo="Cinépolis Galerias Escalon"
                    descripcion="Colonia Escalon Centro Comercial Galerias, Paseo General Escalon #3700, San Salvador"
                    opciones={["20", "DOB", "SUBTITLE"]}
                    onSelect={handleOptionClick}
                  />
                </div>
              )}
              {selectedCine && (
                <p className="cine-seleccionado">
                  Cine seleccionado: <strong>{selectedCine}</strong>
                </p>
              )}
            </div>

            {/* Opciones de visualización */}
            <div className="reserva-section">
              <h3>Opciones de Visualización</h3>
              <div className="modal-opciones">
                {["VIP", "2D", "SUBTITLE"].map((opcion) => (
                  <button
                    key={opcion}
                    className={`opcion-btn ${
                      selectedVisualizaciones.includes(opcion) ? "selected" : ""
                    }`}
                    onClick={(event) => toggleVisualizacion(opcion, event)}
                  >
                    {opcion}
                  </button>
                ))}
              </div>
            </div>

            {/* Selección de fecha */}
            <div className="reserva-section">
              <h3>Seleccionar Fecha</h3>
              <div className="modal-fechas">
                {[
                  { dia: "Dom", fecha: "24/03" },
                  { dia: "Mar", fecha: "25/03" },
                  { dia: "Mié", fecha: "26/03" },
                ].map((fecha) => (
                  <button
                    key={fecha.fecha}
                    className={`fecha-btn ${
                      selectedFecha === fecha.fecha ? "selected" : ""
                    }`}
                    onClick={(event) => seleccionarFecha(fecha.fecha, event)}
                  >
                    <span>{fecha.dia}</span>
                    <span>{fecha.fecha}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Botón de confirmar reserva */}
            <div className="reserva-buttons">
              <button onClick={handleConfirmarReserva}>Confirmar Reserva</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetallePelicula;