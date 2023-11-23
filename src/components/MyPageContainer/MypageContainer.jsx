import React from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";

function MypageContainer({ children }) {
    return (
        <div css={S.SInterestAcademyBox}>
            { children }
        </div>
    );
}

export default MypageContainer;