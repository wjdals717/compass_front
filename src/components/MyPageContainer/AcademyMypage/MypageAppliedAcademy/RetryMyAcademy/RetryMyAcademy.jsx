import React, { useState } from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { BsDownload } from 'react-icons/bs'
import FileDownload from '../../../../FileDownload/FileDownload';
import FileUpload from '../../../../FileUpload/FileUpload';
import { instance } from '../../../../../api/config/instance';
import { useQueryClient } from 'react-query';

function RetryMyAcademy({ type, selectedAcademy }) {

    const queryClient = useQueryClient();

    const [ uploadeFile, setUploadeFile ] = useState({
        businessRegistrationFile: 0,
        idFile: 0,
        operationRegistrationFile: 0
    })

    const [ academyContent, setAcademyContent ] = useState({
        academyId: selectedAcademy.academyId,
        userId: selectedAcademy.userId,
        match: selectedAcademy.match,
        businessRegistrationFile: "",
        idFile: "",
        operationRegistrationFile: ""
    })

    const handlesubmissionClick = async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            };
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
                //firebase에 파일이 업로드 됐는지 확인하고 DB에 저장
                if((uploadeFile.businessRegistrationFile == 1 && uploadeFile.idFile == 1)){
                    if(academyContent.match == 'true' || (academyContent.match == 'false' && uploadeFile.operationRegistrationFile == 1)) {
                        await instance.put(`/academy/${selectedAcademy.academyRegistrationId}`, academyContent, option);
                    } else {
                        alert("업로드 중입니다. 잠시만 기다려주세요.");
                    }
                } else {
                    alert("업로드 중입니다. 잠시만 기다려주세요.");
                }
                alert("재등록되었습니다. 학원 승인은 3일 이내 완료됩니다.");
                queryClient.refetchQueries(["getAppliedAcademy"]);
            }
        } catch (error) {
            alert(error.response.data.sendFail);
        }
    }

    return (
        <div>
            <div css={S.SContainer}>
                <div css={S.SInfo}>
                    {type === "reject" && "승인 거절된 학원 등록입니다. 거절 사유를 확인한 후 재등록 하세요."}
                    {type === "awaiting" && "승인 대기중인 학원 등록입니다. 학원 승인은 3일 이내 완료됩니다."}
                </div>
                {type === "reject" && 
                    <>
                        <div css={S.SNameContainer}>
                            <span css={S.SName}>
                                거절 사유
                            </span>
                        </div>
                        <div css={S.SRejectReason}>
                            {selectedAcademy.rejectReason}
                        </div>
                    </>
                }
                
                <div css={S.SNameContainer}>
                    <span css={S.SName}>선택된 학원</span>
                </div>
                <div>
                    <div css={S.SAcademyInfoBox}>
                        <div><span>학원 번호</span><div>{selectedAcademy.acaAsnum}</div></div>
                        <div><span>지역</span><div>{selectedAcademy.admstZoneNm}</div></div>
                    </div>
                    <div css={S.SAcademyInfoBox}>
                        <div><span>학원명</span><div>{selectedAcademy.acaNm}</div></div>
                    </div>
                </div>
                <div css={S.SNameContainer}>
                    <span css={S.SName}>사전확인서류 제출</span>
                </div>
                {type === "reject" && 
                    <>
                        <FileUpload academyContent={academyContent} setAcademyContent={setAcademyContent}
                            uploadeFile={uploadeFile} setUploadeFile={setUploadeFile}/>
                        <div css={S.SButtonContainer}>
                            <button css={S.SSubmitButton} onClick={handlesubmissionClick}>제출</button>
                        </div>
                    </>
                }
                {type === "awaiting" && <FileDownload selectedAcademy={selectedAcademy}/>}
            </div>
        </div>
    );
}

export default RetryMyAcademy;