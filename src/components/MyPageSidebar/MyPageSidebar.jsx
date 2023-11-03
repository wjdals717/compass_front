import React from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"

function MyPageSidebar(props) {
    return (
        <div css={S.SMySidebarBox}>
            <div>내정보</div>
            <div>닉네임</div>
            <div>관심 학원 0개</div>
            <div>개인 정보 수정</div>
            <div>나의 학원 문의</div>
            <div>작성한 후기</div>
            
        </div>
    );
}

export default MyPageSidebar;