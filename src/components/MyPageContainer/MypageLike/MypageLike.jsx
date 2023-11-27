
import React, { useState } from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../../api/config/instance';
import { useNavigate } from 'react-router-dom';
import LiAcademyBox from '../../LiAcademyBox/LiAcademyBox';
import LinkBtn from '../../Button/LinkBtn/LinkBtn';
import EmptyBox from '../../EmptyBox/EmptyBox';

function MypageLike(props) {
    // 랜덤 색상을 생성하는 함수
    const getRandomColor = () => {
    // 0부터 255 사이의 랜덤한 RGB 값 생성
    const randomColor = `rgb(${Math.floor(Math.random() * 127 + 128)}, ${Math.floor(Math.random() * 127 + 128)}, ${Math.floor(Math.random() * 127 + 128)})`;
    return randomColor;
    };

    const navigate = useNavigate();

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

    if(getLikeAcademiesQuery.isLoading) {
        return <></>;
    }
    
    return (
        <div>
            <h2>❤️ 나의 관심 학원</h2>
            <div>
                {getLikeAcademiesQuery.data.data.length === 0 ? 
                <EmptyBox comment={"나의 관심 학원을 추가해 보세요!"} link={'/academy/find/1'} btn={"보러 가기"}/> : 
                <ul css={S.UlBox}>
                    {!getLikeAcademiesQuery.isLoading && Array.isArray(getLikeAcademiesQuery?.data?.data) && getLikeAcademiesQuery?.data?.data.map(academy => {
                        return <LiAcademyBox key={academy.ACADEMY_ID} academy={academy}/>
                    })}
                </ul>}
            </div>
        </div>
    );
}

export default MypageLike;