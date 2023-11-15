import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const SMainLayout = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    height: 400px;
`;

export const STextContainer = css`
    font-size: 28px;
    & b {
        font-size: 32px;
        font-weight: 700;
    }
    & h1 {
        margin-bottom: 10px;
    }
`;

export const SImgBox = css`
    width: 450px;
    height: 100%;
`;

export const SSearchContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0;
    height: 50px;
    & > div {
        height: 100%;
    }
    & * {
        font-size: 15px;
    }
`;

export const SInputBox = css`
    & > input {
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        padding: 10px;
        outline: none;
        width: 650px;
        height: 100%;
    }
`;

export const SSelectBox = css`
    cursor: pointer;

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        width: 200px;
        height: 100%;
        background-color: white;
        color: #666;
    }
`


export const SSearchBtnBox = css`
    & > button {
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        width: 100px;
        height: 100%;
        background-color: #35AFCC;
        cursor: pointer;
    }
    & > button > svg {
        color: white;
        font-size: 25px;
    }
`

export const SRegistContainer = css`
    position: relative;
    margin: 0px 50px;
    border-radius: 20px;
    padding: 30px;
    width: 100%;
    height: 380px;
`;

export const SImg = css`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    object-fit: cover;
    width: 500px;
    height: 330px;
`;

export const SRegistTitle = css`
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 600;
`;

export const SLinkContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;