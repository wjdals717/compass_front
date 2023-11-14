import React from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { BsDownload } from 'react-icons/bs'
import { instance } from '../../../../../api/config/instance';
import { useQueryClient } from 'react-query';
import FileDownload from '../../../../FileDownload/FileDownload';

function SelectedAcademy({ selectedAcademy }) {

    const queryClient = useQueryClient();

    const handleDisapprovalOnClick = async () => {
        const rejectReason = prompt("거절 사유를 입력하세요: ");

        if(rejectReason !== null && rejectReason.trim() !== "") {
            try {
                const requestData = {
                    academyRegistrationId: selectedAcademy.academyRegistrationId,
                    rejectReason: rejectReason
                }
                const option = {
                    headers: {
                        Authorization: localStorage.getItem("accessToken")
                    }
                }
                await instance.put(`/admin/academy/disapproval`, requestData, option);
                alert("승인 거절 완료");
                queryClient.refetchQueries(["getAcademies"]);
            } catch (error) {
                console.error(error);
            }
        } else {
            alert("거절 사유를 입력하지 않아 취소되었습니다.");
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
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <div css={S.SContainer}>
                <div css={S.SNameContainer}>
                    <span css={S.SName}>선택된 학원</span>
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
                    <span css={S.SName}>사전확인서류 제출</span>
                </div>
                <FileDownload selectedAcademy={selectedAcademy}/>
            </div>
            <div css={S.SButtonBox}>
                <button onClick={handleDisapprovalOnClick} css={S.SDeclineBtn}>승인 거절</button>
                <button onClick={handleApprovalOnClick} css={S.SApprovalBtn}>승인</button>
            </div>
        </div>
    );
}

export default SelectedAcademy;