import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import * as GS from "../../../../styles/Global/Common";
import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../../../api/config/instance';
import { AiFillStar } from 'react-icons/ai';
import Pagination from '../../../Pagination/Pagination';
import { useNavigate, useParams } from 'react-router-dom';
import EmptyBox from '../../../EmptyBox/EmptyBox';
import { Rating } from '@micahlt/react-simple-star-rating';
import { PiSneakerMove } from "react-icons/pi";

function MypageReview(props) {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");
    const userId = principal?.data?.data?.userId;
    const { page } = useParams();

    const [ reviewData, setReviewData ] = useState();     // 리뷰 정보 저장하는 상태 변수

    const [ modifyButtonState, setModifyButtonState ] = useState(false);
    const [ changeState, setChanegState ] = useState(false);

    const [ selectedReview, setSelectedReview ] = useState();
    const [ selectedTarget, setSelectedTarget ] = useState();
    const [ isSelected, setIsSelected ] = useState(false);

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

    const reviewOnClick = (e, data) => {
        setSelectedReview((prevSelectedReview) => 
            prevSelectedReview === data ? null : data
        );

        if (selectedTarget === e.target) {
            setIsSelected((prevIsOpen) => !prevIsOpen);
            return;
        }
        setSelectedTarget(e.target);
        setIsSelected(true);
    }

    const reviewContentChange = (e) => {
        setSelectedReview({
            ...selectedReview,
            [e.target.name]: e.target.value
        })
        setChanegState(true);
    }

    const reviewScoreChange = (value) => {
        setSelectedReview({
            ...selectedReview,
            score: parseFloat(value)
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
                {getUserReviews.data.data.length === 0 ? (
                    <EmptyBox comment={"다녀본 학원에 후기를 남겨보세요!"} link={'/academy/find/1'} btn={"보러 가기"}/>
                ) : (
                    <>
                        <table css={GS.STable}>
                            <tbody>
                                <tr>
                                    <td>학원명</td>
                                    <td>별점</td>
                                    <td>후기</td>
                                    <td>선택</td>
                                </tr>
                                {!getUserReviews.isLoading && (!reviewData?.reviewList || reviewData.reviewList.length === 0) && (
                                    <tr>
                                        <td colSpan={4}>후기가 존재하지 않습니다! 학원 페이지에서 후기를 작성해보세요!</td>
                                    </tr>
                                )}
                                {reviewData?.reviewList?.map((data) => {
                                    return (
                                        <tr key={data.academyId}>
                                            <td>{data.academyName}</td>
                                            <td>{data.score}</td>
                                            <td css={S.ContentBox}>{data.reviewContent}</td>
                                            <td>
                                                <button css={GS.SButton} onClick={(e) => {reviewOnClick(e, data)}}>
                                                    {selectedReview === data ? "선택해제" : "선택"}
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        {!!reviewData?.reviewList[0] && 
                            <Pagination totalCount={reviewData?.reviewCount?.reviewCount} link={`/account/mypage/review`}/>
                        }
                        {isSelected && !!selectedReview && (
                            <div css={S.SContainer}>
                                <div css={S.SAcademyInfoBox}>
                                    <div>
                                        <div>{selectedReview.academyName}</div>
                                        <span onClick={() => {navigate(`/academy/info/1?ACADEMY_ID=${selectedReview.ACADEMY_ID}`)}}>
                                            <PiSneakerMove />이동
                                        </span>
                                    </div>
                                    <div>
                                        <button css={GS.SButton} onClick={reviewDeleteButton}>삭제</button>
                                        {!modifyButtonState ?
                                            <button css={GS.SButton} onClick={reviewModifyButton}>수정</button>
                                            : <button css={GS.SButton} onClick={reviewSubmitButton}>확인</button>
                                        }
                                    </div>
                                </div>
                                {!modifyButtonState ? (
                                    <>
                                        <div css={S.ReviewScoreBox}>
                                            <AiFillStar color='yellow' size={20}/>
                                            {selectedReview.score}
                                        </div>
                                        <div css={S.ReviewContentBox}>
                                            {selectedReview.reviewContent}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div  css={S.ReviewScoreBox}>
                                            <Rating style={{ maxWidth: 250 }} initialValue={selectedReview?.score} value={selectedReview.score} 
                                                onClick={reviewScoreChange} allowFraction={true} size={20} fillColor="#FFFF36"/>
                                        </div>
                                        <textarea css={S.ReviewContentBox} name="reviewContent" cols="140" rows="10" placeholder='수강 후기를 작성해 주세요.' 
                                            onChange={reviewContentChange} defaultValue={selectedReview?.reviewContent} />
                                    </>
                                )}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default MypageReview;