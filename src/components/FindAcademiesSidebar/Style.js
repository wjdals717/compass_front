import { css } from '@emotion/react';

export const FilterLayout = css`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 100%;
`;

export const InitialContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5px;
    font-size: 16px;
`;

export const FilterContainer = css`
    margin-bottom: 20px;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    padding: 0 10px;
    font-size: 14px;

    h3 {
        padding: 10px;
        border-bottom: 3px solid #dbdbdb;
        font-weight: 600;
    }

    div {
        margin: 12px 5px;
        font-size: 14px;
    }

    input {
        margin-right: 10px;
    }
`;

