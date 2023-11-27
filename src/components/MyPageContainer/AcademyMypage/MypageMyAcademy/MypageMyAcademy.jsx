import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './Style';
import * as GS from '../../../../styles/Global/Common';
import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../../../api/config/instance';
import { useNavigate, useParams } from 'react-router-dom';
import DetailMyAcademy from './DetailMyAcademy/DetailMyAcademy';
import { useEffect } from 'react';
import Pagination from '../../../Pagination/Pagination';
import EmptyBox from '../../../EmptyBox/EmptyBox';

function MypageMyAcademy(props) {

    const navigate = useNavigate();

    const { page } = useParams();

    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");

    const [ selectedAcademy, setSelectedAcademy ] = useState(null);
    const [ selectedTarget, setSelectedTarget ] = useState(null);
    const [ selectAcademyInfoOpen, setSelectAcademyInfoOpen ] = useState(false);

    const getMyAcademies = useQuery(["getMyAcademies", page], async () => {
        const option = {
            headers: {
                Authorization: localStorage.getItem("accessToken")
            }
        }
        return await instance.get(`/academies/${principal.data.data.userId}/${page}`, option);
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
            setSelectAcademyInfoOpen((prevIsOpen) => !prevIsOpen);
            return;
        }
        setSelectedTarget(e.target);
        setSelectAcademyInfoOpen(true);
    }

    if(getMyAcademies.isLoading) {
        return <></>;
    }

    return (
        <div>
            <h2>🎒 나의 학원</h2>
            <div>
                {getMyAcademies.data.data.listTotalCount === 0 ? 
                <EmptyBox comment={<>나의 학원이 없습니다! <br />학원을 등록하고 승인 받아 나의 학원 정보를 등록해보세요!</>}
                    link={'/academy/regist'} btn={"등록하기"}/> :
                <>
                    <div css={S.SComment}>나의 <span>학원 정보를 수정</span>해보세요! 학원명을 클릭하면 상세 페이지로 이동합니다.</div>
                    <table css={GS.STable}>
                        <tbody>
                            <tr>
                                <td>학원 번호</td>
                                <td>학원명</td>
                                <td>학원 선택</td>
                            </tr>
                            { getMyAcademies?.data?.data.academyRegistrations.map(academy => {
                                return  <tr key={academy.academyRegistrationId} 
                                            style={{ fontWeight: selectedAcademy === academy ? 'bold' : 'normal'}}>
                                            <td>{academy.acaAsnum}</td>
                                            <td css={S.SAcaNm} onClick={()=> {navigate(`/academy/info/1?ACADEMY_ID=${academy.academyId}`)}}>{academy.acaNm}</td>
                                            <td>
                                                <button css={GS.SButton} onClick={(e) => handleAcademyOnClick(e, academy)}>
                                                    {selectedAcademy === academy ? '선택 해제' : '선택'}
                                                </button>
                                            </td>
                                        </tr>
                            })}
                        </tbody>
                    </table>
                    <Pagination totalCount={getMyAcademies?.data?.data?.listTotalCount}
                        link={`/account/mypage/myacademy`} />
                    <div>
                        {selectAcademyInfoOpen && !!selectedAcademy && <DetailMyAcademy selectedAcademy={selectedAcademy}/>}
                    </div>
                </> }
            </div> 
        </div>
    );
}

export default MypageMyAcademy;