import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import * as GS from '../../../../styles/Global/Common';
import { instance } from '../../../../api/config/instance';
import { useQuery } from 'react-query';
import SelectedAcademy from './SelectedAcademy/SelectedAcademy';
import { useNavigate, useParams } from 'react-router';
import Pagination from '../../../Pagination/Pagination';

function AcademyWaiting(props) {
    const navigate = useNavigate();
    const { page } = useParams();

    const [ selectedAcademy, setSelectedAcademy ] = useState();
    const [ selectedTarget, setSelectedTarget ] = useState(null);
    const [ isWaitingAcademyOpen, setIsWaitingAcademyOpen ] = useState(false);

    const getAcademies = useQuery(["getAcademies", page], async () => {
        const option = {
            headers: {
                Authorization: localStorage.getItem("accessToken")
            }
        }
        return await instance.get(`/admin/academies/awaiting/${page}`, option);
    }, {
        refetchOnWindowFocus: false,
        onSuccess: () => {
            setSelectedAcademy(null);
        }
    })
    
    const handleAcademyOnClick = (e, academy) => {
        setSelectedAcademy((prevSelectedAcademy) => 
        prevSelectedAcademy === academy ? null : academy
        );

        if (selectedTarget === e.target) {
            setIsWaitingAcademyOpen((prevIsOpen) => !prevIsOpen);
            return;
        }
        setSelectedTarget(e.target);
        setIsWaitingAcademyOpen(true);
    }

    if(getAcademies.isLoading) {
        return <></>;
    }

    return (
        <div>
            <h2>📜 학원 등록 대기목록</h2>
            <div>
                {getAcademies.data.data.listTotalCount === 0 ? <div css={S.SEmptyBox}>등록 대기중인 학원이 없습니다.</div> : 
                <>
                    <div css={S.SComment}>
                        승인 대기 중인 학원들을 승인 거절 또는 승인 해주세요.
                    </div>
                    <table css={GS.STable}>
                        <tbody>
                            <tr>
                                <th>학원 번호</th>
                                <th>학원명</th>
                                <th>신청자</th>
                                <th>학원 선택</th>
                            </tr>
                            { getAcademies?.data?.data.academyRegistrations.map(academy => {
                                return  <tr key={academy.academyRegistrationId} 
                                            style={{ fontWeight: selectedAcademy === academy ? 'bold' : 'normal' }}>
                                            <td>{academy.acaAsnum}</td>
                                            <td>{academy.acaNm}</td>
                                            <td>{academy.name}</td>
                                            <td>
                                                <button css={GS.SButton} onClick={(e) => handleAcademyOnClick(e, academy)}>
                                                    {selectedAcademy === academy ? '선택 해제' : '선택'}
                                                </button>
                                            </td>
                                        </tr>
                            })}
                        </tbody>
                    </table>
                    {!getAcademies.isLoading && 
                        <Pagination totalCount={getAcademies.data.data.listTotalCount}
                            link={'/account/mypage/academyawating'}/>}
                    {isWaitingAcademyOpen && !!selectedAcademy && <SelectedAcademy selectedAcademy={selectedAcademy}/>}
                </>}
            </div>
        </div>
    );
}

export default AcademyWaiting;