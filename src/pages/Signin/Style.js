import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */


// 기본 틀
export const SLayout = css`
    margin: 20px;
    width: 1100px;
`;

export const SContainer = css`
    box-sizing: border-box;
    background-color: #dbdbdb;
    width: 500px;
    height: 500px;
    position: relative;
    left: 300px;
`;

// 제목
export const STitle = css`
    font-size: 30px;
    font-weight: 1000;
    margin-bottom: 10px;
    display: flex;
    position: relative;
    top: 40px;
    left: 40px;
    
`;

export const STitle2 = css`
    position: relative;
    top: 40px;
    left: 40px;
    color: #8c98a4;
`;

export const SLoginBox = css`
    position: relative;
    top: 100px;
    left: 100px;
    width: 350px;
    height: 50px;
`;

// 로그인
export const SkakaoLoginBtn = css`
    margin-bottom: 10px;
    cursor: pointer;
`;

export const SNaverLoginBtn = css`
    cursor: pointer;
`;

export const SNaverBtn = css`
    width: 300px;
    height: 45px;
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

