import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */


// 기본 틀
export const SLayout = css`
    margin: 20px;
    width: 1100px;
`;

export const SContainer = css`
    box-sizing: border-box;
    background-color: #dbdbdd;
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

// 입력
export const SInputBox = css`
    position: relative;
    top: 60px;
    left: 35px;
    width: 350px;
    height: 50px;
`;

export const SInuptCompartment = css`

    & * {
        border: 1px solid #8c98a4;
        border-radius: 5px;
        width: 425px;
        height: 40px;
        margin-bottom: 10px;
    }
`;

// 로그인 페이지 이동 버튼
export const SSigninBtnBox = css`
    position: relative;
    top: 250px;
    left: 30px;
`;

export const SSigninTitle = css`
    font-size: 15px;
    color: #8c98a4;
    margin-left: 8px;
`;

export const SSigninBtn = css`
    color: #1976de;
    text-decoration: none;
    background-color: transparent;
    border-color: transparent;
    cursor: pointer;
`;

// 가입하기
export const SSignupBtnBox = css`
    position: relative;
    top: 210px;
    left: 365px;
`;

export const SSignupBtn = css`
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    width: 97px;
    height: 40px;
    background-color: #92C2F4;
    cursor: pointer;
`;