import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const SSide = css`
    position: fixed;
    top: 200px;
    right: 110px;
    width: 60px;
    height: 100%;
`;

export const SOptionBox = css`
    top: 180px;
    width: 60px;
    height: 110px;
    & * {
        background-color: transparent;
    }
`;

export const SLikeButton =  css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    border: none;
    padding: 0px;
    width: 60px;
    font-size: 13px;
    cursor: pointer;
`;

export const SLikeIcon = (isLike) => css`
    display: flex;
    flex-direction: column;
    width: 60px;
    font-size: 30px;
    color: ${isLike ? "red" : "black"};
`;

export const SinquiryButton = (isAcademyRegistered) => css`
    display: ${isAcademyRegistered ? "flex" : "none"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 0px;
    width: 60px;
    text-decoration: none;
    color: black;
    font-size: 13px;
    cursor: pointer;
`;

export const SinquiryIcon = css`
    display: flex;
    flex-direction: column;
    width: 60px;
    font-size: 30px;
`;