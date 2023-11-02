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

    const handleSignupOnClick = () => {
        navigate("/auth/signup")
    }


    return (
        <RootContainer>
            <div css={S.SLayout}>
                <div css={S.SContainer}>
                        <h1 css={S.STitle}>로그인</h1>
                        <h2 css={S.STitle2}>학습 나침반의 가치를 느껴보세요.</h2>
                        
                    <div css={S.SLoginBox}>
                        <div css={S.SkakaoLoginBtn}><img src={kakaologin} onClick={handleLoginOnClick} /></div>
                        <div css={S.SNaverLoginBtn}><img css={S.SNaverBtn} src={naverlogin} onClick={handleLoginOnClick} /></div>
                    </div>
                    <div css={S.SSignupBtnBox}>
                        <div css={S.SSignupTitle}>
                            <span>계정이 없으신가요?</span>
                        </div>
                        <button onClick={handleSignupOnClick} css={S.SSignupBtn}>회원가입</button>
                    </div>
                </div>
            </div>
        </RootContainer>
    );
}

export default Signin;