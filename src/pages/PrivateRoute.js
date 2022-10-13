import React from 'react';
import { Routes, Route,Navigate, redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { useUserContext } from '../context/user_context';

const PrivateRoute = ({children, ...rest}) => {
  const {user} = useAuth0()

        return user ? children : <Navigate to='/'></Navigate>
}; 
export default PrivateRoute;
