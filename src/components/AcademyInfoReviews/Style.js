import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const SStar = css`
    color: yellow;
`;

export const SReviewContainer = css`
    width: 100%;
    height: 450px;
`;

export const SReviewScore = css`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 23px;
    &> * {
        margin-right: 5px;
    }
`;

export const SReviewListContainer = css`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

export const SReviewList = css`
    display: flex;
    border: 1px solid #dbdbdb;
    padding: 10px;

    & > h1 {
        margin-right: 20px;
    }

    & > div {
        margin-right: 20px;
    }

    & > span {
        flex-grow: 1;
    }
`;

export const SReviewInfo = css`
    display: flex;
    justify-content: space-between;
    width: 100%;

    & > button {
        margin-bottom: 10px;
        border: 1px solid #92C2F4;
        border-radius: 5px;
        width: 200px;
        font-size: 18px;
        font-weight: 600;
        background-color: #92C2F4;
        color: white;
        cursor: pointer;
    }
`;

export const SReviewBox = css`
    width: 100%;
    height: 120px;
    resize: none;
`;

export const SReviewUserScoreContainer = css`
    display: flex;

    & > h1 {
        font-size: 18px;
        margin-right: 10px;
    }
    & > div > input {
        border: none;
        width: 40px;
    }
    
`;