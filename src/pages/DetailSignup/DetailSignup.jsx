import React from 'react';
import RootContainer from '../../components/RootContainer/RootContainer';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"

function DetailSignup(props) {
        const navigate = useNavigate();

        const user = {
            email: "",
            name: "",
            nickname: "",
            phone: ""
        }

        const handleSigninOnClick = () => {
            navigate("/auth/signin")
        }
    
        const handleSignupOnClick = () => {

            
            alert("회원가입 완료!")
            navigate("/")
        }
    
        
    
    
        return (
            <RootContainer>
                <div css={S.SLayout}>
                    <div css={S.SContainer}>
                            <h1 css={S.STitle}>회원가입</h1>
                            <h2 css={S.STitle2}>필요한 정보들을 기입해주세요.</h2>
    
                        <div css={S.SInputBox}>
                            <div css={S.SInuptCompartment}>
                                <div><input type="email" name="email" placeholder='이메일'  /></div>
                                <div><input type="text" name="name" placeholder='이름' /></div>
                                <div><input type="text" name="nickname" placeholder='닉네임' /></div>
                                <div><input type="text" name="phone" placeholder='전화번호' /></div>
                            </div>
                        </div>
    
                        <div css={S.SSigninBtnBox}>
                            <div css={S.SSigninTitle}>
                                <span>이미 계정이 있으신가요?</span>
                            </div>
                            <button css={S.SSigninBtn} onClick={handleSigninOnClick}>로그인</button>
                        </div>
                        <div css={S.SSignupBtnBox}>
                            <button css={S.SSignupBtn} onClick={handleSignupOnClick}>가입하기</button>
                        </div>
                    </div>
                </div>
            </RootContainer>
        );
    }

export default DetailSignup;