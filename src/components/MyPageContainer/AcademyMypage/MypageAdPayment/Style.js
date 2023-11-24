import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const SComment = css`
    margin: 10px 20px;
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
    margin: 20px 20px 0px 20px;
    padding: 20px 10px;
    width: 100%;
    border-radius: 10px;
    box-shadow: 4px 4px 10px 0px #dbdbdb;
    background-color: white;
`;

export const SPurchaseInfo = css`
    width: 100%;
    margin: 0px 30px;
    line-height: 30px;
    & span {
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
    left: 10px;
    text-align: left;
    margin: 20px 10px 0px 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px #444;
    padding: 20px;
    width: 235px;
    height: 220px;
    background-color: white;
    cursor: pointer;
`;

export const SProductImgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    
`;

export const SProductImg = css`
    border-radius: 10px;
    width: 100px;
    height: auto;
    z-index: 0;
`;

export const SProductImgText = css`
    position: absolute;
    top: 50px;
    left: 40px;
    font-size: 30px;
    font-weight: 1000;
    z-index: 1;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
`;

export const SProductDetail = css`
    position: relative;
    top: auto;
`;


export const STable = css`
    margin: 0 20px;
    width: 740px;
    background-color: white;

    thead {
        background-color: #dbdbdb;
    }

    thead, tr, td {
        height: 40px;
        border: 1px solid #ccc;
        vertical-align: middle;
        text-align: center;
        overflow: auto;
        /* cursor: default; */
    }
`;

export const SPageNumbers = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    width: 100%;

    & button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        background-color: white;
        width: 30px;
        height: 30px;
        cursor: pointer;

        :disabled {
            background-color: white;
            border: none;
            cursor: default;
        }

        &.selected {
            background-color: #92c2f4;
        }
    }
`;

export const SAcaNm = css`
    cursor: pointer;
`;