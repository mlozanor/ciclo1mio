import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.leftSection}>
        {/* Iconos sociales alineados a la izquierda */}
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <img src="/icons/facebook.png" alt="Facebook" style={styles.icon} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <img src="/icons/instagram.png" alt="Instagram" style={styles.icon} />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
          <img src="/icons/youtube.png" alt="YouTube" style={styles.icon} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <img src="/icons/linkedin.png" alt="LinkedIn" style={styles.icon} />
        </a>
      </div>

      <div style={styles.sections}>
        <div style={styles.section}>
          <h3 style={styles.heading}>Adopción</h3>
          <ul style={styles.list}>
            <li><Link to="/adopcion/perros" style={styles.link}>Perros</Link></li>
            <li><Link to="/adopcion/gatos" style={styles.link}>Gatos</Link></li>
            <li><Link to="/adopcion/otros" style={styles.link}>Otros animales</Link></li>
            <li><Link to="/adopcion/familiares" style={styles.link}>Grupos familiares</Link></li>
            <li><Link to="/adopcion/cuidados" style={styles.link}>Cuidados</Link></li>
          </ul>
        </div>
        <div style={styles.section}>
          <h3 style={styles.heading}>Productos</h3>
          <ul style={styles.list}>
            <li><Link to="/productos/alimento" style={styles.link}>Alimento</Link></li>
            <li><Link to="/productos/juguetes" style={styles.link}>Juguetes</Link></li>
            <li><Link to="/productos/camas" style={styles.link}>Camas</Link></li>
            <li><Link to="/productos/accesorios" style={styles.link}>Accesorios</Link></li>
            <li><Link to="/productos/medicina" style={styles.link}>Medicina</Link></li>
          </ul>
        </div>
        <div style={styles.section}>
          <h3 style={styles.heading}>¿Cómo ayudar?</h3>
          <ul style={styles.list}>
            <li><Link to="/fundaciones" style={styles.link}>Fundaciones</Link></li>
            <li><Link to="/hogar-inscribir" style={styles.link}>Inscribir hogar de paso</Link></li>
            <li><Link to="/peticiones-hogar" style={styles.link}>Peticiones a hogar de paso</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#5e5768',
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 50px',
    fontSize: '14px',
    marginTop: 'auto',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    width: '24px',
    height: '24px',
    marginRight: '10px',
  },
  sections: {
    display: 'flex',
    justifyContent: 'center', // Centra las secciones
    width: '100%',
    gap: '80px', // Añade un espacio entre las secciones
  },
  section: {
    textAlign: 'left', // Alinea el contenido de cada sección a la izquierda
  },
  heading: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    marginBottom: '8px',
    display: 'block',
  },
};

export default Footer;
