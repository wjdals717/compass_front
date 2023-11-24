import { css } from '@emotion/react';

export const SLayout = css`
    position: relative;
    margin: 0px auto;
    width: 1000px;

    & h1{
        margin-bottom: 30px;
        font-size: 23px;
        font-weight: 600;
    }
`;

export const SHead = css`
    display: flex;
    flex-direction: column;
    margin: 30px 0px 20px;
    background-color: white;
    z-index: 100;
`;

export const SBody = css`
    padding: 0 70px;
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

    & img {
        display: flex;
        justify-content: center;
        align-items: center;

    }
    
    & span {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 50px;
        font-weight: 600;
        color: #fff;
        width: 150px;
        height: 150px;
    }
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
    line-height: 32px;
    width: 340px;
    word-wrap: break-word;
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

export const SNavigation = css`
    text-decoration: none;
    color: #999;
`;

export const SMoveBar = (isHeaderFixed) => css`
    position: ${isHeaderFixed ? "fixed" : "static"};
    top: ${isHeaderFixed ? "0px" : ""};
    left: ${isHeaderFixed ? "auto" : "0"};
    right: ${isHeaderFixed ? "auto" : "0"};
    display: flex;
    justify-content: space-around;
    border-bottom: 2px solid #dbdbdb;
    padding: 10px;
    width: ${isHeaderFixed ? "1000px" : ""};
    font-size: 22px;
    background-color: white;
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

export const SIntroductionContainer  = css`
    display: flex;
    margin-bottom: 30px;
    flex-direction: column;
    width: 100%;
`;

export const STitle = css`
    margin-bottom: 30px;
    font-size: 23px;
    font-weight: 600;
`;

export const SIntroductions = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const SIntroduction = css`
    display: flex;
    width: 50%;
    align-items: center;
    margin-bottom:10px;
    font-size: 18px;
    line-height: 24px;
    
    & > div {
        width: 150px;
    }

    & > span {
        width: 400px;
        word-wrap: break-word;
    }
`;

export const SConvenienceContainer = css`
    width: 100%;
    margin-bottom: 30px;

    div {
        display: grid;
        justify-content: center;
        grid-template-columns: 200px 200px;
    }

    span {
        font-size: 18px;
        line-height: 1.8em;
    }

    & > span {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;