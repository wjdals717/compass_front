import { css } from '@emotion/react';

export const SHead= (isHeaderFixed) => css`
    position: ${isHeaderFixed ? "fixed" : "static"};
    top: ${isHeaderFixed ? "-50px" : ""};
    left: ${isHeaderFixed ? "auto" : "0"};
    right: ${isHeaderFixed ? "auto" : "0"};
    display: flex;
    flex-direction: column;
    margin: 30px 0px 20px;
    border-bottom: 2px solid #dbdbdb;
    width: ${isHeaderFixed ? "1200px" : "100%"};
    background-color: white;
    z-index: 100;
`;

export const SAcademyInfoContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    width: 500px;
    height: 200px;
`;

export const SAcademtLogo = css`
    margin-right: 10px;
    border: 1px solid #888;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    overflow: hidden;
`;

export const SAcademyInfo = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    height: 150px;
`;

export const SAcademyName = css`
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 600;
`;

export const SAcademyLocation = css`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    & > * {
        margin-right: 4px;
    }
`;

export const SScoreAndReviewContainer = css`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    & > * {
        margin-right: 4px;
    }
`;

export const SAcademyStar = css`
    color: yellow;
    font-size: 17px;
`;

export const SStar = css`
    color: yellow;
`;

export const SMoveBar = css`
    display: flex;
    justify-content: space-between;
    font-size: 22px;
    & > input {
        display: none;
    }

    & > input + label {
        text-decoration: none;
        color: #999;
        cursor: pointer;
    }

    & > input:checked + label {
        border-bottom: 3px solid #92C2F4;
        padding-bottom: 2px;
        color: #333;
        
    }
`;

export const SNavigation = css`
    text-decoration: none;
`;

export const SIntroductionContainer  = css`
    width: 100%;
    height: 300px;  
`;

export const STitle = css`
    margin-bottom: 30px;
    font-size: 23px;
`;

export const SIntroduction = css`
    margin:0px 10px 10px;
    font-size: 18px;

    & > span {
        margin-left: 500px;
    }
`;

export const SConvenienceContainer = css`
    width: 100%;
    height: 200px;
`;

export const SReviewContainer = css`
    width: 100%;
    height: 450px;
`;

export const SReviewScore = css`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 23px;
    &> * {
        margin-right: 5px;
    }
`;

export const SReviewListContainer = css`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

export const SReviewList = css`
    display: flex;
    border: 1px solid #dbdbdb;
    padding: 10px;

    & > h1 {
        margin-right: 20px;
    }

    & > div {
        margin-right: 20px;
    }

    & > span {
        flex-grow: 1;
    }
`;

export const SReviewInfo = css`
    display: flex;
    width: 100%;

    & > h1 {
        font-size: 18px;
        margin-right: 10px;
    }
    & > div > input {
        border: none;
        width: 40px;
    }
    & > button {
        margin-left: 820px;
        margin-bottom: 10px;
        border: 1px solid #92C2F4;
        border-radius: 5px;
        width: 250px;
        font-size: 18px;
        font-weight: 600;
        background-color: #92C2F4;
        color: white;
        cursor: pointer;
    }
`;

export const SClassInfo = css`
    width: 100%;
    height: 300px;
`;

export const STable = css`
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #dbdbdb;

    & th, td {
        border: 1px solid #999;
        height: 30px;
        text-align: center;
    }

    & td {
        cursor: pointer;
    }
`;