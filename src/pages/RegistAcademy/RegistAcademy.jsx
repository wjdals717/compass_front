import React, { useState } from 'react';
import RootContainer from '../../components/RootContainer/RootContainer';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { BsFillFileEarmarkArrowUpFill, BsInfoCircleFill } from 'react-icons/bs'
import Select from 'react-select';
import uploadPrecautionsImg from '../../assets/uploadPrecautions.png'

function RegistAcademy(props) {

    const [ matchOption, setMatchOption ] = useState();

    const handleMatchOptionChange = (event) => {
        setMatchOption(event.target.value);
    }

    return (
        <RootContainer>
            <div css={S.STopContainer}>
                <h1 css={S.SH1}>학원등록하기</h1>
                <span css={S.STopSpan}>사업자등록증의 상호명(법인명)과 학원명이 같나요?</span>
                <div css={S.SMatchButtonContainer} >
                    <input 
                        type="radio" 
                        id='different' 
                        name='match' 
                        value={false}
                        onChange={handleMatchOptionChange}
                    />
                    <label htmlFor="different">다릅니다</label>
                    <input 
                        type="radio" 
                        id='same' 
                        name='match' 
                        value={true}
                        onChange={handleMatchOptionChange}
                    />
                    <label htmlFor="same">같습니다</label>
                </div>
            </div>
            <div css={S.SContainer}>
                <span css={S.SContainerName}>학원 지역*</span>
                <div css={S.SSelectBoxContainer}>
                    <p>시 / 도</p>
                    <Select />
                </div>
                <div css={S.SSelectBoxContainer}>
                    <p>시 / 군 / 구</p>
                    <Select />
                </div>
                <div css={S.SSelectBoxContainer}>
                    <p>학원명을 검색해주세요</p>
                    <Select />
                </div>
            </div>
            <div css={S.SContainer}>
                <div css={S.SNameContainer}>
                    <span css={S.SContainerName}>사전확인서류 제출*</span>
                    <p>
                        사전확인 서류란?
                        <BsInfoCircleFill />
                    </p>
                </div>
                <div css={S.SFileUploadContainer}>
                    <span>사업자등록증 또는 사업자등록등명원 (택 1)</span>
                    <button css={S.SUploadButton}>
                        <BsFillFileEarmarkArrowUpFill />
                        첨부하기
                    </button>
                </div>
                <div css={S.SFileUploadContainer}>
                    <span>대표자 신분증</span>
                    <button css={S.SUploadButton}>
                        <BsFillFileEarmarkArrowUpFill />
                        첨부하기
                    </button>
                </div>
                {matchOption === 'true' ? <></>
                    : <div css={S.SFileUploadContainer}>
                        <span>학원설립운영등록증</span>
                        <button css={S.SUploadButton}>
                            <BsFillFileEarmarkArrowUpFill />
                            첨부하기
                        </button>
                    </div>
                }
            </div>
            <div css={S.SImgContainer}>
                <img css={S.SImg} src={uploadPrecautionsImg} alt="" />
            </div>
            <div css={S.SSpanContainer}>
                <span>학원 등록은 3일 이내로 완료되며 그 전까지 학원 관리를 제외한 모든 기능을 정상적으로 이용하실 수 있습니다.</span>
            </div>
            <div css={S.SButtonContainer}>
                <button css={S.SSubmitButton}>제출</button>
            </div>
        </RootContainer>
    );
}

export default RegistAcademy;