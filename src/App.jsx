import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importo Paginas
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AcountPage from "./pages/AcountPage";
import Apartments from "./pages/Apartments";
import Apartment from "./pages/Apartment";
import BookingsPage from "./pages/BookingsPage";
import BookingPage from "./pages/BookingPage";
import UsersPage from "./pages/admin/UsersPage";
import EditBookingPage from "./pages/admin/EditBookingPage";
import NotFoundPage from "./pages/NotFoundPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import { useState } from "react";

// Importo Funcion ProtectedRoute, sirve para proteger paginas
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {

  const [user, setUser] = useState(null)

  const login = () => {
    // Viene la respuesta del usuario
    setUser({
      id: 1,
      name: "Jhony"
    })
  }

  const logout = () => setUser(null)

  return (
    <BrowserRouter>
      <Navigation />

      {
        user ? (
          <button onClick={logout}>Cerrar Sesion</button>
        ) : (
          <button onClick={login}>Iniciar Sesion</button>
        )
      }

      <Routes>
        <Route index element={<HomePage />} />
        <Route
          //Nombre de la URL(path) => Cual es la URL que busca desde el navegador
          path="/"
          //element => Pagina que va a estar mostrando
          element={<HomePage />}
        />
        <Route path="/iniciar-sesion" element={<LoginPage />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/cuenta" element={
          <ProtectedRoute user={user} redirectTo="/iniciar-sesion">
            <AcountPage />
          </ProtectedRoute>
        } />
        <Route path="/apartamentos" element={<Apartments />} />
        <Route path="/apartamento" element={<Apartment />} />
        <Route path="/reservas" element={<BookingsPage />} />
        <Route path="/reserva" element={<BookingPage />} />
        <Route path="/admin/editar-reserva" element={<EditBookingPage />} />
        <Route path="/admin/usuarios" element={<UsersPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App