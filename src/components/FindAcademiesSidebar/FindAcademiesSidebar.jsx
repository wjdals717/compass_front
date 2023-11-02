import React from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"

function FindAcademiesSidebar(props) {
    return (
        <div css={S.FilterLayout}>
            <div css={S.InitialContainer}>
                <h2>상세 검색</h2>
                <button>초기화</button>
            </div>
            <div css={S.FilterContainer}>
                <h3>수강 연령</h3>
                <div><input type="checkbox" />초등</div>
                <div><input type="checkbox" />중등</div>
                <div><input type="checkbox" />고등</div>
                <div><input type="checkbox" />재수/n수</div>
                <div><input type="checkbox" />성인</div>
            </div>
            <div css={S.FilterContainer}>
                <h3>분야</h3>
                <div><input type="checkbox" />공부</div>
                <div><input type="checkbox" />취미</div>
                <div><input type="checkbox" />IT</div>
                <div><input type="checkbox" />보건</div>
                <div><input type="checkbox" />음악</div>
            </div>
            <div css={S.FilterContainer}>
                <h3>시설 및 편의사항</h3>
                <div><input type="checkbox" />설명회 진행</div>
                <div><input type="checkbox" />자습실 제공</div>
                <div><input type="checkbox" />셔틀버스 운행</div>
                <div><input type="checkbox" />휴게실</div>
                <div><input type="checkbox" />스터디 모임</div>
            </div>
        </div>
    );
}

export default FindAcademiesSidebar;