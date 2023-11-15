import React from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import MyPageSidebar from '../MyPageSidebar';
import {AiFillSetting} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import * as S from "../Style";

function AcademySidebar(props) {
    return (
        <MyPageSidebar role={'학원 관리자'}>
            <div css={S.IconContainer}>
                <Link to='/account/mypage'>
                    <div>
                        <span>❤️</span>
                        <span>관심 학원 0개</span>
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
                <Link to='/account/mypage/myacademy/1'>
                    <div>🎒 나의 학원</div>
                </Link>
                <Link to='/account/mypage/appliedacademy/1'>
                    <div>🗒️ 학원 신청 목록</div>
                </Link>
                <Link to='/account/mypage/adpayment'>
                    <div>💸 광고 결제</div>
                </Link>
                <Link to='/account/mypage/consultation'>
                    <div>📞 나의 학원 문의</div>
                </Link>
            </div>
        </MyPageSidebar>
    );
}

export default AcademySidebar;