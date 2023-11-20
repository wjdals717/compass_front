import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import * as GS from '../../../../styles/Global/Common';
import { instance } from '../../../../api/config/instance';
import { useQuery } from 'react-query';
import SelectedAcademy from './SelectedAcademy/SelectedAcademy';
import { useNavigate, useParams } from 'react-router';

function AcademyWaiting(props) {
    const navigate = useNavigate();
    const { page } = useParams();

    const [ selectedAcademy, setSelectedAcademy ] = useState();

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
    
    const handleAcademyOnClick = (academy) => {
        setSelectedAcademy(academy);
    }

    const pagination = () => {
        if(getAcademies.isLoading) {
            return <></>
        }
        const totalAcademyCount = getAcademies.data.data.listTotalCount;
        const lastPage = getAcademies.data.data.listTotalCount % 5 === 0 
            ? totalAcademyCount / 5 
            : Math.floor(totalAcademyCount / 5) + 1

        const startIndex = page % 5 === 0 ? page - 4 : page - (page % 5) + 1;
        const endIndex = startIndex + 4 <= lastPage ? startIndex + 4 : lastPage;

        const pageNumbers = [];
        
        for(let i = startIndex; i <= endIndex; i++) {
            pageNumbers.push(i);
        }

        return (
            <>
                <button disabled={parseInt(page) === 1} onClick={() => {
                    navigate(`/account/mypage/academywaiting/${parseInt(page) - 1}`);
                }}>&#60;</button>

                {pageNumbers.map(num => {
                    return <button  className={parseInt(page) === num ? 'selected' : ''}
                                    onClick={() => {
                                        navigate(`/account/mypage/academywaiting/${num}`);
                                    }} 
                                key={num}>{num}
                            </button>
                })}

                <button disabled={parseInt(page) === lastPage} onClick={() => {
                    navigate(`/account/mypage/academywaiting/${parseInt(page) + 1}`);
                }}>&#62;</button>
            </>
        )
    }

    return (
        <div>
            <h2>📜 학원 등록 대기목록</h2>
            <div>
                <table css={S.STable}>
                    <thead>
                        <tr>
                            <td>학원 번호</td>
                            <td>학원명</td>
                            <td>신청자</td>
                            <td>학원 선택</td>
                        </tr>
                    </thead>
                    <tbody>
                        {!getAcademies.isLoading && 
                            Array.isArray(getAcademies?.data?.data.academyRegistrations) && 
                            getAcademies?.data?.data.academyRegistrations.map(academy => {
                                return  <tr key={academy.academyRegistrationId} 
                                            style={{ fontWeight: selectedAcademy === academy ? 'bold' : 'normal' }}>
                                            <td>{academy.acaAsnum}</td>
                                            <td>{academy.acaNm}</td>
                                            <td>{academy.name}</td>
                                            <td><button css={GS.SButton} onClick={() => handleAcademyOnClick(academy)}>선택</button></td>
                                        </tr>
                                })
                        }
                    </tbody>
                </table>
                <div css={S.SPageNumbers}>
                    {pagination()}
                </div>
                {!!selectedAcademy && <SelectedAcademy selectedAcademy={selectedAcademy}/>}
            </div>
        </div>
    );
}

export default AcademyWaiting;