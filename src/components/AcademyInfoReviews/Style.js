import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const SReviewContainer = css`
    width: 100%;
    margin-bottom: 30px;
`;

export const SReviewScore = css`
    display: flex;
    align-items: center;
    font-size: 23px;
    &> * {
        margin-right: 5px;
    }
`;

export const SReviewListContainer = css`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
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

export const ReviewEmpty = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
`;

export const SReviewInfo = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;

    & > button {
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
    justify-content: center;
    align-items: center;

    & > h2 {
        font-size: 18px;
        margin-right: 10px;
    }
    /* & > div > input {
        border: none;
        width: 40px;
    } */
`;

export const SStar = css`
    color: yellow;
`;

export const SPageNumbers = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    width: 100%;

    & button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        background-color: white;
        width: 30px;
        height: 30px;
        cursor: pointer;

        :disabled {
            background-color: white;
            border: none;
            cursor: default;
        }

        &.selected {
            background-color: #92c2f4;
        }
    }
`;