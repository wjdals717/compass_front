import React from 'react';
import { css } from '@emotion/react';
import RootContainer from '../../components/RootContainer/RootContainer';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { AiOutlineDown, AiOutlineSearch } from 'react-icons/ai'
import SelectBtn from '../../components/SelectBtn/SelectBtn';
import academyImg from '../../assets/academy.jpg'

function Home(props) {
    return (
        <RootContainer>
            <div css={S.SMainLayout}>
                <div css={S.STextContainer}>
                    <h1><b>학습 나침반</b>에서</h1>
                    <h1>쉽고 빠르게 <b>원하는 학원을 찾아보세요.</b></h1>
                </div>
                <div css={S.SImgBox}>
                    <img src="" alt="" />
                </div>
            </div>
            <div css={S.SSearchContainer}>
                <div css={S.SInputBox}>
                    <input type="text" placeholder='학원명, 지역, 과목으로 검색해보세요'/>
                </div>
                <SelectBtn>지역 선택</SelectBtn>
                <SelectBtn>카테고리 선택</SelectBtn>
                <div css={S.SSearchBtnBox}>
                    <button><AiOutlineSearch/></button>
                </div>
            </div>
            <div css={S.SRegistContainer}>
                <img css={S.SImg} src={academyImg} alt="" />
                <div css={S.SRegistTitle}>학원 관리자 등록하기</div>
                <div>학원 나침반에 등록해서 나의 학원을 홍보해보세요!</div>
                <button>등록하기</button>
            </div>
        </RootContainer>
    );
}

export default Home;