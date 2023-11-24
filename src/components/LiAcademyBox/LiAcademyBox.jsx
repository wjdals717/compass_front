import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { useNavigate } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";


function LiAcademyBox({academy}) {

    const navigate = useNavigate();

    const academyNameWithoutParentheses = academy.ACA_NM.replace(/\([^)]*\)/g, ''); // "()"를 빈 문자열로 대체
    const koreanChars = academyNameWithoutParentheses.match(/[ㄱ-ㅎ가-힣]/g); // 한글만 추출
    const firstTwoKoreanChars = koreanChars ? koreanChars.slice(0, 2).join('') : '';
    const address = academy.FA_RDNMA.split(' ').slice(0, 2).join(' ');
    const realm =
        academy.REALM_SC_NM === '국제화'
            ? '외국어'
            : academy.REALM_SC_NM === '정보'
            ? 'IT'
            : academy.REALM_SC_NM.replace(/\(대\)/g, '').trim();

    // 랜덤 색상을 useState로 한 번만 생성
    const [randomColor, setRandomColor] = useState(generateRandomColor());

    // 랜덤 색상을 생성하는 함수
    function generateRandomColor() {
        return `rgb(${Math.floor(Math.random() * 127 + 128)}, ${Math.floor(Math.random() * 127 + 128)}, ${Math.floor(Math.random() * 127 + 128)})`;
    }

    return  (
        <li key={academy.ACADEMY_ID} css={S.LiBox} className='recent' onClick={()=> {navigate(`/academy/info?ACADEMY_ID=${academy.ACADEMY_ID}`)}}>
            {academy.logoImg ? (
                <img src={academy.logoImg} alt={`${academy.ACA_NM}의 로고`}  />
            ): (
                <div css={[S.SRandomImg, { backgroundColor: randomColor }]}>
                    <span>{firstTwoKoreanChars}</span>
                </div>
            )}
            <strong>{academy.ACA_NM}</strong>
            <div css={S.SAddress}><FaLocationDot />{address}</div>
            <div>{realm}</div>
            <div css={S.SLikeAndRating}>
                <div>💕{academy.like_count}</div>
                <div>⭐{academy.avg_score}</div>
            </div>
        </li>
    )
}

export default LiAcademyBox;