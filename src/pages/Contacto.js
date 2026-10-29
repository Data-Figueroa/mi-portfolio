import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contacto() {
  const form = useRef();
  const [mensajeEstado, setMensajeEstado] = useState('');

  const enviarEmail = (e) => {
    e.preventDefault();

    const SERVICE_ID = 'service_rsh0eqe';
    const TEMPLATE_ID = 'template_ejxwruq';
    const PUBLIC_KEY = 'cp45H3IchjgcGoBuc';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setMensajeEstado('¡Mensaje enviado con éxito!');
        form.current.reset();
      })
      .catch((error) => {
        console.error('Error:', error);
        setMensajeEstado('Hubo un error al enviar el mensaje.');
      });
  };

  return (
    <div className="pagina">
      <h2>Contacto y Ubicación</h2>

      <div className="contacto-contenedor" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h3>Enviame un mensaje</h3>
          <form ref={form} onSubmit={enviarEmail} className="formulario">
            <div style={{ marginBottom: '10px' }}>
              <label>Nombre:</label>
              <input type="text" name="user_name" required style={{ width: '100%', padding: '8px' }} />
            </div>

            <div style={{ marginBottom: '10px' }}>
              <label>Email:</label>
              <input type="email" name="user_email" required style={{ width: '100%', padding: '8px' }} />
            </div>

            <div style={{ marginBottom: '10px' }}>
              <label>Mensaje:</label>
              <textarea name="message" rows="4" required style={{ width: '100%', padding: '8px' }}></textarea>
            </div>

            <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>Enviar</button>
          </form>

          {mensajeEstado && <p style={{ marginTop: '10px' }}>{mensajeEstado}</p>}
        </div>

        <div style={{ flex: '1', minWidth: '300px' }}>
          <h3>Ubicación</h3>
          <iframe
            title="Mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2601.8290773537533!2d-65.42557083943232!3d-24.7811506865245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3b592601d45%3A0xb7f71c28c4f4c7d5!2sRivadavia%201595%2C%20A4400%20Salta!5e1!3m2!1ses!2sar!4v1793141444985!5m2!1ses!2sar"
            width="100%"
            height="280"
            style={{ border: 0, borderRadius: '8px' }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contacto;