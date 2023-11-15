import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const Common = css`
    * {
        box-sizing: border-box;
        
    }
`;

export const SButton = css`
    position: relative;
    border: 0;
    padding: 5px 8px;
    display: inline-block;
    text-align: center;
    color: white;
    background-color: #7fb1bf;
    :active {
        top: 4px; 
        box-shadow: 0 0 #74a3b0; 
        background-color: #709CA8;
    }

`