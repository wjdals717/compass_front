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
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 10px;
    overflow: auto;

    li:nth-child(3n+2) {
        margin: 0px 20px;
    }

    li:not(.recent):nth-child(n) {
        margin-bottom: 15px;
    }
`;

export const LiBox = css`
    display: flex;
    flex-direction: column;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    padding: 10px;

    img {
        border-radius: 10px;
        width: 250px;
        height: 200px;
    }
`;

