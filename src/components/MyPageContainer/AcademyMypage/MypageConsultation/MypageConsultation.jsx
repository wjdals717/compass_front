import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "../../Style"
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../../../api/config/instance';
import Select from 'react-select';
import SelectedInquiry from './SelectedInquiry/SelectedInquiry';
import Pagination from '../../../Pagination/Pagination';
import EmptyBox from '../../../EmptyBox/EmptyBox';

function MypageConsultation(props) {
    const navigate = useNavigate();
    const { page } = useParams();

    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");

    const [ academyList, setAcademyList ] = useState();
    const [ selectedAcademy, setSelectedAcademy ] = useState({ value: null, label: '전체' });
    const [ selectedInquiry, setSelectedInquiry ] = useState();
    const [ unansweredOnly, setUnansweredOnly ] = useState(0);

    const getMyAcademyAll = useQuery(['getMyAcademyAll'], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await instance.get(`/academies/${principal.data.data.userId}`,option)
        } catch (error) {
            console.error(error);
        }
    }, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setAcademyList([{ value: null, label: '전체' }, ...response.data.map(academy => {
                return { value: academy.academyId, label: academy.acaNm };
            })])
            
        }
    })

    const getInquiryList = useQuery(['getInquiryList', page, selectedAcademy, unansweredOnly], async () => {
        try {
            const option = {
                params: {
                    userId: principal.data.data.userId,
                    academyId: selectedAcademy ? selectedAcademy.value : null,
                    page: page,
                    unansweredOnly: unansweredOnly
                },
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await instance.get(`/academy/inquiries`,option)
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

    const handleAcademyChange = (selectedOption) => {
        setSelectedAcademy(selectedOption);
    };

    const handleInquiryOnClick = (inquiry) => {
        setSelectedInquiry(inquiry);
    }

    const handleUnansweredOnlyChange = (event) => {
        setUnansweredOnly(event.target.checked ? 1 : 0);
    };

    if(getMyAcademyAll.isLoading || getInquiryList.isLoading) {
        return <></>;
    }

    console.log(getInquiryList)

    return (
        <div>
            <h2>📞 나의 학원 문의</h2>
            <div>
                {getMyAcademyAll.data.data.listTotalCount === 0 ? 
                <EmptyBox comment={"나의 학원이 없습니다."} link={'/academy/regist'} btn={"등록하기"}/> : 
                <>
                    <div css={S.SOptionBox}>
                        <Select options={academyList} 
                            css={S.SSelect}
                            defaultValue={selectedAcademy}
                            onChange={handleAcademyChange} 
                        />
                        <div>
                            <input 
                                type="checkbox" 
                                id='unansweredOnly' 
                                onChange={handleUnansweredOnlyChange} 
                            />
                            <label htmlFor="unansweredOnly">미답변 문의</label>
                        </div>
                    </div>
                    <div>
                        {!getInquiryList.isLoading && getInquiryList.data.data.inquiries.length === 0 ? 
                        <div css={S.SEmptyBox}>{selectedAcademy.label}에는 남겨진 문의가 없습니다...</div> : 
                        <>
                            <table css={S.STable}>
                                <thead>
                                    <tr>
                                        <td>No</td>
                                        <td>학원명</td>
                                        <td>문의사항</td>
                                        <td>등록자</td>
                                        <td>답변</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    { getInquiryList?.data?.data.inquiries.map(inquiry => {
                                        const answerDisplay = inquiry.answer ? 'O' : 'X';
                                        return  <tr key={inquiry.inquiryId} 
                                                    onClick={() => handleInquiryOnClick(inquiry)} 
                                                    style={{ fontWeight: selectedInquiry === inquiry ? 'bold' : 'normal' }}>
                                                    <td>{inquiry.inquiryId}</td>
                                                    <td>{inquiry.acaNm}</td>
                                                    <td>{inquiry.inquiryTitle}</td>
                                                    <td>{inquiry.nickname}</td>
                                                    <td>{answerDisplay}</td>
                                                </tr>
                                    })}
                                </tbody>
                            </table>
                            {!getInquiryList.isLoading &&
                                <Pagination totalCount={getInquiryList.data.data.listTotalCount}
                                    link={`/account/mypage/consultation`}/>}
                            {!!selectedInquiry && 
                                <SelectedInquiry
                                    key={selectedInquiry.inquiryId}
                                    selectedInquiry={selectedInquiry}
                                    setSelectedInquiry={setSelectedInquiry}
                                    page={page} 
                                    selectedAcademy={selectedAcademy}
                                />
                            }
                        </>}
                    </div>
                </>
                }
            </div>
        </div>
    );
}

export default MypageConsultation;