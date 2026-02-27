import { useState } from "react";
import { AuthContext } from "./AuthContext";
import * as authService from "../services/auth.service.js";

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    async function signIn(email, password) {
        const data = await authService.login(email, password);

        localStorage.setItem('token', data.token);
        setUser(data.user);
    }

    function signOut() {
        localStorage.removeItem('token');
        setUser(null);
    }

    return (            
        <AuthContext.Provider>
            value = {{ user, signIn, signOut }}
            {children}
        </AuthContext.Provider>
    );
}

// global, centralizado e persistente