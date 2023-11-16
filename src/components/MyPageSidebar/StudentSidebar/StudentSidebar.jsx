import React, { useState } from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "../Style";
import MyPageSidebar from '../MyPageSidebar';
import {AiFillSetting} from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../../api/config/instance';




function StudentSidebar(props) {

    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");
    const likeCountOfMypage = queryClient.getQueryState("getLikeCountOfMypage");
    const { likeId } = useParams();

    return (
        <MyPageSidebar role={'학생'}>
            <div css={S.IconContainer}>
                <Link to='/account/mypage'>
                    <div>
                        <span>❤️</span>
                        <span>관심 학원 {likeCountOfMypage?.data?.data}개</span>
                    </div>
                </Link>
                <Link to='/account/mypage/user'>
                    <div>
                        <span><AiFillSetting/></span>
                        <span>개인 정보 수정</span>
                    </div>
                </Link>
            </div>
            <div css={S.RoleContainer}>
                <Link to='/account/mypage/appliedacademy/1'>
                    <div>🗒️ 학원 신청 목록</div>
                </Link>
                <Link to='/account/mypage/inquiry'>
                    <div>📞 나의 학원 문의</div>
                </Link>
                <Link to='/account/mypage/review'>
                    <div>📜 작성한 후기</div>
                </Link>
            </div>
        </MyPageSidebar>
    );
}

export default StudentSidebar;