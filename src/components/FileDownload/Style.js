import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const SFileDownloadContainer = css`
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding-bottom: 20px;
    & > span {
        font-weight: 600;
    }
`;

export const SDownloadBox = css`
    margin: 5px;
    border: 1px solid #dbdbdb;
    border-radius: 20px;
    padding-top: 7px;
    width: 100px;
    height: 30px;
    text-align: center;
    background-color: white;
    box-shadow: 1px 5px 5px 1px #eee;
    cursor: pointer;
`;