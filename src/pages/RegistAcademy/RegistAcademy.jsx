import React, { useEffect, useState } from 'react';
import RootContainer from '../../components/RootContainer/RootContainer';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { BsFillFileEarmarkArrowUpFill, BsInfoCircleFill } from 'react-icons/bs'
import Select from 'react-select';
import uploadPrecautionsImg from '../../assets/uploadPrecautions.png'
import { instance } from '../../api/config/instance';
import { useQuery, useQueryClient } from 'react-query';
import FindEducationOffice from '../../components/FindEducationOffice/FindEducationOffice';
import { selectedAcademyState } from '../../store/RegistAtom';
import { useRecoilState } from 'recoil';
import { ref, getDownloadURL, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../api/firebase/firebase';


function RegistAcademy(props) {
    const [ matchOption, setMatchOption ] = useState("true");
    const [ educationOfficeOptions, setEducationOfficeOptions ] = useState([]);
    const [ selectedEducationOffice, setSelectedEducationOffice ] = useState("");
    const [ choiceEducationOffice, setChoiceEducationOffice ] = useState("");

    const [ uploadeFile, setUploadeFile ] = useState({
        businessRegistrationFile: 0,
        idFile: 0,
        operationRegistrationFile: 0
    })
    const [ businessRegistrationFile, setBusinessRegistrationFile ] = useState();
    const [ idFile, setIdFile ] = useState('');
    const [ operationRegistrationFile, setOperationRegistrationFile ] = useState('');
    const [ progressPercent, setProgressPercent ] = useState(0);
    
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const [ selectedAcademy, setSelectedAcademy ] = useRecoilState(selectedAcademyState);
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");

    const [ academyContent, setAcademyContent ] = useState({
        acaAsnum: "",                       //학원 코드
        acaNm: "",                          //학원 이름
        admstZoneNm: "",                    //행정구역명
        atptOfcdcScCode: "",                //교육청 코드
        userId: "",
        match: "",
        businessRegistrationFile: "",
        idFile: "",
        operationRegistrationFile: ""
    })
    
    useEffect(() => {
        setAcademyContent(prevAcademyContent => ({
            ...prevAcademyContent,
            acaAsnum: selectedAcademy.ACA_ASNUM,
            admstZoneNm: selectedAcademy.ADMST_ZONE_NM,
            acaNm: selectedAcademy.ACA_NM,
            atptOfcdcScCode: selectedAcademy.ATPT_OFCDC_SC_CODE,
            userId: principal?.data?.data.userId,
            match: matchOption
        }));
    }, [selectedAcademy, matchOption]);

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
        const files = [...e.target.files];
        
        switch (e.target.name) {    //화면에 보여주기 위함(label)
            case 'businessRegistrationFile':
                setBusinessRegistrationFile(e.target.value);   break;
            case 'idFile':
                setIdFile(e.target.value);                     break;
            case 'operationRegistrationFile':
                setOperationRegistrationFile(e.target.value);  break;
        }

        //firebase에 저장
        const storageRef = ref(storage, `files/${e.target.name}/${academyContent.atptOfcdcScCode}/${academyContent.acaAsnum}_${files[0].name}`);    // 해당 파일의 이름으로 firebase의 storage에 저장됨
        const uploadTask = uploadBytesResumable(storageRef, files[0]);        // 파일 업로드가 실행됨

        uploadTask.on(          //업로드가 시작되면
            "state_changed",    //파일이 변경되고 있을 때
            (snapshot) => {     //파일 업로드 대기 중 프로그레스 바 적용할 때 사용
                // 증가하는 %가 들어있음
                setProgressPercent(
                    Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)  //bytesTransferred : 매번 상태를 캡쳐해 줌  // 1%씩 증가하도록 함
                )
            },
            (error) => {        //업로드 실패할 경우
                console.error(error);
            },
            () => { //업로드가 완료되었을 경우
                getDownloadURL(storageRef).then(downloadUrl => {    //방금전 성공한 업로드 경로를 가져옴
                    console.log(downloadUrl);
                    setAcademyContent({
                        ...academyContent, 
                        [e.target.name]: downloadUrl
                    });
                    setUploadeFile({
                        ...uploadeFile,
                        [e.target.name]: 1
                    })
                })
            }
        )
    }

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const handlesubmissionClick = async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            };
            if (!selectedEducationOffice) {
                alert("학원을 선택해주세요");
            } else {
                const filesInputs = document.querySelectorAll('input[type="file"]');
                let AllFilesAttached = true;
        
                filesInputs.forEach((fileInput) => {
                    if (fileInput.files.length === 0) {
                        AllFilesAttached = false;
                    }
                });
                
                if (!AllFilesAttached) {
                    alert("서류를 첨부하세요");
                } else {
                    console.log(academyContent);

                    //firebase에 파일이 업로드 됐는지 확인하고 DB에 저장
                    if((uploadeFile.businessRegistrationFile == 1 && uploadeFile.idFile == 1)){
                        if(academyContent.match == 'true' || (academyContent.match == 'false' && uploadeFile.operationRegistrationFile == 1)) {
                            await instance.post("/academy", academyContent, option);
                        } else {
                            alert("업로드 중입니다. 잠시만 기다려주세요.");
                        }
                    } else {
                        alert("업로드 중입니다. 잠시만 기다려주세요.");
                    }
                    alert("등록되었습니다. 신청은 3일 이내 확인됩니다.");
                }
            }
        } catch (error) {
            alert(error.response.data.sendFail);
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
                    <FindEducationOffice educationOfficeCode={selectedEducationOffice}/>
                </div>
            </div>
            <div css={S.SContainer}>
                <div css={S.SNameContainer}>
                    <span css={S.SContainerName}>사전확인서류 제출*</span>
                    {/* <div>
                        <p>사전확인 서류란?</p>
                        <button css={S.SModalBtn} onClick={openModal}><BsInfoCircleFill /></button>
                        {isModalOpen && (
                            <div css={`${S.SModalContainer}`}>
                                <div css={S.SModalContent}>
                                    <ul css={S.SModalDocument}>사전확인서류란?</ul>
                                    <li>학원 정보 관리 서비스를 사용하시기 전 학원 관리자님의 정보 확인을 위해 제출받는 서류입니다.<br></br>
                                        신뢰성 있는 서비스를 제공하기 위해 사전확인서류로 학원 관리자임을 확인하고 있습니다.<br></br> 
                                        학원명과 관리자 확인이 불가능한 경우 추가적인 확인 절차가 있을 수 있습니다.
                                    </li>
                                    <button css={S.SModalClosebtn} onClick={closeModal}>닫기</button>
                                </div>
                            </div>
                        )}
                    </div> */}
                    <p>사전확인 서류란?<BsInfoCircleFill /></p>
                </div>
                <div css={S.SFileUploadContainer}>
                    <span>사업자등록증 또는 사업자등록등명원 (택 1)</span>
                    <label css={S.SUploadLabel} htmlFor='businessRegistrationFile'>
                        <BsFillFileEarmarkArrowUpFill size={14}/> 첨부하기
                    </label>
                    <p>{businessRegistrationFile}</p>
                    <input type="file" name='businessRegistrationFile' id='businessRegistrationFile'  onChange={uploadLableChange}/>
                </div>
                <div css={S.SFileUploadContainer}>
                    <span>대표자 신분증</span>
                    <label css={S.SUploadLabel} htmlFor='idFile'>
                        <BsFillFileEarmarkArrowUpFill size={14}/> 첨부하기
                    </label>
                    <p>{idFile}</p>
                    <input type="file" name='idFile' id='idFile' onChange={uploadLableChange}/>
                </div>
                {matchOption === 'false' ? 
                    <div css={S.SFileUploadContainer}>
                        <span>학원설립운영등록증</span>
                        <label css={S.SUploadLabel} htmlFor='operationRegistrationFile'>
                        <BsFillFileEarmarkArrowUpFill size={14}/> 첨부하기
                        </label>
                        <p>{operationRegistrationFile}</p>
                        <input type="file" name='operationRegistrationFile' id='operationRegistrationFile' onChange={uploadLableChange}/>
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
                <button css={S.SSubmitButton} onClick={handlesubmissionClick}>제출</button>
            </div>
        </RootContainer>
    );
}

export default RegistAcademy;