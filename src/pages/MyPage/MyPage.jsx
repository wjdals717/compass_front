import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import RootContainer from '../../components/RootContainer/RootContainer';
import MypageContainer from '../../components/MyPageContainer/MypageContainer';
import { Route, Routes, useNavigate, useSearchParams } from 'react-router-dom';
import MypageUser from '../../components/MyPageContainer/MypageUser/MypageUser';
import MyPageInquiry from '../../components/MyPageContainer/StudentMypage/MypageInquiry/MypageInquiry';
import MypageReview from '../../components/MyPageContainer/StudentMypage/MypageReview/MypageReview';
import MypageAdPayment from '../../components/MyPageContainer/AcademyMypage/MypageAdPayment/MypageAdPayment';
import MyPageConsultation from '../../components/MyPageContainer/AcademyMypage/MypageConsultation/MypageConsultation';
import AcademyWaiting from '../../components/MyPageContainer/WebMasterMypage/AcademyWaiting/AcademyWaiting';
import InquiryList from '../../components/MyPageContainer/WebMasterMypage/InquiryList/InquiryList';
import MypageLike from '../../components/MyPageContainer/MypageLike/MypageLike';
import StudentSidebar from '../../components/MyPageSidebar/StudentSidebar/StudentSidebar';
import WebMastesrSidebar from '../../components/MyPageSidebar/WebMastesrSidebar/WebMastesrSidebar';
import AcademySidebar from '../../components/MyPageSidebar/AcademySidebar/AcademySidebar';
import { css } from '@emotion/react';
import MypageAppliedAcademy from '../../components/MyPageContainer/AcademyMypage/MypageAppliedAcademy/MypageAppliedAcademy';
import MypageMyAcademy from '../../components/MyPageContainer/AcademyMypage/MypageMyAcademy/MypageMyAcademy';
import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../api/config/instance';

/** @jsxImportSource @emotion/react */
import * as S from "./Style"

function MyPage(props) {
    // 사용자 정의 인증 확인 훅 사용
    const isAuthenticated = useAuth();

    const navigate = useNavigate();
    const useAuth = () => {
    const navigate = useNavigate();
    const isAuthenticated = !!localStorage.getItem("accessToken");

    useEffect(() => {
        if (!isAuthenticated) {
        // 인증되지 않았다면 로그인 페이지로 리디렉션
        alert("로그인 후 이용해주세요");
        navigate('/auth/signin');
        }
    }, [isAuthenticated, navigate]);

    return isAuthenticated;
    };

    const queryClient = useQueryClient();
    const principalState = queryClient.getQueryState("getPrincipal");
    const principal = principalState?.data?.data;

    // principal이나 principal.roleId가 없을 경우 기본값을 설정
    const [roleId, setRoleId] = useState(principal?.roleId || null);
    const [uncheckedAnswerCount, setUncheckedAnswerCount] = useState();
    const userId = principal?.userId;

    const getLikeCountOfMypage = useQuery(["getLikeCountOfMypage"], async () => {
    try {
        const option = {
        headers: {
            Authorization: localStorage.getItem("accessToken")
        }
        };
        return await instance.get(`/account/mypage/like/count/${userId}`, option);
    } catch (error) {
        console.error(error);
    }
    }, {
    retry: 0,
    refetchOnWindowFocus: false
    });

    if (!isAuthenticated) {
    // 인증 확인 훅이 리디렉션을 처리하므로 여기서는 null을 반환하여 나머지 컴포넌트를 렌더링하지 않습니다.
    return null;
    }
    
    // principal.roleId가 없을 경우 기본값을 설정
    const sidebarComponent =
    roleId === 0
        ? <WebMastesrSidebar />
        : roleId === 1
        ? <StudentSidebar
            uncheckedAnswerCount={uncheckedAnswerCount}
            setUncheckedAnswerCount={setUncheckedAnswerCount}
        />
        : roleId === 2
        ? <AcademySidebar />
        : null;

    return (
        <RootContainer>
            <div css={S.SLayout}>
                {getLikeCountOfMypage.isLoading ? <></> : sidebarComponent}
                <MypageContainer>
                    <Routes>
                        <Route path='/like' element={<MypageLike />} />
                        <Route path='/user' element={<MypageUser />} />
                        <Route path='/inquiry/:page' element={<MyPageInquiry setUncheckedAnswerCount={setUncheckedAnswerCount}/>} />
                        <Route path='/review' element={<MypageReview />} />
                        <Route path='/myacademy/:page' element={<MypageMyAcademy />} />
                        <Route path='/appliedacademy/:page' element={<MypageAppliedAcademy />} />                    
                        <Route path='/consultation/:page' element={<MyPageConsultation />} />
                        <Route path='/adpayment/:page' element={<MypageAdPayment />} />
                        <Route path='/academywaiting/:page' element={<AcademyWaiting />} />
                    </Routes>
                </MypageContainer>
            </div>
        </RootContainer>
    );
}

export default MyPage;