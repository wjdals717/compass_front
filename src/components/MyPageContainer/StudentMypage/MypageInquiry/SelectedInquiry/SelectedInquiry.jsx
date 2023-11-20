import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"

function SelectedInquiry({ selectedInquiry }) {
    
    
    return (
        <div css={S.SContainer}>
            <div css={S.SNameContainer}>
                <span css={S.SName}>{selectedInquiry.acaNm}</span>
            </div>
            <span>{selectedInquiry.inquiryTitle}</span>
            <p>문의 내용: </p>
            <div>{selectedInquiry.inquiryContent}</div>
            <p>답변: </p>
            <div>{selectedInquiry.answer !== null ? selectedInquiry.answer : '아직 관리자가 답변하지 않았습니다.'}</div>
        </div>
    );
}

export default SelectedInquiry;