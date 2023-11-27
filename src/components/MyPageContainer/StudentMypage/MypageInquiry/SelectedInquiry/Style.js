import { css } from '@emotion/react';

export const SContainer = css`
    display: flex;
    flex-direction: column;
    border: none;
    border-radius: 50px;
    padding: 30px 40px;
    box-shadow: 4px 4px 10px 0px #dbdbdb;
    background-color: white;
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

export const SAnswerStatusColor = (answer) => css`
    color: ${answer !== null ? 'blue' : 'red'};
`;

export const SInfoContainer = css`
    display: flex;
    margin-bottom: 10px;
    width: 660px;
    align-items: center;

    span {
        width: 100px;
        font-size: 18px;
        overflow-wrap: break-word;
    }

    div {
        border: 1px solid #eee;
        border-radius: 10px;
        padding: 10px;
        width: 560px;
        background-color: #eee;
        overflow-wrap: break-word;
    }
`;

export const SInquiryAnswer = css`

`;

export const SButtonContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    & button {
        border: none;
        border-radius: 20px;
        padding: 5px 0;
        width: 300px;
        background-color: #5FA8D3;
        font-size: 18px;
        color: white;
        cursor: pointer;
        :active {
            background-color: #477E9E;
        }
    }
`;