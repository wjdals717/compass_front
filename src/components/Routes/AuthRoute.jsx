import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Signin from '../../pages/Signin/Signin';
import DetailSignup from '../../pages/DetailSignup/DetailSignup';
import SigninOauth2 from '../../pages/Signin/SigninOauth2';

function AuthRoute(props) {

        // 로그인 상태 확인
        const isAuthenticated = !!localStorage.getItem("accessToken");
    
        // 로그인된 상태라면 로그인, 회원가입 페이지로의 접근을 막음
        if (isAuthenticated) {
            return <Navigate to="/" />;
        }
    
        return (
            <Routes>
                <Route path='signin' element={<Signin />} />
                <Route path='oauth2/signin' element={<SigninOauth2 />} />
                <Route path='detail/signup' element={<DetailSignup />} />
            </Routes>
        );
    }

export default AuthRoute;