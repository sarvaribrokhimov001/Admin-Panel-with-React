import React, { useEffect } from 'react'
import { Route , Routes, useNavigate } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import Dashboard from '../components/Dashboard'
import Users from '../components/Users'
import Carts from '../components/Carts'
import Products from '../components/Products'
import Settings from '../components/Settings'

const Router = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate()

    useEffect(() => {
        if(token) {
            navigate("/dashboard")
        } else {
            navigate("/");
        }
    } , [token , navigate])

  return (
    <Routes>
        {token ? (
           <Route path='/dashboard' element = {<Dashboard/>} >
                <Route path='/dashboard/users' element = {<Users/>} />
                <Route path='/dashboard/carts' element = {<Carts/>} />
                <Route path='/dashboard/products' element = {<Products/>} />
                <Route path='/dashboard/settings' element = {<Settings/>} />
           </Route> 
        ) : (
            <Route path='/' element = {<LoginForm/>} />
        )}  
    </Routes>
  )
}
export default Router