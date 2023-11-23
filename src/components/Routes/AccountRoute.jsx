import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MyPage from '../../pages/MyPage/MyPage';

function AccountRoute(props) {

    
    
    return (
        <Routes>
            <Route path='/mypage/*' element={ <MyPage />}/>
        </Routes>
    );
}

export default AccountRoute;