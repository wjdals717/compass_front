import React, { useState } from 'react';
import RootContainer from '../../components/RootContainer/RootContainer';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { instance } from '../../api/config/instance';

function DetailSignup(props) {  // /auth/detail/signup
    const [ searchParams, setSearchParams ] = useSearchParams();
    const navigate = useNavigate();

    const [ signupUser, setSignupUser ] = useState({
        email: "",
        oauth2Id: searchParams.get("oauth2Id"),
        name: searchParams.get("name"),
        nickname: "",
        phone: "",
        provider: searchParams.get("provider")
    });

    const handleSigninOnClick = () => {
        navigate("/auth/signin")
    }

    const handleInputChange = (e) => {
        setSignupUser({
            ...signupUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSignupSubmit = async () => {
        try {
            const response = await instance.post("/auth/signup", signupUser);
            alert("회원가입 완료");
            window.location.replace("/auth/signin");
        } catch (error) {
            console.error(error);
            if(Object.keys(error.response.data).includes("email")) {
                alert("이미 사용중인 이메일입니다. 다시 입력하세요.");
            } else if(Object.keys(error.response.data).includes("nickname")) {
                alert("이미 사용중인 닉네임입니다. 다시 입력하세요.");
            }
        }
    }
    
    return (
        <RootContainer>
            <div css={S.SLayout}>
                <div css={S.SContainer}>
                        <h1 css={S.STitle}>회원가입</h1>
                        <h2 css={S.STitle2}>필요한 정보들을 기입해주세요.</h2>

                    <div css={S.SInputBox}>
                        <div css={S.SInuptCompartment}>
                            <div><input type="email" name="email" placeholder='이메일' onChange={handleInputChange}/></div>
                            <div><input type="text" name="name" placeholder='이름' disabled={true} value={signupUser.name}/></div>
                            <div><input type="text" name="nickname" placeholder='닉네임' onChange={handleInputChange}/></div>
                            <div><input type="text" name="phone" placeholder='전화번호' onChange={handleInputChange}/></div>
                        </div>
                    </div>

                    <div css={S.SSigninBtnBox}>
                        <div css={S.SSigninTitle}>
                            <span>이미 계정이 있으신가요?</span>
                        </div>
                        <button css={S.SSigninBtn} onClick={handleSigninOnClick}>로그인</button>
                    </div>
                    <div css={S.SSignupBtnBox}>
                        <button css={S.SSignupBtn} onClick={handleSignupSubmit}>가입하기</button>
                    </div>
                </div>
            </div>
        </RootContainer>
    );
}

export default DetailSignup;