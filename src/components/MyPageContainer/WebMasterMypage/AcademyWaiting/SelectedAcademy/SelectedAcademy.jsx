import React from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { BsDownload } from 'react-icons/bs'
import { instance } from '../../../../../api/config/instance';
import { useQueryClient } from 'react-query';

function SelectedAcademy({ selectedAcademy }) {

    const queryClient = useQueryClient();

    const handleFileDownload = async (filePath, filename) => {
        try {
            const response = await fetch(filePath);

            // 파일의 형식을 가져와서 Content-Disposition 헤더에 사용
            const contentType = response.headers.get('Content-Type');

            // Content-Disposition 헤더를 사용하여 다운로드 파일의 이름을 가져옴
            const contentDisposition = response.headers.get('Content-Disposition');
            const fileNameMatch = contentDisposition && contentDisposition.match(/filename="?([^"]+)"?/);
            const fileName = fileNameMatch ? fileNameMatch[1] : `${selectedAcademy.acaAsnum}_${filename}`;

            // Blob을 만들어서 URL.createObjectURL로 다운로드 링크를 생성
            const blob = await response.blob();
            const downloadUrl = URL.createObjectURL(blob);

            // a 태그를 생성하여 다운로드
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = fileName;

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Blob URL 해제
            URL.revokeObjectURL(downloadUrl);
        } catch (error) {
            console.error('Error downloading file:', error);
        }
    };

    const handleDisapprovalOnClick = async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            await instance.delete(`/admin/academy/disapproval/${selectedAcademy.academyRegistrationId}`, option);
            alert("승인 거절 완료");
            queryClient.refetchQueries(["getAcademies"]);
            queryClient.refetchQueries(["getAcademyCount"]);
        } catch (error) {
            console.error(error);
        }
    }

    const handleApprovalOnClick = async () => {
        try {
            const requestData = {
                academyRegistrationId: selectedAcademy.academyRegistrationId,
                userId: selectedAcademy.userId
            }
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            await instance.put('/admin/academy/approval', requestData, option);
            alert("승인 완료");
            queryClient.refetchQueries(["getAcademies"]);
            queryClient.refetchQueries(["getAcademyCount"]);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <div css={S.SContainer}>
                <div css={S.SNameContainer}>
                    <span css={S.SContainerName}>선택된 학원</span>
                </div>
                <div css={S.SSelectedAcaContainer}>
                    <div css={S.SAcademyInfoBox}>
                        <div><span>학원 번호</span><div>{selectedAcademy.acaAsnum}</div></div>
                        <div><span>지역</span><div>{selectedAcademy.admstZoneNm}</div></div>
                        <div><span>신청자</span><div>{selectedAcademy.name}</div></div>
                    </div>
                    <div css={S.SAcademyInfoBox}>
                        <div><span>학원명</span><div>{selectedAcademy.acaNm}</div></div>
                    </div>
                </div>
                <div css={S.SNameContainer}>
                    <span css={S.SContainerName}>사전확인서류 제출</span>
                </div>
                <div css={S.SFileDownloadContainer}>
                    <span>사업자등록증 또는 사업자등록등명원 (택 1)</span>
                    <div css={S.SDownloadBox} 
                        onClick={() => handleFileDownload(selectedAcademy.businessRegistrationFile, "사업자등록증")}>
                        <BsDownload size={14}/> 다운로드
                    </div>
                </div>
                <div css={S.SFileDownloadContainer}>
                    <span>대표자 신분증</span>
                    <div css={S.SDownloadBox} 
                        onClick={() => handleFileDownload(selectedAcademy.idFile, "대표자 신분증")}>
                        <BsDownload size={14}/> 다운로드
                    </div>
                </div>
                {selectedAcademy.match === 'false' ? 
                    <div css={S.SFileDownloadContainer}>
                        <span>학원설립운영등록증</span>
                        <div css={S.SDownloadBox} 
                            onClick={() => handleFileDownload(selectedAcademy.operationRegistrationFile, "학원설립운영등록증")}>
                            <BsDownload size={14}/> 다운로드
                        </div>
                    </div>
                    : <></>
                }
            </div>
            <div css={S.SButtonBox}>
                <button onClick={handleDisapprovalOnClick} css={S.SDeclineBtn}>승인 거절</button>
                <button onClick={handleApprovalOnClick} css={S.SApprovalBtn}>승인</button>
            </div>
        </div>
    );
}

export default SelectedAcademy;