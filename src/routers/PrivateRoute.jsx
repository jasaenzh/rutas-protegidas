import { Navigate, Outlet } from "react-router-dom";
import PropTypes from 'prop-types';

export default function PrivateRoute({ isPermited, children, redirectTo = "/" }) {

    if (!isPermited) return <Navigate to={redirectTo} />;

    return children ? children : <Outlet />;
}

PrivateRoute.propTypes = {
    isPermited: PropTypes.bool, // Ajusta el tipo según la estructura del objeto "user"
    children: PropTypes.node.isRequired,
    redirectTo: PropTypes.string, // Agrega la validación de tipo para "redirectTo"
};

