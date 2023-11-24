import { css } from '@emotion/react';

export const SClassInfo = css`
    width: 100%;
    height: 250px;
`;

export const STable = css`
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #dbdbdb;

    & thead {
        background-color: #eee;
    }

    & thead, tr, th, td {
        border: 1px solid #999;
        line-height: 30px;
        height: 30px;
        text-align: center;
    }
`;

export const SEmpty = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 100%;
`;