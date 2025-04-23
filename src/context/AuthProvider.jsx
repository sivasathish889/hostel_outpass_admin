import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(localStorage.getItem('__adminUser') || null)
    const [token, setToken] = useState(localStorage.getItem('__adminUser') || null)
    const [refresh, setRefresh] = useState(false)
    const [userData, setUserData] = useState({})

    const logout = async () => {
        localStorage.removeItem('__adminUser')
        setIsLogin(false)
        setRefresh(!refresh)
    }

    const getUserData = async () => {
        if (token) {
            await axios.get(`/get-userData/${token}`).then((res) => {
                setUserData(res.data.data)
            })
        }
    }

    useEffect(() => {
        let token = localStorage.getItem('__adminUser')
        if (token) {
            setToken(token)
            setIsLogin(true)
        }
        getUserData()
    }, [refresh])
    return (
        <AuthContext value={{ isLogin, setRefresh, refresh, logout, userData }}>
            {children}
        </AuthContext>
    )
}
export const useAuth = () => useContext(AuthContext)
