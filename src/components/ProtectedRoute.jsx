
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ user, children, redirectTo = "/" }) => {
    if (!user) {
        return <Navigate to={redirectTo} />;
    }

    return children;
};

ProtectedRoute.propTypes = {
    user: PropTypes.object, // Ajusta el tipo según la estructura del objeto "user"
    children: PropTypes.node.isRequired,
    redirectTo: PropTypes.string, // Agrega la validación de tipo para "redirectTo"
};
