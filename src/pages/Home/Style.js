import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const SMainLayout = css`
    display: flex;
    justify-content: space-evenly;
    align-items: end;
    height: 360px;
    background: rgb(202,233,255);
    background: linear-gradient(0deg, rgba(202,233,255,1) 0%, rgba(255,255,255,1) 100%);
`;

export const SMainContainer = css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 1200px;
`;

export const STextContainer = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 550px;
    height: 100%;
    font-size: 32px;
    cursor: default;
    & b {
        font-size: 35px;
        font-weight: 700;
    }
    & h1 {
        margin-bottom: 10px;
    }
`;

export const SImgBox = css`
    width: auto;
    height: 330px;
`;

export const SSearchContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0;
    height: 50px;
    & > div {
        height: 100%;
    }
    & * {
        font-size: 17px;
    }
`;

export const SInputBox = css`
    & > input {
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        padding: 10px;
        outline: none;
        width: 650px;
        height: 100%;
    }
`;

export const SSelectBox = css`
    cursor: pointer;

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        width: 200px;
        height: 100%;
        background-color: white;
        color: #666;
    }
`


export const SSearchBtnBox = css`
    & > button {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    & > button > svg {
        color: white;
        font-size: 25px;
    }
    .btn-hover {
        width: 100px;
        font-size: 16px;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
        height: 100%;
        text-align:center;
        border: none;
        background-size: 300% 100%;

        border-radius: 5px;
        moz-transition: all .4s ease-in-out;
        -o-transition: all .4s ease-in-out;
        -webkit-transition: all .4s ease-in-out;
        transition: all .4s ease-in-out;
    }

    .btn-hover:hover {
        background-position: 100% 0;
        moz-transition: all .4s ease-in-out;
        -o-transition: all .4s ease-in-out;
        -webkit-transition: all .4s ease-in-out;
        transition: all .4s ease-in-out;
    }

    .btn-hover:focus {
        outline: none;
    }

    .btn-hover.color-9 {
        background-image: linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed);
        /* box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75); */
    }
`

export const SLinkContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SRegistContainer = css`
    position: relative;
    /* margin: 0px 50px; */
    border-radius: 20px;
    width: 580px;
    height: 380px;
    color: white;
`;

export const SImgCover = css`
    position: absolute;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 5px;
        width: 580px;
        height: 350px;
        background-color: #708C9F;
        opacity: 0.5;
        z-index: 0;
    }
`;

export const SImg = css`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    object-fit: cover;
    padding: 20px;
    width: 580px;
    height: 350px;
`;

export const SCommentContainer = css`
    position: absolute;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    cursor: default;

    .button_container {
        width: 200px;
    }

    .btn {
        border: none;
        display: block;
        text-align: center;
        cursor: pointer;
        text-transform: uppercase;
        text-decoration: none;
        outline: none;
        overflow: hidden;
        position: relative;
        color: #fff;
        font-weight: 700;
        font-size: 16px;
        background-color: #1B4965;
        padding: 17px 60px;
        margin: 0 auto;
        box-shadow: 0 5px 15px rgba(0,0,0,0.20);
    }

    .btn span {
        position: relative; 
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn span svg {
        margin-left: 5px;
    }

    .btn:after {
    content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 490%;
        width: 140%;
        background: #5FA8D3;
        -webkit-transition: all .5s ease-in-out;
        transition: all .5s ease-in-out;
        -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
        transform: translateX(-98%) translateY(-25%) rotate(45deg);
    }

    .btn:hover:after {
        -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
        transform: translateX(-9%) translateY(-25%) rotate(45deg);
    }
`;

export const SRegistTitle = css`
    margin-bottom: 10px;
    font-size: 28px;
    font-weight: 700;
`;

export const SRegistComment = css`
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 500;
`;