import React from 'react';
import noResults from '../../assets/no_results.png'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const SNoResult = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 780px;
    height: 500px;
    font-size: 18px;

    img {
        width: 500px;
        height: auto;
    }
`;

function NoResult(props) {
    return (
        <div css={SNoResult}>
            <p>검색 결과를 찾을 수 없습니다.</p>
            <img src={noResults} alt="No results" />
        </div>
    );
}

export default NoResult;