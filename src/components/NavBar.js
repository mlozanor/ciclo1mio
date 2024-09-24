import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const NavBar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false); // Asegúrate de cerrar el modal de registro si está abierto
  };

  const openRegisterModal = () => {
    setIsRegisterOpen(true);
    setIsLoginOpen(false); // Asegúrate de cerrar el modal de login si está abierto
  };

  const closeLoginModal = () => setIsLoginOpen(false);
  const closeRegisterModal = () => setIsRegisterOpen(false);

  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        {/* Link al hacer clic en el logo */}
        <Link to="/" style={styles.logoLink}>
          <img src="/imagenes/logoimagen.png" alt="PawPal" style={styles.logo} />
          <span style={styles.logoText}>PawPal</span>
        </Link>
      </div>
      <ul style={styles.menu}>
        <li><Link to="/adopcion" style={styles.link}>Adopción</Link></li>
        <li><Link to="/productos" style={styles.link}>Productos</Link></li>
        <li><Link to="/fundaciones" style={styles.link}>Fundaciones</Link></li>
        <li><Link to="/hogares" style={styles.link}>Hogares de Paso</Link></li>
      </ul>
      <div style={styles.buttonsContainer}>
        <button onClick={openLoginModal} style={styles.loginButton}>Login</button>
        <button onClick={openRegisterModal} style={styles.registerButton}>Registro</button>
      </div>

      {/* Modal para Login */}
      <LoginModal isOpen={isLoginOpen} onRequestClose={closeLoginModal} />
      
      {/* Modal para Registro */}
      <RegisterModal isOpen={isRegisterOpen} onRequestClose={closeRegisterModal} />
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#5e5768',
    padding: '10px 20px',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  logo: {
    height: '40px',
    marginRight: '10px',
  },
  logoText: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#ffffff',
  },
  menu: {
    display: 'flex',
    listStyle: 'none',
    gap: '20px',
  },
  link: {
    color: '#ffffff',
    fontSize: '16px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    display: 'flex',
    gap: '10px',
  },
  loginButton: {
    padding: '8px 16px',
    backgroundColor: '#a59489',
    color: '#2e2c2d',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  registerButton: {
    padding: '8px 16px',
    backgroundColor: '#2e2c2d',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default NavBar;
