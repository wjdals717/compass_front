import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const UlBox = css`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
    overflow: auto;

    li:nth-of-type(3n+2) {
        margin: 0 auto;
    }

    li:nth-of-type(n) {
        margin-bottom: 15px;
    }
`;

export const LiBox = css`
    display: flex;
    flex-direction: column;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    padding: 10px;
    background-color: white;
    font-size: 16px;

    img {
        margin-bottom: 5px;
        border-radius: 10px;
        width: 230px;
        height: 200px;
    }

    strong {
        margin: 5px 0;
        font-weight: 600;
    }

    div {
        margin: 5px 0;
    }
`;