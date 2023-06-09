
import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../auth/useAuth';

export const ProtectedRoute = ({ isPermited, children, redirectTo = "/" }) => {



    const { user } = useAuth();

    if (!isPermited) {
        console.log(isPermited)
        return <Navigate to={redirectTo} />;
    }

    return children ? children : <Outlet />;
};

ProtectedRoute.propTypes = {
    isPermited: PropTypes.bool, // Ajusta el tipo según la estructura del objeto "user"
    children: PropTypes.node.isRequired,
    redirectTo: PropTypes.string, // Agrega la validación de tipo para "redirectTo"
};
