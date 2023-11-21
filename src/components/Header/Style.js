import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const SLayout = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    height: 80px;
    background-color: white;
    font-size: 18px;
    font-weight: 500;

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
    margin-right: 20px;
`;

export const SButtonBox = css`
    margin-left: 30px;
    & a {
        transition: all ease 0.3s;
        padding: 25px 40px;
        color: black;
        width: 200px;
        &:hover {
            font-size: 20px;
        }
    }
`;

export const SLoginButtonBox = css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    padding: 25px 40px;
    font-size: 18px;
    & * {
        color: black;
    }
`;

export const SDropLayout = css`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    & svg {
        margin-left: 5px;
    }
`;

export const SDropDown = css`
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translate(-50%, 0);
    border: 1px solid #dbdbdb;
    box-shadow: 0px 4px 10px 0px #dbdbdb;
    background-color: white;
    width: 180px;
    z-index: 1;
    font-size: 18px;
    & :hover{
        & * {
            color: white;
        }
        background-color: #B1CCDF;
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