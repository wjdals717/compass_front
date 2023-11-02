import React from 'react';
import RootContainer from '../../components/RootContainer/RootContainer';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import kakaoStart from "./kakaoStart.png"
import naverStart from "./스크린샷 2023-11-02 151516.png"

function Signup(props) {
    const navigate = useNavigate();

    const handleDetailSignupOnClick = () => {
        navigate("/auth/detail/signup")
    }

    const handleSigninOnClick = () => {
        navigate("/auth/signin")
    }


    return (
        <RootContainer>
            <div css={S.SLayout}>
                <div css={S.SContainer}>
                        <h1 css={S.STitle}>회원가입</h1>
                        <h2 css={S.STitle2}>회원가입 후 많은 정보를 얻어보세요.</h2>

                    <div css={S.SDetailSignupBox}>
                        <div css={S.SkakaoDetailSignupBtn}><img src={kakaoStart} onClick={handleDetailSignupOnClick} /></div>
                        <div css={S.SNaverDetailSignupBtn}><img css={S.SNaverBtn} src={naverStart} onClick={handleDetailSignupOnClick} /></div>
                    </div>

                    <div css={S.SSigninBtnBox}>
                        <div css={S.SSigninTitle}>
                            <span>이미 계정이 있으신가요?</span>
                        </div>
                        <button css={S.SSigninBtn} onClick={handleSigninOnClick}>로그인</button>
                    </div>
                </div>
            </div>
        </RootContainer>
    );
}

export default Signup;