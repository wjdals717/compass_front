import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const STable = css`
    margin: 0 20px;
    width: 740px;
    height: 200px;
    
    th, td {
        vertical-align: middle;
    }

    td:nth-child(1){    //1번째 td인 경우
        font-weight: 600;
    }

    button {
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        background-color: white;
        padding: 3px 5px;
    }
`;

