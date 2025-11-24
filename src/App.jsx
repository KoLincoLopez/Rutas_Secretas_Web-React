import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Blogs } from './pages/Blogs';
import { Cart } from './pages/Cart';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Detail } from './pages/Detail';
import { AppProvider } from './context/AppContext';
import ApiTest from './ApiTest';

const MainLayout = () => (
  <>
    <Navbar />
    <div className="main-content-wrapper">
      <Outlet />
    </div>
    <Footer />
  </>
);

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>

          <Route path="/Login.html" element={<Login />} />
          <Route path="/Registro.html" element={<Register />} />

          <Route element={<MainLayout />}>

            <Route path="/" element={<Home />} />
            <Route path="/Index.html" element={<Home />} />
            <Route path="/Productos.html" element={<Products />} />
            <Route path="/Nosotros.html" element={<About />} />
            <Route path="/Contactos.html" element={<Contact />} />
            <Route path="/Blogs.html" element={<Blogs />} />
            <Route path="/Carrito.html" element={<Cart />} />

            <Route path="/Detalle.html" element={<Detail />} />
            <Route path="/test-api" element={<ApiTest />} />

          </Route>

        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;