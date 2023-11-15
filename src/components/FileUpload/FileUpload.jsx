import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useState } from 'react';
import { storage } from '../../api/firebase/firebase';
import { BsFillFileEarmarkArrowUpFill } from 'react-icons/bs'
/** @jsxImportSource @emotion/react */
import * as S from "./Style"

function FileUpload({ academyContent, setAcademyContent, uploadeFile, setUploadeFile }) {
    const [ businessRegistrationFile, setBusinessRegistrationFile ] = useState();
    const [ idFile, setIdFile ] = useState('');
    const [ operationRegistrationFile, setOperationRegistrationFile ] = useState('');
    const [ progressPercent, setProgressPercent ] = useState(0);

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

    return (
        <>
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
            {academyContent.match === 'false' ? 
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
        </>
    );
}

export default FileUpload;