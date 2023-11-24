import { css } from '@emotion/react';

export const LiBox = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    padding: 20px;
    width: 240px;
    box-shadow: 1px 5px 5px 1px #eee;
    background-color: white;
    color: #777;
    font-size: 15px;
    cursor: pointer;

    img {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        border: 1px solid #dbdbdb;
        border-radius: 10px;
        width: 200px;
        height: 200px;
    }

    & strong {
        color: black;
        font-weight: 500;
    }

    & * {
        margin-bottom: 5px;
    }

    & svg {
        margin: 0;
        margin-right: 3px;
        font-size: 13px;
    }

    & div:nth-last-of-type(1) {
        margin-bottom: 0;
    }
`;

export const SAddress = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SRandomImg = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    border-radius: 10px;
    width: 200px;
    height: 200px;
    & span {
        font-size: 50px;
        font-weight: 600;
        color: #fff;
    }
`;

export const SLikeAndRating = css`
    display: flex;
    justify-content: space-between;
    width: 198px;
`;