import React from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import MyPageSidebar from '../MyPageSidebar';
import {AiFillSetting} from 'react-icons/ai';
import { Link, NavLink, useParams } from 'react-router-dom';
import * as S from "../Style";
import { useQueryClient } from 'react-query';

function AcademySidebar(props) {

    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");
    const likeCountOfMypage = queryClient.getQueryState("getLikeCountOfMypage");
    const { likeId } = useParams();

    return (
        <MyPageSidebar role={'학원 관리자'}>
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
                <NavLink to='/account/mypage/myacademy/1' activeClassName='active'>
                    🎒 나의 학원
                </NavLink>
                <NavLink to='/account/mypage/appliedacademy/1' activeClassName='active'>
                    🗒️ 학원 신청 목록
                </NavLink>
                <NavLink to='/account/mypage/adpayment/1' activeClassName='active'>
                    💸 광고 결제
                </NavLink>
                <NavLink to='/account/mypage/consultation/1' activeClassName='active'>
                    📩 나의 학원 문의
                </NavLink>
                <NavLink to='/account/mypage/inquiry/1' activeClassName='active'>
                    📞 나의 문의
                </NavLink>
            </div>
        </MyPageSidebar>
    );
}

export default AcademySidebar;