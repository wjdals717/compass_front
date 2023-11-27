/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const SLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SPageNumbers = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    border: 1px solid #dbdbdb;
    width: min-content;
    box-shadow: 0px 0px 10px 0px #dbdbdb;
    overflow: hidden;

    &:first-of-type {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    &:last-of-type {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    & button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        /* border-radius: 50%; */
        background-color: white;
        width: 40px;
        height: 40px;
        cursor: pointer;

        :disabled {
            background-color: white;
            cursor: default;
        }

        &.selected {
            color: #5FA8D3;
            font-weight: 600;
        }
        :hover:not(:disabled) {
            background-color: #EDF2F6;
        }
    }
`;
