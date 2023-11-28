import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const ContentBox = css`
    max-width: 200px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export const SContainer = css`
    display: flex;
    flex-direction: column;
    border: none;
    border-radius: 50px;
    padding: 30px 40px;
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
        cursor: pointer;
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
    line-height: 1.2em;
    resize: none;
    overflow-wrap: break-word;
`;