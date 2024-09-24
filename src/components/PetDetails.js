import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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
];

const PetDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pet = mockPets.find((p) => p.id === parseInt(id));

  if (!pet) {
    return <p>Mascota no encontrada.</p>;
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.petMainInfo}>
          <img src={pet.image} alt={pet.name} style={styles.profileImage} />
          <h2>{pet.name}</h2>
          <p>Pet ID: {pet.id}</p>
          <p>{pet.location}</p>
          <p>{pet.shelter} ({pet.distance} away)</p>
        </div>
        <button onClick={() => navigate('/pets')} style={styles.backButton}>Volver al listado</button>
      </div>
  
      {/* Main Image Section */}
      <div style={styles.mainContent}>
        <div style={styles.imageSection}>
          <img src={pet.images[0]} alt={pet.name} style={styles.mainImage} />
          <div style={styles.thumbnailContainer}>
            {pet.images.slice(1).map((img, index) => (
              <img key={index} src={img} alt={`${pet.name} ${index}`} style={styles.thumbnail} />
            ))}
          </div>
        </div>
  
        {/* Story and Health Details */}
        <div style={styles.detailsSection}>
          <div style={styles.story}>
            <h3>Historia de {pet.name}</h3>
            <p>{pet.description}</p>
          </div>
  
          <div style={styles.healthDetails}>
            <ul style={styles.iconList}>
              <li>Vacunado</li>
              <li>Esterilizado</li>
              <li>Microchip: {pet.microchipped ? 'Sí' : 'No'}</li>
              <li>Size: {pet.size}</li>
            </ul>
          </div>
        </div>
      </div>
  
      {/* Adoption Button */}
      <button onClick={() => alert('Formulario para adoptar')} style={styles.adoptButton}>
        Si te interesa adoptar
      </button>
  
      {/* Related Pets */}
      <div style={styles.relatedPetsSection}>
        <h3>Mascotas que te pueden interesar</h3>
        <div style={styles.relatedPets}>
          {mockPets.slice(0, 4).map((relatedPet) => (
            <div key={relatedPet.id} style={styles.relatedPetCard}>
              <img src={relatedPet.images[0]} alt={relatedPet.name} style={styles.relatedPetImage} />
              <h4>{relatedPet.name}</h4>
              <p>{relatedPet.breed}</p>
              <button onClick={() => navigate(`/pets/${relatedPet.id}`)} style={styles.moreInfoButton}>
                Más información
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
  
};

const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f3eae3',  // Fondo claro acorde con el diseño
      borderRadius: '10px',
      fontFamily: 'Arial, sans-serif',
    },
    backButton: {
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      padding: '10px',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '20px',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
    },
    petMainInfo: {
      textAlign: 'left',
    },
    profileImage: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: '15px',
    },
    mainContent: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '40px',
    },
    imageSection: {
      flex: 1,
      marginRight: '20px',
    },
    mainImage: {
      width: '100%',
      height: '300px',
      objectFit: 'cover',
      borderRadius: '10px',
    },
    thumbnailContainer: {
      display: 'flex',
      gap: '10px',
      marginTop: '10px',
    },
    thumbnail: {
      width: '80px',
      height: '80px',
      objectFit: 'cover',
      borderRadius: '5px',
    },
    detailsSection: {
      flex: 1,
    },
    story: {
      marginBottom: '20px',
    },
    healthDetails: {
      marginBottom: '20px',
    },
    iconList: {
      listStyle: 'none',
      padding: 0,
      fontSize: '16px',
    },
    adoptButton: {
      display: 'block',
      margin: '20px auto',
      padding: '10px 20px',
      backgroundColor: '#836953',  // Color marrón según el diseño
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    relatedPetsSection: {
      marginTop: '40px',
    },
    relatedPets: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
    },
    relatedPetCard: {
      backgroundColor: '#f3eae3',
      padding: '15px',
      borderRadius: '10px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      width: '200px',
    },
    relatedPetImage: {
      width: '100%',
      height: '150px',
      objectFit: 'cover',
      borderRadius: '50%',  // Circular, según el diseño de ejemplo
      marginBottom: '10px',
    },
    moreInfoButton: {
      backgroundColor: 'transparent',
      border: '1px solid #836953',  // Marrón claro según el diseño
      padding: '8px 16px',
      borderRadius: '5px',
      cursor: 'pointer',
      color: '#836953',
      fontSize: '14px',
    },
  };


export default PetDetails;
