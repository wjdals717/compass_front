import React, { useEffect, useState } from 'react';
import RootContainer from '../../components/RootContainer/RootContainer';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { BsFillFileEarmarkArrowUpFill, BsInfoCircleFill } from 'react-icons/bs'
import Select from 'react-select';
import uploadPrecautionsImg from '../../assets/uploadPrecautions.png'
import { instance } from '../../api/config/instance';
import { useQuery } from 'react-query';
import FindEducationOffice from '../../components/FindEducationOffice/FindEducationOffice';

function RegistAcademy(props) {
    const [ matchOption, setMatchOption ] = useState();
    const [ educationOfficeOptions, setEducationOfficeOptions ] = useState([]);
    const [ selectedEducationOffice, setSelectedEducationOffice ] = useState("");
    const [ choiceEducationOffice, setChoiceEducationOffice ] = useState("");

    const [ file1, setFile1 ] = useState('');
    const [ file2, setFile2 ] = useState('');
    const [ file3, setFile3 ] = useState('');

    const handleMatchOptionChange = (event) => {
        setMatchOption(event.target.value);
    }

    const educationOfficeOptionsState = useQuery(["educationOfficeOptionsState"], async () => {
        try {
            return await instance.get("/option/education-offices");
        }catch(error) {
            console.error(error);
        }
    },
    {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setEducationOfficeOptions(response.data.map(option => {
                return {value: option.educationOfficeCode, label: option.educationOfficeName};
            }));
        }
    });

    const handleEducationOptionChange = (option) => {
        setSelectedEducationOffice(option.value);
    }

    const uploadLableChange = (e) => {
        switch (e.target.name) {
            case 'file1':
                setFile1(e.target.value);   break;
            case 'file2':
                setFile2(e.target.value);   break;
            case 'file3':
                setFile3(e.target.value);   break;
        }
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
                        defaultChecked
                    />
                    <label htmlFor="same">같습니다</label>
                </div>
            </div>
            <div css={S.SContainer}>
                <span css={S.SContainerName}>학원 검색*</span>
                <div css={S.SSelectBoxContainer}>
                    <p>교육청</p>
                    <Select options={educationOfficeOptions} onChange={handleEducationOptionChange}/>
                </div>
                <div css={S.SSelectBoxContainer}>
                    <p>학원명을 검색해주세요</p>
                    <FindEducationOffice educationOfficeCode={selectedEducationOffice} />
                </div>
            </div>
            <div css={S.SContainer}>
                <div css={S.SNameContainer}>
                    <span css={S.SContainerName}>사전확인서류 제출*</span>
                    <p>사전확인 서류란?<BsInfoCircleFill /></p>
                </div>
                <div css={S.SFileUploadContainer}>
                    <span>사업자등록증 또는 사업자등록등명원 (택 1)</span>
                    <label css={S.SUploadLabel} htmlFor='file1'>
                        <BsFillFileEarmarkArrowUpFill size={14}/> 첨부하기
                    </label>
                    <p>{file1}</p>
                    <input type="file" name='file1' id='file1'  onChange={uploadLableChange}/>
                </div>
                <div css={S.SFileUploadContainer}>
                    <span>대표자 신분증</span>
                    <label css={S.SUploadLabel} htmlFor='file2'>
                        <BsFillFileEarmarkArrowUpFill size={14}/> 첨부하기
                    </label>
                    <p>{file2}</p>
                    <input type="file" name='file2' id='file2' onChange={uploadLableChange}/>
                </div>
                {matchOption === 'false' ? 
                    <div css={S.SFileUploadContainer}>
                        <span>학원설립운영등록증</span>
                        <label css={S.SUploadLabel} htmlFor='file3'>
                        <BsFillFileEarmarkArrowUpFill size={14}/> 첨부하기
                        </label>
                        <p>{file3}</p>
                        <input type="file" name='file3' id='file3' onChange={uploadLableChange}/>
                    </div>
                    : <></>
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