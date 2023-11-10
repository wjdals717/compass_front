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

export const SEducationOfficeList = css`
    margin-right: 30px;
    cursor: pointer;
`;

export const SDistrictOptionList = (districtOptionShow) => css`
    ${districtOptionShow ? "" : "display: none"};
    margin-right: 30px;
    cursor: pointer;
`;