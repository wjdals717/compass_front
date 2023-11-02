import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signin from '../../pages/Signin/Signin';
import Signup from '../../pages/Signup/Signup';
import DetailSignup from '../../pages/DetailSignup/DetailSignup';

function AuthRoute(props) {
    return (
        <Routes>
            <Route path='signin' element={ <Signin/> } />
            <Route path='signup' element={ <Signup/> } />
            <Route path='detail/signup' element={ <DetailSignup/> } />
        </Routes>
    );
}

export default AuthRoute;