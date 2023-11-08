import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const STopContainer = css`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 40px auto;
    border: none;
    border-radius: 50px;
    padding: 30px 40px 20px;
    width: 800px;
    box-shadow: 4px 4px 10px 4px #dbdbdb;
`;

export const SH1 = css`
    margin-bottom: 25px;
    font-size: 30px;
    font-weight: 600;
`;

export const STopSpan = css`
    margin-bottom: 15px;
    color: #999;
`;

export const SMatchButtonContainer = css`
    margin-top: 15px;
    & > input {
        display: none;
    }

    & > input + label {
        margin: 0px 25px;
        border: 1px solid #dbdbdb;
        border-radius: 25px;
        padding: 10px 30px;
        background-color: white;
        font-size: 23px;
        box-shadow: 1px 5px 5px 1px #eee;
        cursor: pointer;
    }

    & > input:checked+label {
        background-color: #92C2F4;
        color: white;
    }
    
`;



export const SContainer = css`
    display: flex;
    flex-direction: column;
    margin: 40px auto;
    border: none;
    border-radius: 50px;
    padding: 30px 40px 10px;
    width: 800px;
    box-shadow: 4px 4px 10px 4px #dbdbdb;
`;

export const SContainerName = css`
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 600;
`;

export const SModalBtn = css`
    background-color: transparent;
    border: transparent;
    cursor: pointer;
`;

export const SModalContainer = css`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    
    &.hiden {
        display: none;
    }
`;

export const SModalDocument = css`
    margin-bottom: 10px;
`;

export const SModalContent = css`
    position: absolute;
    background-color: #dbdbdb;
    border-radius: 5px;
    width: 300px;
    height: 250px;
    padding: 15px;
`;

export const SModalClosebtn = css`
    position: relative;
    top: 30px;
    left: 220px;
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

export const SFileUploadContainer = css`
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
`;

// 필요할까요?
export const SUploadButton = css`
    margin-top: 5px;
    border: 1px solid #dbdbdb;
    border-radius: 20px;
    width: 100%;
    height: 30px;
    background-color: white;
    box-shadow: 1px 5px 5px 1px #eee;
    cursor: pointer;
`;

export const SUpload = css`
    width: 310px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    cursor: pointer;
`;

export const SImgContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -20px;
    width: 100%;
`;

export const SImg = css`
    width: 500px;
`;

export const SButtonContainer = css`
    display: flex;
    justify-content: center;
    margin: 30px 0px;
    width: 100%;
`;

export const SSpanContainer = css`
    margin: 10px auto;
    width: 600px;

    & > span {
        color: #999;
    }
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
