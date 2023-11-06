import React, { useState } from 'react';
import RootContainer from '../../components/RootContainer/RootContainer';
import MyPageSidebar from '../../components/MyPageSidebar/MyPageSidebar';
import MypageContainer from '../../components/MyPageContainer/MypageContainer';
import { Route, Routes } from 'react-router-dom';
import MypageUser from '../../components/MyPageContainer/MypageUser/MypageUser';
import MyPageInquiry from '../../components/MyPageContainer/StudentMypage/MypageInquiry/MypageInquiry';
import MypageReview from '../../components/MyPageContainer/StudentMypage/MypageReview/MypageReview';
import MyPageMyAcamedy from '../../components/MyPageContainer/AcademyMypage/MypageMyAcamedy/MypageMyAcamedy';
import MypageAdPayment from '../../components/MyPageContainer/AcademyMypage/MypageAdPayment/MypageAdPayment';
import MyPageConsultation from '../../components/MyPageContainer/AcademyMypage/MypageConsultation/MypageConsultation';
import AcademyWaiting from '../../components/MyPageContainer/WebMasterMypage/AcademyWaiting/AcademyWaiting';
import InquiryList from '../../components/MyPageContainer/WebMasterMypage/InquiryList/InquiryList';
import MypageLike from '../../components/MyPageContainer/MypageLike/MypageLike';
import StudentSidebar from '../../components/MyPageSidebar/StudentSidebar/StudentSidebar';
import WebMastesrSidebar from '../../components/MyPageSidebar/WebMastesrSidebar/WebMastesrSidebar';
import AcademySidebar from '../../components/MyPageSidebar/AcademySidebar/AcademySidebar';
import * as S from "./Style";
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

function MyPage(props) {
    return (
        <RootContainer>
            <div css={S.SLayout}>
                <StudentSidebar />
                {/* <AcademySidebar /> */}
                {/* <WebMastesrSidebar /> */}
                <MypageContainer title={"title"}>
                    <Routes>
                        <Route path='/' element={<MypageLike />} />
                        <Route path='/user' element={<MypageUser />} />
                        <Route path='/inquiry' element={<MyPageInquiry />} />
                        <Route path='/review' element={<MypageReview />} />
                        <Route path='/myacademy' element={<MyPageMyAcamedy />} />
                        <Route path='/adpayment' element={<MypageAdPayment />} />
                        <Route path='/consultation' element={<MyPageConsultation />} />
                        <Route path='/academywaiting' element={<AcademyWaiting />} />
                        <Route path='/inquirylist' element={<InquiryList />} />
                    </Routes>
                </MypageContainer>
            </div>
        </RootContainer>
    );
}

export default MyPage;