import React from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import MyPageSidebar from '../MyPageSidebar';
import {AiFillSetting} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import * as S from "../Style";

function WebMastesrSidebar(props) {
    return (
        <MyPageSidebar role={'마스터'}>
            <div css={S.RoleContainer}>
                <Link to='/account/mypage/academywaiting'>
                    <div>📜 학원 등록 대기목록</div>
                </Link>
                <Link to='/account/mypage/inquirylist'>
                    <div>📞 문의내역</div>
                </Link>
            </div>
        </MyPageSidebar>
    );
}

export default WebMastesrSidebar;