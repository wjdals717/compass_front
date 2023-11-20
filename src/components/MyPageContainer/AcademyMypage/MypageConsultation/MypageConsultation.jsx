import React, { useState } from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "../../Style"
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../../../api/config/instance';
import Select from 'react-select';

function MypageConsultation(props) {
    const navigate = useNavigate();
    const { page } = useParams();

    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");

    const [ academyList, setAcademyList ] = useState();
    const [ selectedAcademy, setSelectedAcademy ] = useState();
    const [ selectedInquiry, setSelectedInquiry ] = useState();

    const getMyAcademyAll = useQuery(['getMyAcademyAll'], async () => {
        try {
            
        } catch (error) {
            console.error(error);
        }
    })

    const getInquiryList = useQuery(['getInquiryList', page], async () => {
        try {
            const option = {
                param: {
                    academyId: ""
                },
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await instance.get(`/academy/inquiries/${principal.data.data.userId}/${page}`,option)
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

    return (
        <div>
            <h2>📞 나의 학원 문의</h2>
            <div>
                <table css={S.STable}>
                    <thead>
                        <tr>
                            <td>No</td>
                            <td>문의사항</td>
                            <td>등록자</td>
                            <td>답변</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>ㅁㅁㅁ에 대해 문의드립니다.</td>
                            <td>aaa</td>
                            <td>O</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>ㅇㅇㅇ에 대해 문의드립니다.</td>
                            <td>bbb</td>
                            <td>X</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MypageConsultation;