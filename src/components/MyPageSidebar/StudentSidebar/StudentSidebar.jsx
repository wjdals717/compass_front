import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "../Style";
import MyPageSidebar from '../MyPageSidebar';
import {AiFillSetting} from 'react-icons/ai';
import { Link, NavLink, useParams } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../../api/config/instance';




function StudentSidebar({ uncheckedAnswerCount, setUncheckedAnswerCount }) {

    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");
    const likeCountOfMypage = queryClient.getQueryState("getLikeCountOfMypage");
    const { likeId } = useParams(); 

    const getUncheckedAnswerCount = useQuery(['getUncheckedAnswerCount'], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await instance.get(`/inquiry/${principal?.data?.data.userId}/UncheckedAnswerCount`, option)
        } catch (error) {
            console.error(error);
        }
    },{
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (data) => {
            // uncheckedInquiryCount 값을 가져와서 상태 업데이트
            setUncheckedAnswerCount(data.data);
        }
    })

    return (
        <MyPageSidebar role={'학생'}>
            <div css={S.IconContainer}>
                <NavLink to='/account/mypage/like' activeClassName='active'>
                    <div>
                        <span>❤️</span>
                        <span>관심 학원 {likeCountOfMypage?.data?.data}개</span>
                    </div>
                </NavLink>
                <NavLink to='/account/mypage/user' activeClassName='active'>
                    <div>
                        <span><AiFillSetting/></span>
                        <span>개인 정보 수정</span>
                    </div>
                </NavLink>
            </div>
            <div css={S.RoleContainer}>
                <NavLink to='/account/mypage/appliedacademy/1' activeClassName='active'>
                    🗒️ 학원 신청 목록
                </NavLink>
                <NavLink to='/account/mypage/inquiry/1' activeClassName='active'>
                    <div css={S.InquiryBox}>
                        📞 나의 학원 문의 
                        { uncheckedAnswerCount > 0 && <div>{uncheckedAnswerCount}</div>}
                    </div>
                </NavLink>
                <NavLink to='/account/mypage/review' activeClassName='active'>
                    📜 작성한 후기
                </NavLink>
            </div>
        </MyPageSidebar>
    );
}

export default StudentSidebar;