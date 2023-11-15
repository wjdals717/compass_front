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

export const SEducationOfficeListItem = css`
    margin-bottom: 5px;
    border-radius: 10px;
    padding: 8px 10px;
    width: 170px;
    font-size: 18px;
    color: #666;
`;

export const SCategoryListItemSelected = css`
    background-color: #92C2F4;
    color: white;
    font-weight: bold;
`;

export const SDistrictOptionList = (districtOptionShow) => css`
    ${districtOptionShow ? "" : "display: none"};
    overflow-y: auto; /* 세로 스크롤이 필요한 경우만 스크롤을 보여줌 */
    max-height: 700px;
    cursor: pointer;
`;

export const SDistrictOptionListItem = css`
    border-radius: 10px;
    padding: 10px 10px;
    width: 300px;
    color: #333;
`;

export const SDistrictOptionListItemSelected = css`
    background-color: #92C2F4;
    color: white;
`;

export const ButtonContainer = css`
    display: flex;
    justify-content: space-between;
`;