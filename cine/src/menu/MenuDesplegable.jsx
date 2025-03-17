import { useState } from "react";
import Localizador from "./localizador";
import "./MenuDesplegable.css"; // Importa el archivo CSS

function MenuDesplegable() {
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el menú está abierto
    const [selectedOption, setSelectedOption] = useState(""); // Estado para guardar la opción seleccionada

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option, event) => {
        event.preventDefault(); // Evita que la página se recargue
        setSelectedOption(option); // Guarda la opción seleccionada
        setIsOpen(false); // Cierra el menú después de seleccionar una opción
    };

    return (
        <div className="menu-container">
            {/* Contenedor que agrupa el icono y el texto seleccionado */}
            <div className="juntos">
                {/* Botón que activa el menú */}
                <div onClick={toggleMenu} className="localizador">
                    <Localizador />
                </div>

                {/* Texto seleccionado */}
                <div className="selected-option">
                    {selectedOption && <span>{selectedOption}</span>}
                </div>
            </div>

            {/* Menú desplegable con tarjetas */}
            {isOpen && (
                <div className="dropdown-menu">
                    <div className="card">
                        <img src="ruta/a/imagen1.jpg" alt="Imagen 1" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">Inicio</h3>
                            <p className="card-description">Descripción de la tarjeta de inicio.</p>
                            <a href="/" onClick={(e) => handleOptionClick("Inicio", e)} className="card-link">Ver más</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="ruta/a/imagen2.jpg" alt="Imagen 2" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">Productos</h3>
                            <p className="card-description">Descripción de la tarjeta de productos.</p>
                            <a href="/productos" onClick={(e) => handleOptionClick("Productos", e)} className="card-link">Ver más</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="ruta/a/imagen3.jpg" alt="Imagen 3" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">Ofertas</h3>
                            <p className="card-description">Descripción de la tarjeta de ofertas.</p>
                            <a href="/ofertas" onClick={(e) => handleOptionClick("Ofertas", e)} className="card-link">Ver más</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="ruta/a/imagen4.jpg" alt="Imagen 4" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">Locales</h3>
                            <p className="card-description">Descripción de la tarjeta de locales.</p>
                            <a href="/locales" onClick={(e) => handleOptionClick("Locales", e)} className="card-link">Ver más</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="ruta/a/imagen5.jpg" alt="Imagen 5" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">Contáctanos</h3>
                            <p className="card-description">Descripción de la tarjeta de contacto.</p>
                            <a href="/contacto" onClick={(e) => handleOptionClick("Contáctanos", e)} className="card-link">Ver más</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MenuDesplegable;