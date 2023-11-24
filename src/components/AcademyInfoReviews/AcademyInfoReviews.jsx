import React from 'react';
/** @jsxImportSource @emotion/react */
import { useQuery } from 'react-query';
import { instance } from '../../api/config/instance';
import { useState } from 'react';
import * as S from "./Style";
import * as GS from "../../styles/Global/Common";
import { AiFillStar} from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AcademyInfoReviews({academyId, userId, principal}) {
    
    const navigate = useNavigate();
    const [ reviewData, setReviewData ] = useState();     // 리뷰 정보 저장하는 상태 변수
    const [ modifyButtonState, setModifyButtonState ] = useState(false);

    const [ reviewWriteData, setReviewWriteData] = useState({
        ACADEMY_ID: parseInt(academyId),
        userId: userId,
        score: "",
        reviewContent: ""
    })


    //리뷰 가져오기
    const getReviews = useQuery(["getReviews", modifyButtonState], async () => {
        // api, options를 get 요청
        try {
            const options = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await instance.get(`/academy/${academyId}/reviews`, options);
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
            return await instance.get(`/review/${academyId}/${userId}`);
        }catch(error) {
            console.error(error);
        }
    },
    {
        retry: 1,
        refetchOnWindowFocus: false
    });

    const reviewSubmitButton = async () => {
        try {
            // 사용자가 로그인되어 있고 이메일이 확인된 경우 확인
            if (principal.data && principal.data.data.enabled) {
                const options = {
                    headers: {
                        Authorization: localStorage.getItem("accessToken")
                    }
                };
                if(modifyButtonState) {
                    if(window.confirm("작성한 후기를 수정하시겠습니까?")){
                        setModifyButtonState(false);
                        await instance.put(`/review`, reviewWriteData);              
                    }
                } else {
                    if(window.confirm("후기를 등록하시겠습니까?")){
                        await instance.post("/review", reviewWriteData);
                    }
                }
                setReviewWriteData({
                    ...reviewWriteData,
                    score: "",
                    reviewContent: ""
                })
                getReview.refetch();
                return getReviews.refetch();
            } else if (principal.data.data.roleId === 0){
                alert("관리자는 후기를 작성할 수 없습니다.")
            } else {
                alert("이메일 인증 후 이용해주세요.");
                navigate("/account/mypage/user")
                return;
            }
            
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    const reviewContentChange = (e) => {
        setReviewWriteData({
            ...reviewWriteData,
            [e.target.name]: e.target.value
        })
    }

    const reviewScoreChange = (e) => {
        setReviewWriteData({
            ...reviewWriteData,
            [e.target.name]: parseInt(e.target.value)
        })
    }

    const reviewModifyButton = (e) => {
        setModifyButtonState(true);
        setReviewWriteData(getReview.data.data.review);
    }

    const reviewDeleteButton = async (e) => {
        try{
            setModifyButtonState(false);
            getReview.refetch();
            const options = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            if(window.confirm("후기를 삭제하시겠습니까?")){
                await instance.delete(`/review/${academyId}/${userId}`, options);
            }
            setReviewWriteData({
                ...reviewWriteData,
                score: "",
                reviewContent: ""
            })
            return getReviews.refetch();
            
        } catch(error) {
            alert(error.response.data.message);
        }
    }

    const horoscopeChange = (e) => {
        setReviewWriteData({
            ...reviewWriteData,
            [e.target.name]: parseInt(e.target.value)
        })
    }

    useEffect(() => {
        getReviews.refetch();
        getReview.refetch();
    }, [modifyButtonState]);

    return (
        <div css={S.SReviewContainer} id='review'>
            <h1>수강후기</h1>
            <div css={S.SReviewScore}>
                <AiFillStar css={S.SStar}/> {reviewData?.reviewCount?.scoreAvg}
            </div>
            <ul css={S.SReviewListContainer}>
                {reviewData?.reviewList.map(data => {
                    return (
                        <li css={S.SReviewList} key={reviewData.reviewId}>
                            <h2>{data.nickname}</h2>
                            <div><AiFillStar css={S.SStar}/> {data.score}</div>
                            <span>{data.reviewContent}</span>
                            {data.userId == userId && 
                                <div>
                                    <button css={GS.SButton} onClick={() => {reviewModifyButton()}}>수정</button>
                                    <button css={GS.SButton} onClick={() => {reviewDeleteButton()}}>삭제</button>
                                </div>
                            }
                        </li>
                    )})}
            </ul>
            <div>
                <div css={S.SReviewInfo}>
                    <div css={S.SReviewUserScoreContainer}>
                        <h2>{principal?.data?.data.nickname}</h2>
                        <div>
                            <AiFillStar css={S.SStar}/> 
                            <input type="text" name="score" id="score" placeholder='별점' 
                                onChange={reviewScoreChange} value={reviewWriteData?.score} />
                        </div>
                    </div>
                    <button onClick={reviewSubmitButton}><BsFillPencilFill/>후기작성</button>
                </div>
                <textarea css={S.SReviewBox} name="reviewContent" id="reviewContent" cols="140" rows="10" placeholder='수강 후기를 작성해 주세요.' 
                    onChange={reviewContentChange} value={reviewWriteData?.reviewContent} />
            </div>
        </div>
    );
}

export default AcademyInfoReviews;