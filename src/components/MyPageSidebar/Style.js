import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */


export const MySidebarLayout = css`
    flex-shrink: 0;
    border-radius: 5px;
    padding: 30px 20px;
    background-color: white;
    border: 1px solid #dbdbdb;
    width: 300px;
    height: 100%;

    & a {
        text-decoration: none;
        color: black;
    }

    .active {
        border-radius: 15px;
        background-color: #2E739D;
        color: white;
        font-weight: 500;
    }

`;

export const UserContainer = css`
    display: flex;
    align-items: center;
    padding: 0 12px;

    h2 {
        font-size: 18px;
        font-weight: 600;
        margin-right: 10px;
    }

    & div {
        border: 1px solid #dbdbdb;
        border-radius: 10px;
        padding: 4px 10px 4px 3px;
    }
`;

export const IconContainer = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #dbdbdb;
    padding: 20px 0;

    & div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
    }

    & span {
        margin: 5px;
    }
`;

export const RoleContainer = css`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    & a {
        padding: 12px;
    }
`;

export const InquiryBox = css`
    display: flex;
    align-items: center;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
        border: 1px solid red;
        border-radius: 50%;
        padding: 0px;
        width: 15px;
        height: 15px;
        color: white;
        background-color: red;
    }
`;