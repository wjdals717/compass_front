import React from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { BsDownload } from 'react-icons/bs'

function FileDownload({ selectedAcademy }) {

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

    return (
        <>
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
        </>
    );
}

export default FileDownload;