import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PetList from "./components/PetList"; // Componente de listado de mascotas
import PetDetails from "./components/PetDetails"; // Componente para mostrar detalles de una mascota
import NavBar from "./components/NavBar"; // Componente de navegación
import Footer from "./components/Footer"; // Componente de pie de página

function App() {
  return (
    <div className="App">
      {/* Envolvemos las rutas dentro de BrowserRouter */}
      <BrowserRouter>
        {/* Componente NavBar que será visible en todas las páginas */}
        <NavBar />
        
        {/* Ajustamos el margen para evitar que el contenido quede oculto tras el menú */}
        <div style={{ marginTop: '80px' }}>
          <Routes>
            {/* Ruta principal que muestra el listado de mascotas */}
            <Route path="/" element={<PetList />} />
            {/* Ruta que muestra el listado de mascotas */}
            <Route path="/pets" element={<PetList />} />
            {/* Ruta que muestra los detalles de una mascota específica */}
            <Route path="/pets/:id" element={<PetDetails />} />
            {/* Otras rutas de ejemplo que puedes agregar */}
            <Route path="/adopcion" element={<PetList />} />
            <Route path="/productos" element={<h2>Productos</h2>} />
            <Route path="/fundaciones" element={<h2>Fundaciones</h2>} />
            <Route path="/hogares" element={<h2>Hogares de Paso</h2>} />
            <Route path="/login" element={<h2>Login</h2>} />
            <Route path="/registro" element={<h2>Registro</h2>} />
          </Routes>
        </div>
        <Footer /> {/* Footer agregado */}
      </BrowserRouter>
    </div>
  );
}

export default App;
