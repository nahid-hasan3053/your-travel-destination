import React, { createContext, useContext } from 'react';
import { app } from '../../firebase/firebase.config';
import {getAuth} from 'firebase/auth'

const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useContext(null)
    const [loading, setLoading] = useContext(true)

    


    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;