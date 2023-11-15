import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './Style';
import * as GS from '../../../../styles/Global/Common';
import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../../../api/config/instance';
import { useNavigate, useParams } from 'react-router-dom';

function MypageMyAcademy(props) {

    const navigate = useNavigate();
    const { page } = useParams();

    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");

    const [ selectedAcademy, setSelectedAcademy ] = useState(null);

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

    const handleAcademyOnClick = (academy) => {
        setSelectedAcademy(academy);
        console.log(selectedAcademy);
    }

    return (
        <div>
            <h2>🎒 나의 학원</h2>
            <div>
                <div css={S.SComment}>나의 학원 정보를 수정해보세요!</div>
                <table css={S.STable}>
                    <thead>
                        <tr>
                            <td>학원 번호</td>
                            <td>학원명</td>
                            <td>학원 선택</td>
                        </tr>
                    </thead>
                    <tbody>
                        {!getMyAcademies.isLoading && 
                            Array.isArray(getMyAcademies?.data?.data.academyRegistrations) && 
                            getMyAcademies?.data?.data.academyRegistrations.map(academy => {
                                return  <tr key={academy.academyRegistrationId} 
                                            style={{ fontWeight: selectedAcademy === academy ? 'bold' : 'normal', color: academy.approvalStatus < 0 ? 'red' : 'black'}}>
                                            <td>{academy.acaAsnum}</td>
                                            <td>{academy.acaNm}</td>
                                            <td><button css={GS.SButton} onClick={() => handleAcademyOnClick(academy)}>선택</button></td>
                                        </tr>
                            })
                        }
                    </tbody>
                </table>
                <div css={S.SPageNumbers}>
                    {/* {pagination()} */}
                </div>
            </div>
        </div>
    );
}

export default MypageMyAcademy;