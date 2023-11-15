import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { useNavigate, useParams } from 'react-router-dom';
import { instance } from '../../../../api/config/instance';
import { useQuery } from 'react-query';
import { useQueryClient } from 'react-query';
import RetryMyAcademy from './RetryMyAcademy/RetryMyAcademy';

function MypageAppliedAcademy(props) {
    const navigate = useNavigate();
    const { page } = useParams();

    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");
    
    const [ selectedAcademy, setSelectedAcademy ] = useState(null);

    const getMyAcademies = useQuery(["getAppliedAcademy", page], async () => {
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

    const handleAcademyOnClick = (academy) => {
        setSelectedAcademy(academy);
    }

    const pagination = () => {
        if(getMyAcademies.isLoading) {
            return <></>
        }
        const totalAcademyCount = getMyAcademies.data.data.listTotalCount;
        const lastPage = getMyAcademies.data.data.listTotalCount % 5 === 0 
            ? totalAcademyCount / 5 
            : Math.floor(totalAcademyCount / 5) + 1;

        const startIndex = page % 5 === 0 ? page - 4 : page - (page % 5) + 1;
        const endIndex = startIndex + 4 <= lastPage ? startIndex + 4 : lastPage;

        const pageNumbers = [];
        
        for(let i = startIndex; i <= endIndex; i++) {
            pageNumbers.push(i);
        }

        return (
            <>
                <button disabled={parseInt(page) === 1} onClick={() => {
                    navigate(`/account/mypage/appliedacademy/${parseInt(page) - 1}`);
                }}>&#60;</button>

                {pageNumbers.map(num => {
                    return <button  className={parseInt(page) === num ? 'selected' : ''}
                                    onClick={() => {
                                        navigate(`/account/mypage/appliedacademy/${num}`);
                                    }} 
                                key={num}>{num}
                            </button>
                })}

                <button disabled={parseInt(page) === lastPage} onClick={() => {
                    navigate(`/account/mypage/appliedacademy/${parseInt(page) + 1}`);
                }}>&#62;</button>
            </>
        )
    }

    return (
        <div>
            <h2>🗒️ 학원 신청 목록</h2>
            <div>
                <table css={S.STable}>
                    <thead>
                        <tr>
                            <td>학원 번호</td>
                            <td>학원명</td>
                            <td>승인 여부</td>
                        </tr>
                    </thead>
                    <tbody>
                        {!getMyAcademies.isLoading && Array.isArray(getMyAcademies?.data?.data.academyRegistrations) && getMyAcademies?.data?.data.academyRegistrations.map(academy => {
                                return  <tr key={academy.academyRegistrationId} 
                                            onClick={() => handleAcademyOnClick(academy)} 
                                            style={{ fontWeight: selectedAcademy === academy ? 'bold' : 'normal', color: academy.approvalStatus < 0 ? 'red' : 'black'}}>
                                            <td>{academy.acaAsnum}</td>
                                            <td>{academy.acaNm}</td>
                                            <td>{academy.approvalStatus === 0 ? "승인 대기" : "승인 거절"}</td>
                                        </tr>
                            })}
                    </tbody>
                </table>
                <div css={S.SPageNumbers}>
                    {pagination()}
                </div>
                <div>
                    {!!selectedAcademy && 
                        (selectedAcademy?.approvalStatus > 0 ? <></> : 
                            selectedAcademy.approvalStatus === 0 ? 
                            <RetryMyAcademy type={"awaiting"} selectedAcademy={selectedAcademy}/> : 
                            <RetryMyAcademy type={"reject"} selectedAcademy={selectedAcademy}/>)}
                </div>
            </div>
        </div>
    );
}

export default MypageAppliedAcademy;