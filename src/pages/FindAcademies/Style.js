import { css } from '@emotion/react';

export const SearchLayout = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid #92c2f4;
    padding: 30px 10px;

    h1 {
        font-size: 24px;
    }
`;

export const SearchContainer = css`
    display: flex;

    *:not(*:nth-of-type(2)) {
        margin-left: 5px;
    }

    /* input이랑 button 나중에 global 지정하도록 */
    & > input {
        width: 300px;
        border-radius: 5px;
        border: 1px solid #dbdbdb;
    } 

    & > button {
        padding: 10px;
        border: 0px;
        border-radius: 5px;
        width: 100px;
        background-color: #92c2f4;
        color: white;
        font-size: 18px;
    }
`;


export const PageLayout = css`
    position: relative;
    display: flex;
    padding: 0 10px;
    width: 100%;
    height: 100%;
`;

export const PageContainer = css`
    width: 980px;
    padding: 0 60px;
`;

export const InfoBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
`;

export const HeaderBox = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;

    div {
        display: flex;
        align-items: center;
        color: #aaa;
    }
`;

export const ClassifyBox = css`
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    padding: 5px;
`;

export const UlBox = css`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 10px;
    overflow: auto;

    strong {
        border-bottom: 1px solid #dbdbdb;
        padding-bottom: 10px;
        margin-bottom: 10px;
        font-size: 18px;
        text-align: center;
        width: 100%;
    }

    li:nth-of-type(3n+2) {
        margin: 0px 20px 20px;
    }

    li:not(.recent):nth-of-type(n) {
        margin-bottom: 15px;
    }
`;

export const LiBox = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    padding: 20px;
    width: 272px;
    box-shadow: 1px 5px 5px 1px #eee;
    cursor: pointer;

    img {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        border: 1px solid #dbdbdb;
        border-radius: 10px;
        width: 230px;
        height: 230px;
    }

    & * {
        margin-bottom: 5px;
    }

    & div:nth-last-of-type(1) {
        margin-bottom: 0;
    }
`;

export const PageButtonContainer = css`
    display: flex;
    justify-content: center;
`;

export const Span = (hasOptions) => css`
    display: ${hasOptions ? "none" : "flex"};
    font-size: 12px;
    color: #aaa;
`;

export const SRandomImg = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    border-radius: 10px;
    width: 230px;
    height: 230px;
    & span {
        font-size: 50px;
        font-weight: 600;
        color: #fff;
    }
`;

export const SAcademiesContainer = css`
    display: flex;
    flex-direction: column;
    `

export const SPageNumbers = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
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
            background-color: #eee;
            cursor: default;
        }

        &.selected {
            background-color: #92c2f4;
        }
    }
`;