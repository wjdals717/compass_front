import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const SComment = css`
    margin: 30px 20px 10px;
    font-size: 16px;
`;

export const STable = css`
    margin: 0 20px;
    width: 740px;
    background-color: white;

    thead {
        background-color: #dbdbdb;
    }

    thead, tr, td {
        height: 40px;
        border: 1px solid #ccc;
        vertical-align: middle;
        text-align: center;
        overflow: auto;
        cursor: default;
    }
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
