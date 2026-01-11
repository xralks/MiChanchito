import { useState, useRef, useEffect } from 'react';
import './SeccionNosotros.css';

const SeccionNosotros = () => {
  const [indiceActivo, setIndiceActivo] = useState(0);
  const [progresoScroll, setProgresoScroll] = useState(0);
  const contenedorRef = useRef(null);

  const hitos = [
    {
      año: "Semana 1",
      titulo: "El Problema Real",
      descripcion: "Identificamos que el 70% de las personas no tienen un control claro de sus finanzas. Decidimos crear una solución simple, efectiva y accesible para todos.",
      icono: "🎯",
      color: "var(--color-primary)"
    },
    {
      año: "Semana 2",
      titulo: "Diseño Centrado en el Usuario",
      descripcion: "Entrevistamos a 50+ personas sobre sus hábitos financieros. Diseñamos una experiencia que elimina la complejidad y enfoca en lo que realmente importa: tus metas.",
      icono: "💭",
      color: "var(--color-secondary)"
    },
    {
      año: "Semana 3",
      titulo: "Desarrollo Ágil",
      descripcion: "Construimos el core de la aplicación con las mejores prácticas de desarrollo. Seguridad, velocidad y simplicidad como pilares fundamentales.",
      icono: "⚡",
      color: "var(--color-warning)"
    },
    {
      año: "Semana 4",
      titulo: "Pruebas Intensivas",
      descripcion: "Beta testing con usuarios reales. Refinamos cada detalle basándonos en feedback genuino. La usabilidad es nuestra prioridad número uno.",
      icono: "🔬",
      color: "var(--color-success)"
    },
    {
      año: "Semana 5",
      titulo: "Lanzamiento Oficial",
      descripcion: "Hoy estamos aquí. Una app lista para transformar tu relación con el dinero. Respaldada por tecnología sólida y un equipo comprometido con tu éxito financiero.",
      icono: "🚀",
      color: "var(--color-info)"
    },
    {
      año: "Futuro",
      titulo: "Creciendo Juntos",
      descripcion: "Esto es solo el inicio. Cada usuario que se une nos ayuda a mejorar. Tu feedback construye el futuro de la app. Juntos creamos la mejor experiencia financiera.",
      icono: "🌟",
      color: "var(--color-primary)"
    }
  ];

  useEffect(() => {
    const manejarScroll = () => {
      if (!contenedorRef.current) return;
      
      const contenedor = contenedorRef.current;
      const scrollIzquierda = contenedor.scrollLeft;
      const anchoScroll = contenedor.scrollWidth - contenedor.clientWidth;
      
      if (anchoScroll > 0) {
        const progreso = (scrollIzquierda / anchoScroll) * 100;
        setProgresoScroll(progreso);
        const centroViewport = scrollIzquierda + (contenedor.clientWidth / 2);
        const tarjetas = contenedor.querySelectorAll('.milestone-card');
        
        let indiceEncontrado = 0;
        let menorDistancia = Infinity;
        
        tarjetas.forEach((tarjeta, indice) => {
          const rectTarjeta = tarjeta.getBoundingClientRect();
          const rectContenedor = contenedor.getBoundingClientRect();
          const centroTarjeta = tarjeta.offsetLeft + (tarjeta.offsetWidth / 2);
          const distancia = Math.abs(centroViewport - centroTarjeta);
          
          if (distancia < menorDistancia) {
            menorDistancia = distancia;
            indiceEncontrado = indice;
          }
        });
        
        setIndiceActivo(indiceEncontrado);
      }
    };

    const contenedor = contenedorRef.current;
    if (contenedor) {
      contenedor.addEventListener('scroll', manejarScroll);
      manejarScroll();
      return () => contenedor.removeEventListener('scroll', manejarScroll);
    }
  }, [hitos.length]);

  const scrollearAIndice = (indice) => {
    if (!contenedorRef.current) return;
    const contenedor = contenedorRef.current;
    const tarjetas = contenedor.querySelectorAll('.milestone-card');
    
    if (tarjetas[indice]) {
      const tarjeta = tarjetas[indice];
      const offsetTarjeta = tarjeta.offsetLeft;
      const anchoTarjeta = tarjeta.offsetWidth;
      const anchoContenedor = contenedor.clientWidth;
      const scrollObjetivo = offsetTarjeta - (anchoContenedor / 2) + (anchoTarjeta / 2);
      
      contenedor.scrollTo({
        left: scrollObjetivo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="nosotros-container">
      <div className="nosotros-header">
        <h1 className="nosotros-title"><span className="subrayado">Nuestra Historia</span></h1>
        <p className="nosotros-subtitle">
          5 semanas de trabajo intenso para crear la app financiera que siempre quisiste
        </p>
      </div>

      <div className="timeline-wrapper">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progresoScroll}%` }}
          />
        </div>

        <div className="timeline-scroll" ref={contenedorRef}>
          <div className="timeline-track">
            {hitos.map((hito, indice) => (
              <div
                key={indice}
                className={`milestone-card ${indice === indiceActivo ? 'active' : ''}`}
                onClick={() => scrollearAIndice(indice)}
              >
                <div className="milestone-icon" style={{ 
                  background: `linear-gradient(135deg, ${hito.color}, ${hito.color}99)`,
                  boxShadow: indice === indiceActivo ? `0 0 30px ${hito.color}66` : 'none'
                }}>
                  <span>{hito.icono}</span>
                </div>
                
                <div className="milestone-year">{hito.año}</div>
                
                <h3 className="milestone-title">{hito.titulo}</h3>
                
                <p className="milestone-description">{hito.descripcion}</p>

                <div className="milestone-line" style={{ 
                  background: indice === indiceActivo ? hito.color : 'var(--color-border)' 
                }} />
              </div>
            ))}
          </div>
        </div>

        <div className="timeline-dots">
          {hitos.map((_, indice) => (
            <button
              key={indice}
              className={`dot ${indice === indiceActivo ? 'active' : ''}`}
              onClick={() => scrollearAIndice(indice)}
              aria-label={`Ir a hito ${indice + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="nosotros-footer">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">5</div>
            <div className="stat-label">Semanas de Desarrollo</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">50+</div>
            <div className="stat-label">Usuarios Beta Testing</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Enfocados en Ti</div>
          </div>
        </div>

        <div className="cta-section">
          <h2 className="cta-title">¿Listo para tomar control de tus finanzas?</h2>
          <p className="cta-text">
            Únete a nuestra comunidad y sé parte de esta transformación financiera desde el día uno.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeccionNosotros;