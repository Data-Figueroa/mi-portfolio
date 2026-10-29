import React, { useState, useEffect } from 'react';

function Home() {
  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('https://dev.to/api/articles?tag=webdev&per_page=3')
      .then((res) => res.json())
      .then((data) => {
        setArticulos(data.slice(0, 3));
        setCargando(false);
      })
      .catch((error) => {
        console.error('Error al cargar articulos:', error);
        setCargando(false);
      });
  }, []);

  return (
    <div className="pagina">
      <div 
        className="hero" 
        style={{
          textAlign: 'center',
          padding: '30px 20px',
          marginBottom: '30px',
          backgroundColor: '#f8f9fa',
          borderRadius: '10px',
          border: '1px solid #ddd'
        }}
      >
        <img 
          src={process.env.PUBLIC_URL + '/imagenes/Logo_JOAFI.png'}
          alt="Foto de perfil" 
          style={{
            width: '130px',
            height: '130px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '15px',
            border: '3px solid #0066cc'
          }}
        />

        <h1 style={{ margin: '10px 0', fontSize: '26px' }}>
          ¡Hola! Soy José Agustín Figueroa
        </h1>
        <h3 style={{ color: '#0066cc', margin: '0 0 15px 0', fontSize: '18px' }}>
          Desarrollador Web en Formación
        </h3>

        <p style={{ maxWidth: '650px', margin: '0 auto 15px auto', lineHeight: '1.5' }}>
          Actualmente me encuentro cursando la Tecnicatura <strong>PROGRAMACIÓN CON ORIENTACIÓN EN DESARROLLO DE APLICACIONES</strong>. 
          Me especializo en el desarrollo de interfaces dinámicas e interactivas utilizando 
          tecnologías modernas como <strong>HTML5, CSS3, JavaScript y React</strong>.
        </p>

        <p style={{ maxWidth: '650px', margin: '0 auto', lineHeight: '1.5' }}>
          <strong>Mi meta:</strong> Seguir perfeccionando mis habilidades como desarrollador Full-Stack, 
          creando soluciones digitales eficientes, escalables y orientadas a brindar lo mejor al usuario.
        </p>
      </div>

      <h2>Novedades en Tecnología</h2>
      <p style={{ marginBottom: '20px', color: '#666' }}>
        Artículos destacados de la comunidad de desarrolladores.
      </p>

      {cargando ? (
        <p>Cargando información desde la API...</p>
      ) : (
        <div className="grilla" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {articulos.map((articulo) => (
            <div key={articulo.id} className="tarjeta" style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#fff' }}>
              <div>
                <img 
                  src={articulo.cover_image || articulo.social_image || articulo.user.profile_image} 
                  alt={articulo.title} 
                  style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '6px', marginBottom: '10px' }} 
                />

                <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{articulo.title}</h3>
                <p style={{ fontSize: '14px', color: '#555' }}>
                  <strong>Autor:</strong> {articulo.user.name}
                </p>

                <p style={{ fontSize: '14px', margin: '10px 0' }}>
                  {articulo.description || 'Sin descripción disponible.'}
                </p>
              </div>

              <div>
                <p style={{ fontSize: '13px', margin: '5px 0', color: '#666' }}>
                  {articulo.public_reactions_count} reacciones | {articulo.comments_count} comentarios
                </p>

                <a 
                  href={articulo.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ display: 'inline-block', marginTop: '10px', color: '#0066cc', fontWeight: 'bold', textDecoration: 'none' }}
                >
                  Leer más →
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;