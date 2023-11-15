
import React, { useState } from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import defalutProfile from '../../../assets/고양이.jpg';
import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../../api/config/instance';
import { useNavigate } from 'react-router-dom';


function MypageLike(props) {

    const navigate = useNavigate();

    const [ LikeAcademies, setLikeAcademies ] = useState([]);

    const queryClient = useQueryClient();
    const principalState = queryClient.getQueryState("getPrincipal")
    const principal = principalState?.data?.data;

    const userId = principal?.userId

    const getLikeAcademiesQuery = useQuery(["getLikeAcademies"], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await instance.get(`/account/mypage/like/${userId}`, option);
        } catch (error) {
            console.error(error);
        }
    }, {
        retry: 0,
        refetchOnWindowFocus: false
    });

    const likeAcademiesData = getLikeAcademiesQuery?.data;
    console.log(getLikeAcademiesQuery.data)
    
    return (
        <div>
            <h2>❤️ 나의 관심 학원</h2>
            <div>
                <ul css={S.UlBox}>
                    {!getLikeAcademiesQuery.isLoading && Array.isArray(getLikeAcademiesQuery?.data?.data) && getLikeAcademiesQuery?.data?.data.map(academy => {
                        return  <li css={S.LiBox} className='recent' onClick={()=> {navigate(`/academy/info?ACADEMY_ID=${academy.ACADEMY_ID}`)}}>
                                    <img src={defalutProfile} alt="" />
                                    <strong>{academy.ACA_NM}</strong>
                                    <div>학원 설명</div>
                                </li> 
                    })}
                </ul>
            </div>

        </div>
    );
}

export default MypageLike;