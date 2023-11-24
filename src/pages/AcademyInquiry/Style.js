import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const SLayout = css`
    margin: 40px auto;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    padding: 20px 50px;
    width: 1100px;
    background-color: #F6FBFF;
    box-shadow: 4px 4px 10px 0px #dbdbdb;

    h1 {
        margin: 20px 0;
        padding-bottom: 20px;
        border-bottom: 2px solid #89BBDD;
        font-size: 22px;
        font-weight: 600;
    }
`;

export const AcademyContainer = css`
    display: flex;
    align-items: center;
    margin: 10px 0;

    div {
        margin: 0 10px;
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        padding: 10px;
        height: 40px;
        text-align: center;
        background-color: white;
    }
`;

export const InputContainer = css`
    display: flex;
    flex-direction: column;

    input, textarea {
        margin: 10px 0;
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        padding: 10px;
        text-align: left;
        width: 100%;
    }

    input { height: 40px; }
    textarea { height: 430px; }
`;

export const ButtonContainer = css`
    display: flex;
    justify-content: right;

    & button {
        border: 1px solid #dbdbdb;
        border-radius: 10px;
        padding: 10px 30px;
        background-color: #5FA8D3;
        font-size: 18px;
        font-weight: 500;
        color: white;
        cursor: pointer;
        :active {
            background-color: #477E9E;
        }
    }
`;