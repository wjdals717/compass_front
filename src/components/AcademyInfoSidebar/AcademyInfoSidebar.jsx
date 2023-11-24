import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { AiFillHeart,AiOutlineHeart } from 'react-icons/ai'
import { BsChatLeftTextFill } from 'react-icons/bs'
import { useQuery } from 'react-query';
import { instance } from '../../api/config/instance';
import * as S from "./Style";
import { useNavigate } from 'react-router-dom';

function AcademyInfoSidebar({ academyId, userId, principal}) {
    const navigate = useNavigate();
    
    const [ isAcademyRegistered, setIsAcademyRegistered ] = useState(false);    // 학원 관리자 등록 여부

    const getLikeState = useQuery(["getLikeState"], async () => {
        try {
            return await instance.get(`/account/like/${academyId}/${userId}`)
        } catch(error) {
            console.error(error)
        }
    }, {
        refetchOnWindowFocus: false,
        retry: 0
    })

    const likeCountOfInfo = useQuery(["getLikeCountOfInfo"], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await instance.get(`/account/info/like/count/${academyId}`, option)
        } catch(error) {
            console.error(error)
        }
    }, {
        retry: 0,
        refetchOnWindowFocus: false
    })

    // 학원 관리자가 등록된 학원인지 확인
    const isAcademyAdminRegistered = useQuery(["isAcademyAdminRegistered"], async () => {
        try {
            return await instance.get(`academy/check/${academyId}`)
        } catch (error) {
            console.error(error);
        }
    },{
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setIsAcademyRegistered(response.data);
        }
    });

    const handleLikeButtonClick = async () => {
        try {
            if(getLikeState?.data?.data) {
                await instance.delete(`/account/like/${academyId}/${userId}`);
            } else {
                await instance.post(`/account/like/${academyId}/${userId}`);
            }
            getLikeState.refetch();
            likeCountOfInfo.refetch();
        } catch(error) {
            console.error(error)
        }
    }

    const handleinquiryButton = () => {
        // 로그인이 안된것
        if (!principal.data) {
            alert("로그인 후 문의 작성이 가능합니다");
            window.location.replace("/auth/signin");
            return;
        }
        if (!principal?.data?.data.enabled) {
            alert("이메일 인증 후 문의 작성이 가능합니다.");
            window.location.replace("/account/mypage/user");
            return;
        }
        navigate(`/academy/inquiry?academyId=${academyId}`);
    }

    return (
        <div css={S.SSide}>
            <div css={S.SOptionBox}>
                {!getLikeState.isLoading &&
                    <button disabled={!principal?.data?.data}
                    css={S.SLikeButton}
                    onClick={handleLikeButtonClick}>
                        {getLikeState?.data?.data ? <AiFillHeart css={S.SLikeIcon(getLikeState?.data?.data)}/> :
                        <AiOutlineHeart css={S.SLikeIcon(getLikeState?.data?.data)}/>}
                        관심학원
                        <div>{likeCountOfInfo?.data?.data}</div>
                    </button>
                }
                <button css={S.SinquiryButton(isAcademyRegistered)} onClick={handleinquiryButton}>
                    <BsChatLeftTextFill css={S.SinquiryIcon}/>
                    문의
                </button>
            </div>
        </div>
    );
}

export default AcademyInfoSidebar;