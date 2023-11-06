import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const SInterestAcademyBox = css`
    position: relative;
    bottom: 230px;
    left: 300px;
    border-radius: 20px;
    box-shadow: 4px 4px 10px 4px #dbdbdb;
    padding: 30px;
    width: 70%;
    height: 100%;
    background-color: wheat;

    & h2 {
        margin-bottom: 20px;
        font-size: 20px;
        font-weight: bold;
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

export const STable = css`
    margin: 0 20px;
    width: 740px;
    height: 200px;
    background-color: white;

    thead {
        background-color: #dbdbdb;
    }

    thead, tr, td {
        height: 50px;
        vertical-align: middle;
        text-align: center;
        overflow: auto;
    }

    td:nth-child(1){    //1번째 td인 경우
        font-weight: 600;
    }

    button {
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        background-color: white;
        padding: 3px 5px;
    }
`;

