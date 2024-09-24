import React from 'react';
import Modal from 'react-modal';
import { FaGoogle, FaFacebookF } from 'react-icons/fa'; // Para íconos de Google y Facebook

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

const LoginModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      ariaHideApp={false} // Necesario para evitar warnings en desarrollo
    >
      <div style={{ flex: 1, padding: '40px', backgroundColor: '#f9f9f9', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}>
        <h2 style={{ marginBottom: '20px', fontSize: '24px', color: '#4A4A4A' }}>Log in PawPal</h2>

        <div style={{ marginBottom: '20px' }}>
          <label>Full Name</label>
          <input type="text" placeholder="Full Name" style={styles.input} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Password</label>
          <input type="password" placeholder="Password" style={styles.input} />
        </div>

        <a href="#" style={styles.forgotPassword}>Forgot Password?</a>

        <div style={{ marginBottom: '20px' }}>
          <input type="checkbox" id="keepLoggedIn" />
          <label htmlFor="keepLoggedIn" style={styles.keepLoggedIn}>Keep me logged in</label>
        </div>

        <button style={styles.loginButton}>Log In</button>

        <div style={styles.divider}>
          <span>Or Sign Up with</span>
        </div>

        <div style={styles.socialButtons}>
          <button style={styles.socialButton}><FaGoogle /></button>
          <button style={styles.socialButton}><FaFacebookF /></button>
        </div>

        <p style={styles.signUpText}>
          Don’t have an account? <a href="#">Sign up</a>
        </p>
      </div>

      <div style={styles.logoContainer}>
        <img src="/imagenes/logocompleto.png" alt="PawPal Logo" style={styles.logoImage} />
      </div>
    </Modal>
  );
};

const styles = {
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  forgotPassword: {
    display: 'block',
    marginBottom: '20px',
    textAlign: 'right',
    color: '#007BFF',
    textDecoration: 'none',
  },
  keepLoggedIn: {
    marginLeft: '5px',
  },
  loginButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#6B7280',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  divider: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#6B7280',
  },
  socialButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  socialButton: {
    padding: '10px',
    borderRadius: '50%',
    border: '1px solid #ccc',
    cursor: 'pointer',
    fontSize: '18px',
  },
  signUpText: {
    textAlign: 'center',
    marginTop: '20px',
    color: '#6B7280',
  },
  logoContainer: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px',
  },
  logoImage: {
    width: '200px',
    height: 'auto',
  },
};

export default LoginModal;
