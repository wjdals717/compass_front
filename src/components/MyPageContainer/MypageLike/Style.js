import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

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

    li {
        width: 232px;
    }

    li:nth-of-type(3n+2) {
        margin: 0px 10px 20px;
    }

    li:not(.recent):nth-of-type(n) {
        margin-bottom: 15px;
    }
`;