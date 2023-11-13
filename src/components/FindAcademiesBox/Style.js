import { css } from '@emotion/react';

export const UlBox = css`
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 10px;
    overflow: auto;

    li:nth-of-type(3n+2) {
        margin: 0px 20px;
    }

    li:not(.recent):nth-of-type(n) {
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