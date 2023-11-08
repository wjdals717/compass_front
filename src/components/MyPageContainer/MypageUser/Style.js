import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const SLayout = css`
    & button {
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        background-color: white;
        padding: 3px 5px;
        cursor: pointer;
    }
`;

export const STitleLayout = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    
`;

export const STable = css`
    margin: 0 20px;
    width: 740px;
    height: 200px;
    
    th, td {
        vertical-align: middle;
        height: 50px;
    }

    td:nth-of-type(1){    //1번째 td인 경우
        width: 150px;
        font-weight: 600;
    }

    td button {
        margin-left: 10px;
    }
`;

