import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

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
    }

    td button {
        margin-left: 10px;
    }
`;

export const SButtonBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    padding: 0 20px 10px;

    & div {
        font-size: 17px;
        font-weight: 600;
    }
    & button {
        border: none;
        border-radius: 10px;
        padding: 5px 15px;
        background-color: #5FA8D3;
        color: white;
        font-size: 16px;
        cursor: pointer;
        :disabled {
            color: #dbdbdb;
            cursor: default;
        }
        :active {
            background-color: #5596BC;
        }
    }

    & div > button:first-of-type {
        margin-right: 5px;
        background-color: #f49292;
        
        :active {
            background-color: #dbdbdb;
        }
    }
`;
