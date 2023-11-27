import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const SComment = css`
    margin-bottom: 10px;
    font-size: 16px;
    & span {
        font-weight: 500;
    }
`;

export const SProductContainer = css`
    display: flex;
    align-items: center;
`;

// 결제정보
export const SPurchaseInfoBox = css`
    margin: 0 20px;
    padding: 20px 10px;
    width: 100%;
    border-radius: 10px;
    box-shadow: 4px 4px 10px 0px #dbdbdb;
    background-color: white;
`;

export const SPurchaseInfo = css`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    line-height: 30px;
    & span {
        flex-grow: 1;
        font-size: 18px;
        font-weight: 500;
        padding-bottom: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid #dbdbdb;
        width: 100%;
    }
`;

export const SPaymentInformation = css`
    position: relative;
    left: 20px;
`;

export const SPaymentDetailInfo = css`
    margin: 5px 0px;
`;

export const SProductLayout = css`
    position: relative;
    margin: 0 10px;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    padding: 20px;
    text-align: left;
    line-height: 20px;
    width: 235px;
    height: 275px;
    background-color: white;
    box-shadow: 0px 0px 5px #ccc;
    cursor: pointer;
`;

export const SProductImgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 10px;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    padding: 10px 0;
    background-color: #eee;
`;

export const SProductImg = css`
    width: 100px;
    height: auto;
    z-index: 0;
`;

export const SProductImgText = css`
    position: absolute;
    top: 55px;
    font-size: 25px;
    font-weight: 700;
    z-index: 1;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
`;

export const SProductDetail = css`
    position: relative;
    top: auto;
`;

export const SAcaNm = css`
    cursor: pointer;
`;