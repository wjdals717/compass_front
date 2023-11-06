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
    height: 400px;
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

