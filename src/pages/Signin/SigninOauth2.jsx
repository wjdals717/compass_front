import React from 'react';
import { useQueryClient } from 'react-query';
import { Navigate, useSearchParams } from 'react-router-dom';

function SigninOauth2(props) {  // /auth/oauth2/signin
    // 서버로부터 redirection해서 들어온 token을 localStorage에 저장하는 과정
    const [ searchParams, setSearchParams ] = useSearchParams();
    const queryClient = useQueryClient();

    const token = searchParams.get("token");

    if(token) {
        const accessToken = "Bearer " + token;

        // 토큰이 만료 되었을 경우

        const decodedToken = decodeToken(token); // 토큰 디코딩 함수를 사용하여 토큰 디코딩
        const expirationTime = decodedToken.exp * 1000 // 만료 시간 (밀리초 단위)
        
        if(Date.now() > expirationTime) {
            localStorage.removeItem("accessToken");
        } else {
            localStorage.setItem("accessToken", accessToken);
        }
    }

     // getPrincipal 쿼리 다시 호출
    queryClient.refetchQueries(["getPrincipal"]);
    // localStorage.setItem("accessToken", "Bearer " + searchParams.get("token"));

    return <Navigate to={"/"} />
}

// 토큰 디코딩 함수 (실제로 사용하는 라이브러리에 따라 달라질 수 있음)
function decodeToken(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(atob(base64));
}


export default SigninOauth2;