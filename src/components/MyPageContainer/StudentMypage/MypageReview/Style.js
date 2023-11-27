import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const SContainer = css`
    display: flex;
    flex-direction: column;
    margin: 40px 20px 20px;
    border: none;
    border-radius: 50px;
    padding: 30px 40px;
    width: 740px;
    box-shadow: 4px 4px 10px 4px #dbdbdb;
    background-color: white;
`;

export const SAcademyInfoBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    & span {
        display: flex;
        margin-left: 10px;
        color: gray;
    }

    & div:nth-child(1) {
        display: flex;
        align-items: center;
    }

    & div:nth-child(1) > div:nth-child(1) {
        border: 1px solid #dbdbdb;
        border-radius: 50px;
        padding: 10px;
        font-size: 16px;
        width: 300px;
    }

    button {
        margin-left: 5px;
    }
`;

export const ReviewScoreBox = css`
    display: flex;
    align-items: center;
    margin: 10px 0;
    height: 30px;

    svg {
        margin-right: 5px;
    }
`;

export const ReviewContentBox = css`
    border: 1px solid #dbdbdb;
    border-radius: 20px;
    padding: 10px;
    width: 100%;
    min-height: 100px;
    font-size: 16px;
    resize: none;
    overflow-wrap: break-word;
`;