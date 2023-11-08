import React from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import defalutProfile from '../../../assets/고양이.jpg';

function MypageLike(props) {
    return (
        <div>
            <h2>❤️ 나의 관심 학원</h2>
            <div>
                <ul css={S.UlBox}>
                    <li css={S.LiBox} className='recent'>
                        <img src={defalutProfile} alt="" />
                        <strong>학원 이름</strong>
                        <div>학원 설명</div>
                    </li>
                    <li css={S.LiBox} className='recent'>
                        <img src={defalutProfile} alt="" />
                        <strong>학원 이름</strong>
                        <div>학원 설명</div>
                    </li>
                    <li css={S.LiBox} className='recent'>
                        <img src={defalutProfile} alt="" />
                        <strong>학원 이름</strong>
                        <div>학원 설명</div>
                    </li> 
                </ul>
            </div>

        </div>
    );
}

export default MypageLike;