import React, { useState } from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "../../Style"
import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../../../api/config/instance';

function MypageReview(props) {
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");

    const [ reviewData, setReviewData ] = useState();     // 리뷰 정보 저장하는 상태 변수

    //리뷰 가져오기
    const getUserReviews = useQuery(["getUserReviews"], async () => {
        // api, options를 get 요청
        try {
            const options = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await instance.get(`/academy/${principal?.data?.data?.userId}/reviews`, options);
        }catch(error) {
            console.error(error);
        }
    },
    {
        retry: 0,
        refetchOnWindowFocus: false,
        // onSuccess: response => {
        //     setReviewData(response.data);
        // }
    });

    return (
        <div>
            <h2>📜 작성한 후기</h2>
            <div>
                <table css={S.STable}>
                    <thead>
                        <tr>
                            <td>No</td>
                            <td>학원명</td>
                            <td>후기</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>ㅁㅁㅁ학원</td>
                            <td>~점이 좋았음</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>ㅇㅇㅇ학원</td>
                            <td>잘 가르침</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MypageReview;