import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'; // Iconos de usuario, correo y contraseña
import LoginModal from './LoginModal'; // Importa el LoginModal

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    width: '50%',
    display: 'flex',
    padding: '0',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

const RegisterModal = ({ isOpen, onRequestClose }) => {
  const [showLogin, setShowLogin] = useState(false);

  const handleSignInClick = () => {
    setShowLogin(true); // Muestra el LoginModal
  };

  const closeModals = () => {
    setShowLogin(false);
    onRequestClose(); // Cierra el modal de registro
  };

  return (
    <>
      <Modal
        isOpen={isOpen && !showLogin}
        onRequestClose={onRequestClose}
        style={customStyles}
        ariaHideApp={false}
      >
        <div style={styles.container}>
          <div style={styles.leftSide}>
            <h2 style={styles.header}>Crea Tu Cuenta</h2>
            <form>
              <div style={styles.formGroup}>
                <FaUser style={styles.icon} />
                <input type="text" placeholder="Full Name" style={styles.input} />
              </div>
              <div style={styles.formGroup}>
                <FaEnvelope style={styles.icon} />
                <input type="email" placeholder="Email" style={styles.input} />
              </div>
              <div style={styles.formGroup}>
                <FaLock style={styles.icon} />
                <input type="password" placeholder="Password" style={styles.input} />
              </div>
              <div style={styles.checkboxGroup}>
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">
                  I agree to all <a href="#">Terms & Conditions</a>
                </label>
              </div>
              <button type="submit" style={styles.button}>Create Account</button>
            </form>
            <p>Or Sign up with</p>
            <div style={styles.socialButtons}>
              <button style={styles.socialButton}>Google</button>
              <button style={styles.socialButton}>Facebook</button>
            </div>
            <p>
              Already have an account?{' '}
              <a href="#" onClick={handleSignInClick}>
                Sign in
              </a>
            </p>
          </div>

          <div style={styles.rightSide}>
            <img
              src="/imagenes/logoimagen.png" // Ruta de tu logo
              alt="PawPal Logo"
              style={styles.logoImage}
            />
          </div>
        </div>
      </Modal>

      {/* Muestra el LoginModal cuando el usuario hace clic en "Sign in" */}
      <LoginModal isOpen={showLogin} onRequestClose={closeModals} />
    </>
  );
};

// Estilos del contenido del modal
const styles = {
  container: {
    display: 'flex',
    width: '100%',
  },
  leftSide: {
    width: '50%',
    padding: '40px',
    backgroundColor: '#F0F0F0',
    borderTopLeftRadius: '10px',
    borderBottomLeftRadius: '10px',
    textAlign: 'center',
  },
  rightSide: {
    width: '50%',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '30px',
  },
  formGroup: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    left: '10px',
    color: '#777',
  },
  input: {
    width: '100%',
    padding: '10px 40px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  checkboxGroup: {
    textAlign: 'left',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#6B47DC',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    marginBottom: '20px',
  },
  socialButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  socialButton: {
    padding: '10px 15px',
    backgroundColor: '#eaeaea',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '48%',
  },
  logoImage: {
    width: '200px',
  },
};

export default RegisterModal;
