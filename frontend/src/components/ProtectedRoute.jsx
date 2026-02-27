import { Navigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from '../auth/AuthContext';  

export function ProtectedRoute({ children }) {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <AuthContext to="/login" />;
    }

    return children;    
}

export default ProtectedRoute;