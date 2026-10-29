import React from 'react';
import { misProyectos } from '../components/proyectsData';

function Proyectos() {
  return (
    <div className="pagina">
      <h2>Mis Proyectos</h2>
      <p>Estos proyectos son resultado de mis avances en mi carrera de formación.</p>

      <div className="grilla">
        {misProyectos.map((proyecto) => (
          <div key={proyecto.id} className="tarjeta">
            <img src={proyecto.imagen} alt={proyecto.titulo} />
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.descripcion}</p>
            <p><strong>Tecnología:</strong> {proyecto.tecnologia}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proyectos;