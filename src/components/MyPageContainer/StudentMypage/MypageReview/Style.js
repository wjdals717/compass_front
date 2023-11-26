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
        font-weight: 600;
    }

    & div:nth-child(1) {
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
    margin: 10px 0;
`;

export const ReviewContentBox = css`
    & div:nth-child(1) {
        border: 1px solid #dbdbdb;
        border-radius: 20px;
        padding: 10px;
        font-size: 16px;
        width: 100%;
        min-height: 100px;
        overflow-wrap: break-word;
    }
`;

export const ReviewInputScoreBox = css`
    padding: 5px 0px;
`;

export const ReviewInputContentBox = css`
    border: 1px solid #dbdbdb;
    border-radius: 20px;
    padding: 10px;
    width: 100%;
    height: 120px;
    font-size: 16px;
    width: 100%;
    resize: none;
`;