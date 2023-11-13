import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const SLayout = css`
    width: 100%;
`;

export const SHeadContainer = css`
    display: flex;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    width: 100%;
    overflow: hidden;

    & > input {
        border: none;
        outline: none;
        padding: 10px;
        margin-right: 5px;
        flex-grow: 1;
    }

    & > button {
        width: 70px;
        height: 40px;
    }
`;

export const SBodyContainer = css`
    border: 1px solid #ccc;
    border-radius: 5px;

    padding: 10px;
    width: 100%;
    height: 400px;
    overflow-y: auto;
`;

export const SList = css`
    display: flex;

    & > div {
        display: flex;
        align-items: center;
        margin: 5px 0px;
        border-bottom: 1px solid #dbdbdb;
        padding: 5px;
    }

    & > :nth-of-type(1) {
        width: 15%;
    }
    & > :nth-of-type(2) {
        width: 15%;
    }
    & > :nth-of-type(3) {
        width: 60%;
    }
    & > :nth-of-type(4) {
        width: 10%;
    }
`;

export const STitleName = css`
    padding: 20px 0px 5px 0px;
`;

export const SChoiceBox = css`
    display: flex;
    align-items: center;
    /* justify-content: center; */
    margin: 5px 0px;
    width: 100%;
    height: 50px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    padding: 5px;
`;

