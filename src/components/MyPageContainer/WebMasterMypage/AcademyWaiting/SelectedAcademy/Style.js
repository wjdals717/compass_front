import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const SContainer = css`
    display: flex;
    flex-direction: column;
    border: none;
    border-radius: 50px;
    padding: 30px 40px;
    box-shadow: 4px 4px 10px 4px #dbdbdb;
    background-color: white;
`;

export const SName = css`
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 600;
`;

export const SSelectBoxContainer = css`
    padding-bottom: 30px;
    & > p {
        padding-bottom: 10px;
    }
`;

export const SChoiceBox = css`
    display: flex;
    align-items: center;
    margin: 5px 0px;
    width: 100%;
    height: 50px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    padding: 5px;
`;

export const SNameContainer= css`
    display: flex;
    justify-content: space-between;

    & > p {
        font-size: 13px;
        color: #999;
    }
`;

export const SSelectedAcaContainer = css`
    margin-bottom: 20px;
`;

export const SAcademyInfoBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    font-size: 16px;
    & > div {
        flex-grow: 1;
        margin: 10px;
    }
    & > div > span {
        margin-left: 10px;
        font-weight: 600;
    }
    & > div > div {
        margin-top: 5px;
        border: 1px solid #dbdbdb;
        border-radius: 15px;
        padding: 12px 10px;
        box-shadow: 1px 5px 5px 1px #eee;
    }
`;

export const SButtonBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    & button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #dbdbdb;
        border-radius: 20px;
        padding: 25px 40px;
        box-shadow: 1px 5px 5px 1px #eee;
        height: 40px;
        font-size: 24px;
        font-weight: 600;
        color: white;
        cursor: pointer;
    }
`;

export const SDeclineBtn = css`
    background-color: #f49292;
    margin-right: 20px;
    :active {
        background-color: #d87474;
    }
`;

export const SApprovalBtn = css`
    background-color: #92c2f4;
    :active {
        background-color: #5a8fd8;
    }
`;