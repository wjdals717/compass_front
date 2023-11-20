import React, { useState } from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "../../Style"
import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../../../api/config/instance';
import { useNavigate, useParams } from 'react-router-dom';
import SelectedInquiry from './SelectedInquiry/SelectedInquiry';

function MypageInquiry(props) {
    const navigate = useNavigate();
    const { page } = useParams();

    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");

    const [ selectedInquiry, setSelectedInquiry ] = useState();

    const getUserInquiryList = useQuery(['getUserInquiryList', page], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await instance.get(`/${principal.data.data.userId}/inquiries/${page}`,option) 
        } catch (error) {
            console.error(error);
        }
    }, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: () => {
            setSelectedInquiry(null);
        }
    })

    const pagination = () => {
        if(getUserInquiryList.isLoading) {
            return <></>
        }
        const totalAcademyCount = getUserInquiryList.data.data.listTotalCount;
        const lastPage = getUserInquiryList.data.data.listTotalCount % 5 === 0 
            ? totalAcademyCount / 5 
            : Math.floor(totalAcademyCount / 5) + 1

        const startIndex = page % 5 === 0 ? page - 4 : page - (page % 5) + 1;
        const endIndex = startIndex + 4 <= lastPage ? startIndex + 4 : lastPage;

        const pageNumbers = [];
        
        for(let i = startIndex; i <= endIndex; i++) {
            pageNumbers.push(i);
        }

        return (
            <>
                <button disabled={parseInt(page) === 1} onClick={() => {
                    navigate(`/account/mypage/inquiry/${parseInt(page) - 1}`);
                }}>&#60;</button>

                {pageNumbers.map(num => {
                    return <button  className={parseInt(page) === num ? 'selected' : ''}
                                    onClick={() => {
                                        navigate(`/account/mypage/inquiry/${num}`);
                                    }} 
                                key={num}>{num}
                            </button>
                })}

                <button disabled={parseInt(page) === lastPage} onClick={() => {
                    navigate(`/account/mypage/inquiry/${parseInt(page) + 1}`);
                }}>&#62;</button>
            </>
        )
    }

    const handleInquiryOnClick = (inquiry) => {
        setSelectedInquiry(inquiry);
    }

    return (
        <div>
            <h2>📞 나의 학원 문의</h2>
            <div>
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
                                        style={{ fontWeight: selectedInquiry === inquiry ? 'bold' : 'normal' }}>
                                        <td>{inquiry.inquiryId}</td>
                                        <td>{inquiry.acaNm}</td>
                                        <td>{inquiry.inquiryTitle}</td>
                                        <td>{answerDisplay}</td>
                                    </tr>
                        })}
                    </tbody>
                </table>
                <div css={S.SPageNumbers}>
                    {pagination()}
                </div>
                {!!selectedInquiry && <SelectedInquiry selectedInquiry={selectedInquiry}/>}
            </div>
        </div>
    );
}

export default MypageInquiry;