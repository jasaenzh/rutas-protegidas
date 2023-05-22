
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/layouts/Layouts';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import AccountPage from '../pages/AccountPage';
import ReservationsPage from '../pages/ReservationsPage';
import ReservationPage from '../pages/ReservationPage';
import UsersPage from '../pages/admin/UsersPage';
import NotFoundPage from '../pages/NotFoundPage';
import Apartments from '../pages/Apartments';
import Apartment from '../pages/Apartment';
import { PublicRoute } from "../components/PublicRoute";
import urlRoutes from "../helpers/urlRoutes";
import { useState } from "react";
import { ProtectedRoute } from "../components/ProtectedRoute";
import roles from "../helpers/roles";
import AdminReservationsPage from "../pages/admin/AdminReservationsPage"
import PrivateRoute from './PrivateRoute';

const AppRoutes = () => {

    const [user, setUser] = useState(null)

    const login = () => {
        // Viene la respuesta del usuario
        setUser({
            id: 1,
            name: "Jhony",
            permission: ["user"],
            role: ['administrator']
        })
    }

    const logout = () => setUser(null)

    return (
        <Layout>
            {
                user ? (
                    <button onClick={logout}>Cerrar Sesion</button>
                ) : (
                    <button onClick={login}>Iniciar Sesion</button>
                )
            }
            <Routes>
                {/* Rutas Publicas */}
                <Route index element={<HomePage />} />
                <Route path={urlRoutes.home} element={<HomePage />} />
                <Route path={urlRoutes.apartaments} element={<Apartments />} />
                <Route path={urlRoutes.apartament()} element={<Apartment />} />


                {/* RUTAS PROTEGIDAS */}
                <Route element={<PrivateRoute isPermited={user ? true : false} />}>
                    <Route path={urlRoutes.account} element={<AccountPage />} />
                    <Route path={urlRoutes.reservations} element={<ReservationsPage />} />
                    <Route path={urlRoutes.reservation()} element={<ReservationPage />} />
                    <Route path={urlRoutes.account} element={<AccountPage />} />
                    <Route path={urlRoutes.admin.users} element={<UsersPage />} />
                </Route>



                {/* Rutas Publicas si el usuario ya esta logueado */}
                {/* <Route element={<PublicRoute isPermited={user ? true : false} />}>
                    <Route path={urlRoutes.login} element={<LoginPage />} />
                    <Route path={urlRoutes.register} element={<RegisterPage />} />
                </Route> */}

                {/* Rutas protegidas si se loguea el usuario */}
                {/* <Route element={<ProtectedRoute isPermited={user ? true : false} />}>

                    <Route path={urlRoutes.admin.users} element={<UsersPage />} />
                </Route> */}

                {/* Rutas Protegidas con Rol Admin */}
                {/* <Route
                    element={
                        <ProtectedRoute
                            isPermited={(user ? true : false) && (user.role.includes(roles.administrator))}
                            redirectTo="/">

                            <Route path={urlRoutes.admin.adminReservations} element={<AdminReservationsPage />} />
                        </ProtectedRoute>}>
                </Route> */}

                {/* Ruta por defecto si escriben cualquier otra cosa */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Layout>
    );
}

export default AppRoutes;