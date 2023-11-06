import React from 'react';
import { css } from '@emotion/react';
import RootContainer from '../../components/RootContainer/RootContainer';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";

function AcademyInquiry(props) {
    const InquiryButtonClick = () => {
        window.confirm(`지역 : \n학원명: \n에 문의하시겠습니까?`);
    }

    return (
        <RootContainer>
            <div css={S.SLayout}>
                <h1 >문의사항</h1>
                <div css={S.AcademyContainer}>
                    <div placeholder='지역명'>지역명</div>
                    <div placeholder='학원 이름'>학원 이름</div>
                </div>
                <div css={S.InputContainer}>
                    <input type="text" name='title'/>
                    <input type="text" name='content'/>
                </div>
                <div css={S.ButtonContainer}>
                    <button onClick={InquiryButtonClick}>문의하기</button>
                </div>
            </div>
        </RootContainer>
    );
}

export default AcademyInquiry;