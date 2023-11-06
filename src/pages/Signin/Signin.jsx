import React from 'react';
import RootContainer from '../../components/RootContainer/RootContainer';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import kakaologin from "./kakaobar.png"
import naverlogin from "./naver login.png"
import { useNavigate } from 'react-router-dom';

function Signin(props) {

    const navigate = useNavigate();

    const handleLoginOnClick = () => {
        navigate("/")
    }

    const handleNaverLogin = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/naver";
    }

    return (
        <RootContainer>
            <div css={S.SLayout}>
                <div css={S.SContainer}>
                    <h1 css={S.STitle}>로그인</h1>
                    <h2 css={S.STitle2}>학습 나침반의 가치를 느껴보세요.</h2>
                        
                    <div css={S.SLoginBox}>
                        <div css={S.SkakaoLoginBtn}><img src={kakaologin} onClick={handleLoginOnClick} /></div>
                        <div css={S.SNaverLoginBtn}><img css={S.SNaverBtn} src={naverlogin} onClick={handleNaverLogin} /></div>
                    </div>
                </div>
            </div>
        </RootContainer>
    );
}

export default Signin;