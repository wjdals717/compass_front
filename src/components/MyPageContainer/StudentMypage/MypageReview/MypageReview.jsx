import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import * as GS from "../../../../styles/Global/Common"
import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../../../api/config/instance';
import { AiFillStar } from 'react-icons/ai';
import EmptyBox from '../../../EmptyBox/EmptyBox';

function MypageReview(props) {
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");
    const userId = principal?.data?.data?.userId;

    const [ reviewData, setReviewData ] = useState();     // 리뷰 정보 저장하는 상태 변수

    const [ modifyButtonState, setModifyButtonState ] = useState(false);
    const [ changeState, setChanegState ] = useState(false);

    const [ selectedReview, setSelectedReview ] = useState();

    //리뷰 가져오기
    const getUserReviews = useQuery(["getUserReviews", modifyButtonState], async () => {
        // api, options를 get 요청
        try {
            const options = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await instance.get(`/account/${userId}/reviews`, options);
        }catch(error) {
            console.error(error);
        }
    },
    {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setReviewData(response.data);
        }
    });

    const getReview = useQuery(["getReview", modifyButtonState], async () => {
        try {
            return await instance.get(`/review/${selectedReview.ACADEMY_ID}/${userId}`);
        }catch(error) {
            console.error(error);
        }
    },
    {
        retry: 1,
        refetchOnWindowFocus: false
    });

    const reviewOnClick = (data) => {
        setModifyButtonState(false);
        setSelectedReview(data);
    }

    const reviewContentChange = (e) => {
        setSelectedReview({
            ...selectedReview,
            [e.target.name]: e.target.value
        })
        setChanegState(true);
    }

    const reviewScoreChange = (e) => {
        setSelectedReview({
            ...selectedReview,
            [e.target.name]: parseInt(e.target.value)
        })
        setChanegState(true);
    }
    

    const reviewModifyButton = (e) => {
        setModifyButtonState(true);
    }

    const reviewSubmitButton = async () => {
        try{
            if(changeState) {
                if(window.confirm("작성한 후기를 수정하시겠습니까?")){
                    setModifyButtonState(false);
                    await instance.put(`/review`, selectedReview);              
                }
                setChanegState(false);
                getReview.refetch();
                return getUserReviews.refetch();
            } else {
                setModifyButtonState(false);
            }
        } catch(error) {
            alert(error.response.data.message);
        }
    }

    const reviewDeleteButton = async () => {
        try {
            setModifyButtonState(false);
            const options = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            await instance.delete(`/review/${selectedReview.ACADEMY_ID}/${userId}`, options);
            setSelectedReview();
            return getUserReviews.refetch();
        } catch (error) {
            alert(error.response.data.message);
        }
    }

    if(getUserReviews.isLoading) {
        return <></>;
    }
    
    return (
        <div>
            <h2>📜 작성한 후기</h2>
            <div>
            {getUserReviews.data.data.length === 0 ? 
                <EmptyBox comment={"다녀본 학원에 후기를 남겨보세요!"} link={'/academy/find/1'} btn={"보러 가기"}/> : 
                <>
                <table css={GS.STable}>
                    <tbody>
                        <tr>
                            <td>학원명</td>
                            <td>별점</td>
                            <td>후기</td>
                            <td>선택</td>
                        </tr>
                        {reviewData?.map(data => {
                            return (
                                <tr>
                                    <td>{data.academyName}</td>
                                    <td>{data.score}</td>
                                    <td>{data.reviewContent}</td>
                                    <td><button onClick={() => {reviewOnClick(data)}}>선택</button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                {!!selectedReview &&
                    <div css={S.SContainer}>
                        <div css={S.SAcademyInfoBox}>
                            <div>
                                {selectedReview.academyName}
                            </div>
                            <div>
                                <button onClick={reviewDeleteButton}>삭제</button>
                                {!modifyButtonState ?
                                    <button onClick={reviewModifyButton}>수정</button>
                                    : <button onClick={reviewSubmitButton}>확인</button>
                                }
                            </div>
                        </div>
                        {!modifyButtonState ?
                            <>
                                <div css={S.ReviewScoreBox}>
                                    <AiFillStar color='yellow' />
                                    {selectedReview.score}
                                </div>
                                <div css={S.ReviewContentBox}>
                                    <div>{selectedReview.reviewContent}</div>
                                </div>
                            </>
                            : <>
                                <input css={S.ReviewInputScoreBox} type="text" name="score"
                                defaultValue={selectedReview?.score} onChange={reviewScoreChange} />
                                <textarea css={S.ReviewInputContentBox} name="reviewContent" cols="140" rows="10" placeholder='수강 후기를 작성해 주세요.' 
                                onChange={reviewContentChange} defaultValue={selectedReview?.reviewContent} />
                            </>
                        }
                    </div>
                }
                </>}
            </div>
        </div>
    );
}

export default MypageReview;