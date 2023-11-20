import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */


// 기본 틀
export const SLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SContainer = css`
    margin: 50px auto;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    padding: 50px;
    width: 500px;
    height: 600px;
    & > * {
        margin-bottom: 30px;
    }
`;

// 제목
export const STitle = css`
    font-size: 30px;
    font-weight: 1000;
`;

export const STitle2 = css`
    color: #8c98a4;
`;

export const SLoginBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
`;

// 로그인
export const SkakaoLoginBtn = css`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    border-radius: 5px;
    margin-top: 10px;
    width: 300px;
    background-color: #FEE500;
    cursor: pointer;
`;

export const SNaverLoginBtn = css`
    display: flex;
    justify-content: center;
    border-radius: 5px;
    width: 300px;
    background-color: #03c75a;
    cursor: pointer;
`;

export const SKakaoBtn = css`
    height: 50px;
`

export const SNaverBtn = css`
    height: 50px;
`;

// 회원가입 페이지 이동
export const SSignupBtnBox = css`
    position: relative;
    top: 250px;
    left: 30px;
`;

export const SSignupTitle = css`
    font-size: 15px;
    color: #8c98a4;
    margin-left: 8px;
`;

export const SSignupBtn = css`
    color: #1976de;
    text-decoration: none;
    background-color: transparent;
    border-color: transparent;
    cursor: pointer;
`;

export const SMainLogo = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: auto;
`;