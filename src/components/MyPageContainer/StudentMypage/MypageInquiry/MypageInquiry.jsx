import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "../../Style"
import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../../../api/config/instance';
import { useNavigate, useParams } from 'react-router-dom';
import SelectedInquiry from './SelectedInquiry/SelectedInquiry';
import Pagination from '../../../Pagination/Pagination';
import EmptyBox from '../../../EmptyBox/EmptyBox';

function MypageInquiry({ setUncheckedAnswerCount }) {
    const navigate = useNavigate();
    const { page } = useParams();

    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");

    const [ selectedInquiry, setSelectedInquiry ] = useState();

    // 사용자가 작성한 문의 목록 가져오기
    const getUserInquiryList = useQuery(['getUserInquiryList', page], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await instance.get(`/student/inquiries/${principal.data.data.userId}/${page}`,option)
        } catch (error) {
            console.error(error);
        }
    }, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (data) => {
            setSelectedInquiry(null);
            // uncheckedInquiryCount 값을 가져와서 상태 업데이트
            setUncheckedAnswerCount(data.data.uncheckedInquiryCount); 
        }
    })

    // 문의 선택
    const handleInquiryOnClick = async (inquiry) => {
        // 만약 answerChecked가 1이면 서버에 업데이트 요청을 보냄
        if (inquiry.answerChecked === 1) {
            try {
                const option = {
                    headers: {
                        Authorization: localStorage.getItem("accessToken")
                    }
                };
                // 서버에 업데이트 요청
                await instance.put(`/inquiry/${inquiry.inquiryId}/updateAnswerChecked?answerChecked=0`, null, option);
                setSelectedInquiry(inquiry);
            } catch (error) {
                console.error(error);
            }
        } else {
            // answerChecked가 0이면 그냥 선택만 함
            setSelectedInquiry(inquiry);
        }
    };

    if(getUserInquiryList.isLoading) {
        return <></>;
    }

    return (
        <div>
            <h2>📞 나의 학원 문의</h2>
            <div>
                {getUserInquiryList.data.data.listTotalCount === 0 ? 
                <EmptyBox comment={"정보가 궁금한 학원에 문의를 남겨보세요!"} link={'/academy/find/1'} btn={"보러 가기"}/> : 
                <>
                    <div css={S.SComment}>학원을 클릭해서 작성한 문의와 답변을 확인해보세요! 확인 버튼을 누르면 알림이 사라집니다.</div>
                    <table css={S.STable}>
                        <thead>
                            <tr>
                                <td>No</td>
                                <td>학원명</td>
                                <td>문의사항</td>
                                <td>답변</td>
                            </tr>
                        </thead>
                        <tbody>
                            {!getUserInquiryList.isLoading && Array.isArray(getUserInquiryList?.data?.data.inquiries) && getUserInquiryList?.data?.data.inquiries.map(inquiry => {
                                const answerDisplay = inquiry.answer ? 'O' : 'X';
                                return  <tr key={inquiry.inquiryId} 
                                            onClick={() => handleInquiryOnClick(inquiry)} 
                                            style={{
                                                fontWeight: selectedInquiry === inquiry ? 'bold' : 'normal',
                                                color: inquiry.answerChecked === 1 ? 'red' : 'black'
                                            }}>
                                            <td>{inquiry.inquiryId}</td>
                                            <td>{inquiry.acaNm}</td>
                                            <td>{inquiry.inquiryTitle}</td>
                                            <td>{answerDisplay}</td>
                                        </tr>
                            })}
                        </tbody>
                    </table>
                    <Pagination totalCount={getUserInquiryList.data.data.listTotalCount}
                        link={'/account/mypage/inquiry'}/>
                    {!!selectedInquiry && 
                        <SelectedInquiry 
                            selectedInquiry={selectedInquiry}  
                            setSelectedInquiry={setSelectedInquiry}
                            page={page}/>
                    }
                </>}
            </div>
        </div>
    );
}

export default MypageInquiry;