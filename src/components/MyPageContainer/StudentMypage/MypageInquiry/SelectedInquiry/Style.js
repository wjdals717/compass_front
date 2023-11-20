import { css } from '@emotion/react';

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

    & > span { 
        font-size: 20px;
    }
    & > p { 
        margin-top: 20px;
        margin-bottom: 10px;
    }

`;

export const SNameContainer= css`
    display: flex;
    justify-content: space-between;
`;

export const SName = css`
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 600;
`;

