import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import * as GS from "../../../../styles/Global/Common";
import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../../../api/config/instance';
import { AiFillStar } from 'react-icons/ai';
import Pagination from '../../../Pagination/Pagination';
import { useParams } from 'react-router-dom';

function MypageReview(props) {
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");
    const userId = principal?.data?.data?.userId;
    const { page } = useParams();

    const [ reviewData, setReviewData ] = useState();     // 리뷰 정보 저장하는 상태 변수

    const [ modifyButtonState, setModifyButtonState ] = useState(false);
    const [ changeState, setChanegState ] = useState(false);

    const [ selectedReview, setSelectedReview ] = useState();

    //리뷰 가져오기
    const getUserReviews = useQuery(["getUserReviews", modifyButtonState, page], async () => {
        // api, options를 get 요청
        try {
            const options = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await instance.get(`/account/${userId}/reviews/${page}`, options);
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
    
    return (
        <div>
            <h2>📜 작성한 후기</h2>
            <div>
                <table css={S.STable}>
                    <thead>
                        <tr>
                            <td>학원명</td>
                            <td>별점</td>
                            <td>후기</td>
                            <td>선택</td>
                        </tr>
                    </thead>
                    <tbody>
                        {!getUserReviews.isLoading && (!reviewData?.reviewList || reviewData.reviewList.length === 0) &&
                            <tr>
                                <td colSpan={4}>후기가 존재하지 않습니다! 학원 페이지에서 후기를 작성해보세요!</td>
                            </tr>
                        }
                        {reviewData?.reviewList?.map(data => {
                            return (
                                <tr>
                                    <td>{data.academyName}</td>
                                    <td>{data.score}</td>
                                    <td>{data.reviewContent}</td>
                                    <td><button css={GS.SButton} onClick={() => {reviewOnClick(data)}}>선택</button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                {!getUserReviews.isLoading && 
                    <Pagination totalCount={reviewData?.reviewCount?.reviewCount} link={`/account/mypage/review`}/>}
                {!!selectedReview &&
                    <div css={S.SContainer}>
                        <div css={S.SAcademyInfoBox}>
                            <div>
                                {selectedReview.academyName}
                            </div>
                            <div>
                                <button css={GS.SButton} onClick={reviewDeleteButton}>삭제</button>
                                {!modifyButtonState ?
                                    <button css={GS.SButton} onClick={reviewModifyButton}>수정</button>
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
                                    {selectedReview.reviewContent}
                                </div>
                            </>
                            : <>
                                <div  css={S.ReviewScoreBox}>
                                    <AiFillStar color='yellow' />
                                    <input type="text" name="score"
                                    defaultValue={selectedReview?.score} onChange={reviewScoreChange} />
                                </div>
                                <textarea css={S.ReviewContentBox} name="reviewContent" cols="140" rows="10" placeholder='수강 후기를 작성해 주세요.' 
                                onChange={reviewContentChange} defaultValue={selectedReview?.reviewContent} />
                            </>
                        }
                    </div>
                }
            </div>
        </div>
    );
}

export default MypageReview;