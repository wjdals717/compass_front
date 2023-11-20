import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const SLayout = css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 80px;
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
    margin-left: 30px;
    width: auto;
    height: 60px;
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

export const SDropLayout = css`
    cursor: pointer;
`;

export const SDropDown = css`
    position: absolute;
    top: 80px;
    border: 1px solid #dbdbdb;
    box-shadow: 0px 4px 10px 0px #dbdbdb;
    background-color: white;
    width: 150px;
    z-index: 1;
    & :hover{
        & * {
            color: #DD4022;
        }
        background-color: #eee;
    }
    & > li > * {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        cursor: pointer;
    }
    & li:first-of-type {
        border-bottom: 1px solid #dbdbdb;
    }
`;