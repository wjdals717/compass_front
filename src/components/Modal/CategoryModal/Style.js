import { css } from '@emotion/react';

export const SLayout = css`
    margin: 0 auto; 
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    padding: 30px;
    width: 50%;
    max-width: 600px; 
    background-color: white;
`;

export const SListContainer = css`
    display: flex;
    margin: 20px auto;
    cursor: pointer;
`;

export const SCategoryList = css`
    margin-right: 30px;
    white-space: normal;
    cursor: pointer;
`;

export const SCategoryDetailList = (detailOptionShow) => css`
    ${detailOptionShow ? "" : "display: none"};
    margin-right: 30px;
    height: 800px;
    cursor: pointer;
`;

export const SCategoryListItem = css`
    margin-bottom: 5px;
    width: 70px;
    height: 30px;
`;

export const SCategoryListItemSelected = css`
    // 선택된 li에 대한 스타일
    // 예: backgroundColor: 'red',
`;