import React from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"

function MypageContainer({ title, children }) {
    return (
        <div css={S.SInterestAcademyBox}>
            <div css={S.SInterestTitle}>{title}</div>
            <div css={S.SInterestList}>{children}</div>
        </div>
    );
}

export default MypageContainer;