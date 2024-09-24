import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const mockPets = [
  {
    id: 1,
    name: 'Lola',
    species: 'Perro',
    breed: 'Golden Retriever',
    age: '14 meses',
    size: 'Mediano',
    description: 'Lola es muy amigable y juguetona.',
    images: ['lola.jpg'],
    location: 'Tennessee, USA',
    shelter: 'Refugio Amor Animal',
    gender: 'Hembra',
    neutered: true,
    vaccinated: true,
    microchipped: true,
    adoptionLink: '#',
    distance: '5 km',
    availabilityStatus: 'Disponible',
  },
  {
    id: 2,
    name: 'Felix',
    species: 'Gato',
    breed: 'Scottish',
    age: '27 meses',
    size: 'Mediano',
    description: 'Felix es tranquilo y le encanta dormir.',
    images: ['felix.jpg'],
    location: 'Arizona, USA',
    shelter: 'Refugio Gatitos Felices',
    gender: 'Macho',
    neutered: true,
    vaccinated: true,
    microchipped: false,
    adoptionLink: '#',
    distance: '10 km',
    availabilityStatus: 'Reservado',
  },
  // Agrega más mascotas según sea necesario
];


const PetList = () => {
  const [filteredPets, setFilteredPets] = useState(mockPets);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    species: '',
    location: '',
    size: '',
    breed: '',
    color: '',
    gender: '',
    ageRange: ''
  });

  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const applyFilters = () => {
    let filtered = mockPets.filter((pet) =>
      pet.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Filtrar por especie
    if (filters.species) {
      filtered = filtered.filter((pet) => pet.species === filters.species);
    }

    // Filtrar por ubicación
    if (filters.location) {
      filtered = filtered.filter((pet) => pet.location.toLowerCase().includes(filters.location.toLowerCase()));
    }

    // Filtrar por tamaño
    if (filters.size) {
      filtered = filtered.filter((pet) => pet.size === filters.size);
    }

    // Filtrar por raza
    if (filters.breed) {
      filtered = filtered.filter((pet) => pet.breed === filters.breed);
    }

    // Filtrar por color
    if (filters.color) {
      filtered = filtered.filter((pet) => pet.color === filters.color);
    }

    // Filtrar por género
    if (filters.gender && filters.gender !== 'Todos') {
      filtered = filtered.filter((pet) => pet.gender === filters.gender);
    }

    // Filtrar por edad
    if (filters.ageRange) {
      if (filters.ageRange === 'Joven (menos de 1 año)') {
        filtered = filtered.filter((pet) => parseInt(pet.age) <= 12);
      } else if (filters.ageRange === 'Adulto (1-5 años)') {
        filtered = filtered.filter((pet) => parseInt(pet.age) > 12 && parseInt(pet.age) <= 60);
      } else if (filters.ageRange === 'Mayor (más de 5 años)') {
        filtered = filtered.filter((pet) => parseInt(pet.age) > 60);
      }
    }

    setFilteredPets(filtered);
  };

  const handleSpeciesFilter = (species) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      species
    }));
  };

  return (
    <div style={{ display: 'flex', backgroundColor: '#E7E2DF' }}>
      <aside style={{
        width: '250px', 
        padding: '20px', 
        backgroundColor: '#E7E2DF', 
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif'
      }}>
        {/* Filtros de Especie */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <button 
            onClick={() => handleSpeciesFilter('Gato')}
            style={{
              backgroundColor: filters.species === 'Gato' ? '#d9c2b0' : 'transparent', 
              padding: '10px 20px', 
              borderRadius: '50%', 
              border: '1px solid #d9c2b0',
              cursor: 'pointer',
              fontSize: '16px',
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              color: filters.species === 'Gato' ? '#fff' : '#d9c2b0'
            }}>
            🐱
            <span style={{ marginTop: '5px' }}>Gatos</span>
          </button>
          <button 
            onClick={() => handleSpeciesFilter('Perro')}
            style={{
              backgroundColor: filters.species === 'Perro' ? '#d9c2b0' : 'transparent', 
              padding: '10px 20px', 
              borderRadius: '50%', 
              border: '1px solid #d9c2b0',
              cursor: 'pointer',
              fontSize: '16px',
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              color: filters.species === 'Perro' ? '#fff' : '#d9c2b0'
            }}>
            🐶
            <span style={{ marginTop: '5px' }}>Perros</span>
          </button>
        </div>
  
        {/* Ubicación */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ marginBottom: '10px', fontSize: '16px' }}>Ubicación</h4>
          <input 
            type="text" 
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
            placeholder="Ingresa ubicación" 
            style={{
              width: '100%', 
              padding: '10px', 
              borderRadius: '10px', 
              border: '1px solid #ccc'
            }} 
          />
        </div>
  
        {/* Tamaño */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ marginBottom: '10px', fontSize: '16px' }}>Tamaño</h4>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button 
              onClick={() => handleFilterChange({ target: { name: 'size', value: 'Pequeño' } })}
              style={{
                padding: '10px', 
                backgroundColor: filters.size === 'Pequeño' ? '#d9c2b0' : 'transparent', 
                border: 'none', 
                borderRadius: '10px', 
                cursor: 'pointer',
                width: '30%',
                border: '1px solid #d9c2b0',
              }}>
              Pequeño
            </button>
            <button 
              onClick={() => handleFilterChange({ target: { name: 'size', value: 'Mediano' } })}
              style={{
                padding: '10px', 
                backgroundColor: filters.size === 'Mediano' ? '#d9c2b0' : 'transparent', 
                border: 'none', 
                borderRadius: '10px', 
                cursor: 'pointer',
                width: '30%',
                border: '1px solid #d9c2b0',
              }}>
              Mediano
            </button>
            <button 
              onClick={() => handleFilterChange({ target: { name: 'size', value: 'Grande' } })}
              style={{
                padding: '10px', 
                backgroundColor: filters.size === 'Grande' ? '#d9c2b0' : 'transparent', 
                border: 'none', 
                borderRadius: '10px', 
                cursor: 'pointer',
                width: '30%',
                border: '1px solid #d9c2b0',
              }}>
              Grande
            </button>
          </div>
        </div>
  
        {/* Raza */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ marginBottom: '10px', fontSize: '16px' }}>Raza</h4>
          <select 
            name="breed"
            value={filters.breed}
            onChange={handleFilterChange}
            style={{
              width: '100%', 
              padding: '10px', 
              borderRadius: '10px', 
              border: '1px solid #ccc',
              backgroundColor: '#d9c2b0',
            }}>
            <option value="">Selecciona una opción</option>
            <option value="Golden Retriever">Golden Retriever</option>
            <option value="Scottish">Scottish</option>
            <option value="Labrador">Labrador</option>
            <option value="Beagle">Beagle</option>
          </select>
        </div>
  
        {/* Color */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ marginBottom: '10px', fontSize: '16px' }}>Color</h4>
          <select 
            name="color"
            value={filters.color}
            onChange={handleFilterChange}
            style={{
              width: '100%', 
              padding: '10px', 
              borderRadius: '10px', 
              border: '1px solid #ccc',
              backgroundColor: '#d9c2b0',
            }}>
            <option value="">Selecciona una opción</option>
            <option value="Golden">Golden</option>
            <option value="Gray">Gray</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Brown">Brown</option>
            <option value="Other">Other</option>
          </select>
        </div>
  
        {/* Género */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ marginBottom: '10px', fontSize: '16px' }}>Género</h4>
          <select 
            name="gender"
            value={filters.gender}
            onChange={handleFilterChange}
            style={{
              width: '100%', 
              padding: '10px', 
              borderRadius: '10px', 
              border: '1px solid #ccc',
              backgroundColor: '#d9c2b0',
            }}>
            <option value="">Selecciona una opción</option>
            <option value="Hembra">Hembra</option>
            <option value="Macho">Macho</option>
          </select>
        </div>
  
        {/* Edad */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ marginBottom: '10px', fontSize: '16px' }}>Edad</h4>
          <select 
            name="ageRange"
            value={filters.ageRange}
            onChange={handleFilterChange}
            style={{
              width: '100%', 
              padding: '10px', 
              borderRadius: '10px', 
              border: '1px solid #ccc',
              backgroundColor: '#d9c2b0',
            }}>
            <option value="">Selecciona una opción</option>
            <option value="Joven (menos de 1 año)">Joven (menos de 1 año)</option>
            <option value="Adulto (1-5 años)">Adulto (1-5 años)</option>
            <option value="Mayor (más de 5 años)">Mayor (más de 5 años)</option>
          </select>
        </div>
  
        {/* Botón de aplicar filtros */}
        <button 
          onClick={applyFilters} 
          style={{
            width: '100%', 
            padding: '10px 0', 
            backgroundColor: 'transparent', 
            color: '#5e5768', 
            borderRadius: '10px', 
            border: '1px solid #5e5768', 
            cursor: 'pointer',
            fontSize: '16px',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#5e5768', e.target.style.color = '#fff')}
          onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent', e.target.style.color = '#5e5768')}
        >
          Aplicar filtros
        </button>
  
        {/* Texto de borrar filtros */}
        <p 
          onClick={() => setFilters({
            species: '',
            location: '',
            size: '',
            breed: '',
            color: '',
            gender: '',
            ageRange: ''
          })}
          style={{
            marginTop: '10px', 
            textAlign: 'center', 
            color: '#5e5768', 
            textDecoration: 'underline', 
            cursor: 'pointer'
          }}
        >
          Borrar filtros
        </p>
      </aside>
  
      {/* Listado de mascotas */}
      <div style={{ flex: 1, padding: '20px' }}>
        {/* Barra de búsqueda */}
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Buscar por nombre"
            value={searchTerm}
            onChange={handleSearch}
            style={{ width: '100%', padding: '15px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
        </div>
  
        <h2 style={{ textAlign: 'center', color: '#333' }}>Busca mascotas en adopción</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
          {filteredPets.map((pet) => (
            <div key={pet.id} style={{
              borderRadius: '15px',
              backgroundColor: '#d9c2b0',
              padding: '20px',
              position: 'relative',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '500px',  // Asigna una altura mínima
              textAlign: 'left',
            }}>
              <div>
                <img src={pet.images[0]} alt={pet.name} style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '15px',
                  marginBottom: '15px'
                }} />
                <h3 style={{ margin: '10px 0', color: '#5e5768', fontSize: '20px', fontWeight: 'bold', textAlign: 'left' }}>{pet.name}</h3>
                <p style={{ color: '#6B7280', fontWeight: '500', marginBottom: '5px', textAlign: 'left' }}>{pet.location}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '10px' }}>
                  <p><strong>Género: </strong>{pet.gender}</p>
                  <p><strong>Raza: </strong>{pet.breed}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '10px' }}>
                  <p><strong>Edad: </strong>{pet.age}</p>
                  <p><strong>Tamaño: </strong>{pet.size}</p>
                </div>
                <p style={{ margin: '10px 0', color: '#4B5563', textAlign: 'left' }}>{pet.description}</p>
              </div>
              <button 
                onClick={() => navigate(`/pets/${pet.id}`)} 
                style={{
                  width: '100%',
                  padding: '10px 15px',
                  borderRadius: '5px',
                  border: '1px solid #5e5768',
                  backgroundColor: 'transparent',
                  color: '#5e5768',
                  cursor: 'pointer',
                  marginTop: 'auto',
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#5e5768', e.target.style.color = '#fff')}
                onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent', e.target.style.color = '#5e5768')}
              >
                Más información
              </button>
            </div>
          ))}
        </div>
  
        {/* Paginación */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button style={{ margin: '0 5px', padding: '10px 15px', border: 'none', backgroundColor: '#ddd', cursor: 'pointer' }}>Prev</button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button key={page} style={{ margin: '0 5px', padding: '10px 15px', border: 'none', backgroundColor: page === 1 ? '#5e5768' : '#ddd', color: page === 1 ? '#fff' : '#000', cursor: 'pointer' }}>
              {page}
            </button>
          ))}
          <button style={{ margin: '0 5px', padding: '10px 15px', border: 'none', backgroundColor: '#ddd', cursor: 'pointer' }}>Next</button>
        </div>
      </div>
    </div>
  );
  
  
};

export default PetList;
