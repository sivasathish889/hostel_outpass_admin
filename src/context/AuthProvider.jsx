import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(null)
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('__adminUser')
        setIsLogin(token)
    }, [refresh])

    return (
        <AuthContext value={{isLogin}}>
            {children}
        </AuthContext>
    )
}
export const useAuth = () => useContext(AuthContext)
