import React, { useState } from 'react';

const AddPet = () => {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [size, setSize] = useState('');
  const [healthStatus, setHealthStatus] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [photos, setPhotos] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    setPhotos(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos obligatorios
    if (!name || !species || !breed || !age || !size || !healthStatus || photos.length === 0) {
      setErrorMessage('Todos los campos son obligatorios, incluyendo al menos una foto.');
      return;
    }

    // Simulación de envío de datos
    console.log({
      name,
      species,
      breed,
      age,
      size,
      healthStatus,
      contactPhone,
      additionalInfo,
      photos
    });

    // Mostrar mensaje de éxito
    setSuccessMessage('La mascota ha sido registrada exitosamente.');
    setErrorMessage('');
  };

  return (
    <div className="add-pet-container">
      <h2>Registrar nueva mascota para adopción</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="species">Especie</label>
          <input
            type="text"
            id="species"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="breed">Raza</label>
          <input
            type="text"
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Edad</label>
          <input
            type="text"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="size">Tamaño</label>
          <input
            type="text"
            id="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="healthStatus">Estado de salud</label>
          <input
            type="text"
            id="healthStatus"
            value={healthStatus}
            onChange={(e) => setHealthStatus(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactPhone">Teléfono de contacto</label>
          <input
            type="text"
            id="contactPhone"
            value={contactPhone}
            onChange={(e) => setContactPhone(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="additionalInfo">Información adicional</label>
          <textarea
            id="additionalInfo"
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="photos">Fotos</label>
          <input
            type="file"
            id="photos"
            accept="image/*"
            multiple
            onChange={handlePhotoUpload}
            required
          />
        </div>

        {errorMessage && <p className="error">{errorMessage}</p>}
        {successMessage && <p className="success">{successMessage}</p>}

        <button type="submit">Registrar Mascota</button>
      </form>
    </div>
  );
};

export default AddPet;