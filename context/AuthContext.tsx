import React, { createContext, ReactNode, FC} from 'react'

type AuthContextType = {
    user: string | null;
    setUser: React.Dispatch<React.SetStateAction<string | null>>
}

export const AuthContext = createContext();

export const AuthProvider = ({children}) ={
    return(
        <AuthContext>
            {children}
        </AuthContext>
    )
}