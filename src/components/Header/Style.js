import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const SLayout = css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 65px;
    background-color: #92C2F4;

    & a { // & : 자신, a : 하위요소
        text-decoration: none;
    }
`;

export const SContainer = css`
    display: flex;
    align-items: center;
    
    
`;

export const SLogoButton = css`
    color: #dbdbdb;
    padding: 0px 20px 0px 100px;
    font-size: 30px;
    
`;

export const SButtonBox = css`
    & a {
        padding: 0px 20px 0px 20px ;
        color: black;
    }
`;

export const SLoginButtonBox = css`
    padding: 0px 50px 0px 30px;
    & * {
        color: black;
    }
`;

export const SDropDownbar = css`
    padding: 20px;
    position: relative;
    display: inline-block;
`;

export const SDropBtn = css`
    font-size: 16px;
    background-color: transparent;
    border: transparent;
    color: black;
    padding : 0px 50px 0px 30px;
    cursor : pointer;
`;

export const SDropDownContent = css`
    display: none;
    position: absolute;
    z-index: 1;
    margin: 22px 40px 0px 0px;
    padding: 6px 20px;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
`;

export const SDropDownContentVisible = css`
    display: block;
`;

export const SDropDownbarMenu = css`
    & * {
        color: black;
        text-decoration: none;
        text-align: center;
    }
`;

export const SBtn1 = css`
    padding: 5px;
    border-bottom: 1px solid black;
`;

export const SBtn2 = css`
    padding: 5px;
`;
