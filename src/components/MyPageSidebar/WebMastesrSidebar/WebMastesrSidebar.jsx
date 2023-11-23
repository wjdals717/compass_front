import React from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import MyPageSidebar from '../MyPageSidebar';
import {AiFillSetting} from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import * as S from "../Style";

function WebMastesrSidebar(props) {
    return (
        <MyPageSidebar role={'마스터'}>
            <div css={S.RoleContainer}>
                <NavLink to='/account/mypage/academywaiting/1' activeClassName='active'>
                    <div>📜 학원 등록 대기목록</div>
                </NavLink>
            </div>
        </MyPageSidebar>
    );
}
export default WebMastesrSidebar;