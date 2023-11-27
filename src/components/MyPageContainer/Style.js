import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */


export const SInterestAcademyBox = css`
    flex-grow: 1;
    padding: 0 50px;
    background-color: white;

    & h2 {
        padding-bottom: 20px;
        border-bottom: 3px solid #5FA8D3;
        margin-bottom: 20px;
        font-size: 20px;
        font-weight: bold;
    }

    & > div > div {
        width: 800px;
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        padding: 40px;
        background-color: #F8FBFD;
    }
`;

export const SInterestTitle = css`
    font-size: 20px;
    font-weight: bold;
`;

export const SInterestList = css`
    padding: 10px 0px;
    box-sizing: content-box;
`;

export const SComment = css`
    margin: 10px 0 20px;
`;

export const STable = css`
    width: 100%;
    background-color: white;

    thead {
        background-color: #dbdbdb;
    }

    th, tr, td {
        line-height: 40px;
        height: 40px;
        border: 1px solid #ccc;
        vertical-align: middle;
        text-align: center;
        overflow: auto;
        cursor: default;
    }

    input {
        outline: none;
        border: none;
        padding: 0 10px 0;
        width: 100%;
        overflow-wrap: break-word;
    }

    tbody td {
        cursor: pointer;
    }
`;

export const SOptionBox = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 760px;
    margin-bottom: 10px;
    
`;

export const SSelect = css`
    width: 200px;
`;

export const SEmptyBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    font-size: 18px;
    color: #777;
`;