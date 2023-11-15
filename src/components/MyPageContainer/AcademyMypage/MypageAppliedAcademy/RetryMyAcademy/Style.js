import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const SContainer = css`
    display: flex;
    flex-direction: column;
    margin: 40px 20px 20px;
    border: none;
    border-radius: 50px;
    padding: 30px 40px;
    width: 740px;
    box-shadow: 4px 4px 10px 4px #dbdbdb;
    background-color: white;
`;

export const SInfo = css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: red;
`;

export const SNameContainer= css`
    display: flex;
    justify-content: space-between;

    & > p {
        font-size: 13px;
        color: #999;
    }
`;

export const SName = css`
    margin: 20px 0;
    font-size: 20px;
    font-weight: 600;
`;

export const SRejectReason = css`
    margin-bottom: 10px;
    font-size: 16px;
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

export const SButtonContainer = css`
    display: flex;
    justify-content: center;
    margin: 20px 0;
    width: 100%;
`;

export const SSubmitButton = css`
    border: 1px solid #dbdbdb;
    border-radius: 20px;
    width: 500px;
    font-size: 20px;
    height: 40px;
    background-color: #92C2F4;
    color: white;
    font-size: 23px;
    box-shadow: 1px 5px 5px 1px #eee;
    cursor: pointer;
`;