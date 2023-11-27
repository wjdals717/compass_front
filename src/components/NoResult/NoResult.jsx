import React from 'react';
import noResults from '../../assets/no_results.png'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const SNoResult = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 780px;
    height: 500px;

    img {
        width: 700px;
        height: 450px;
    }
`;

function NoResult(props) {
    return (
        <div css={SNoResult}>
            <img src={noResults} alt="No results" />
            <p>검색 결과를 찾을 수 없습니다.</p>
        </div>
    );
}

export default NoResult;