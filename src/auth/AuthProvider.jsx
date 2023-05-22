import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext()

function AuthProvider({ children }) {

    const [user, setUser] = useState(null)

    const contextValue = {
        user,
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

AuthProvider.propTypes = {

    children: PropTypes.node.isRequired,

};