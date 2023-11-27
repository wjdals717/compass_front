/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const SPageNumbers = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
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
            cursor: default;
        }

        &.selected {
            background-color: #5FA8D3;
        }
    }
`;
