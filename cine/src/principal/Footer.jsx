import React from "react";
import "./Footer.css"; // Importa el archivo CSS

function Footer() {
  return (
    
       <footer className="footer">
      <div className="footer-section">
        <h3>CARTELERA</h3>
        <span>Preventas</span>
        <span>Muestras y festivales</span>
        <span>Google Play</span>
        <span>Apple Store</span>
      </div>

      <div className="footer-section">
        <h3>¿QUIÉNES SOMOS?</h3>
        <span>Próximas Aperturas</span>
      </div>

      <div className="footer-section">
        <h3>LEGALES</h3>
        <span>Términos y condiciones</span>
        <span>Aviso de privacidad</span>
      </div>

      <div className="footer-contact">
        <h3>CONTACTO</h3>
        <span>Correo electrónico</span>
        <input type="text" placeholder="Ingresa tu correo" />
        <span>Mensaje</span>
        <input type="text" placeholder="Escribe tu mensaje" />
      </div>
    </footer>

    
   
  );
}

export default Footer;