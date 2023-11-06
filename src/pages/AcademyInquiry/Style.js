import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const SLayout = css`
    margin: 20px auto;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    padding: 20px 50px;
    width: 1100px;

    h1 {
        margin: 20px 0;
        font-size: 20px;
        font-weight: 600;
    }

`;

export const AcademyContainer = css`
    display: flex;
    align-items: center;
    margin: 10px 0;

    div {
        margin-right: 20px;
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        padding: 10px;
        width: 200px;
        text-align: center;
    }
`;

export const InputContainer = css`
    display: flex;
    flex-direction: column;

    input {
        margin: 10px 0;
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        padding: 10px;
        text-align: center;
        width: 100%;
    }

    input:nth-child(2) {
        height: 500px;
    }
`;

export const ButtonContainer = css`
    display: flex;
    justify-content: right;

    button {
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        padding: 10px;
    }
`;