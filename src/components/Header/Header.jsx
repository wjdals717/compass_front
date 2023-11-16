import React, { useState } from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { Link } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai'
import { useRecoilState } from 'recoil';
import { selectedCategoryState, selectedContentState, selectedLocationState } from '../../store/searchOptions';

function Header(props) {

    const queryClient = useQueryClient();
    const principalState = queryClient.getQueryState("getPrincipal");

    const [view, setView] = useState(false); 

    const [ isOpen, setIsOpen ] = useState(false);

    const handleDropdownBtnOnClick = () => {
        setIsOpen(!isOpen);
    }

    const handleLogoutOnClick = () => {
        if(window.confirm("로그아웃 하시겠습니까?")) {
            localStorage.removeItem("accessToken");
            window.location.replace("/");
        }
    }

    const [selectedLocation, setSelectedLocation] = useRecoilState(selectedLocationState);
    const [selectedCategory, setSelectedCategory] = useRecoilState(selectedCategoryState);
    const [selectedContent, setSelectedContent] = useRecoilState(selectedContentState);

    // Recoil 상태 초기화 함수
    const resetRecoilState = () => {
        setSelectedLocation({ atpt_ofcdc_sc_code: "", admst_zone_nm: "", si_do_name: "" });
        setSelectedCategory({ realm_sc_nm: "", category_nm: "", le_crse_nm: "", category_detail_nm: "" });
        setSelectedContent("");
    };

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <Link to={"/"}><h1 css={S.SLogoButton} onClick={resetRecoilState}>학습 나침반</h1></Link>
                <div css={S.SButtonBox}>
                    <Link to={"/academy/find/1"} onClick={resetRecoilState}>학원 찾기</Link>
                    <Link to={"/academy/regist"} onClick={resetRecoilState}>학원 등록</Link>
                </div>
            </div>
            <div css={S.SLoginButtonBox}>
                {!!principalState?.data?.data ? (
                    <div css={S.SDropLayout} onClick={() => {setView(!view)}}>
                        반가워요, {principalState.data.data.nickname} 님!{" "}
                        {view ? <AiOutlineUp/> : <AiOutlineDown/>}
                        {view && <ul css={S.SDropDown}>
                            <li><Link to="/account/mypage">마이페이지</Link></li>
                            <li><div onClick={handleLogoutOnClick}>로그아웃</div></li>
                        </ul>}
                    </div>
                ) : (
                    <div>
                        <Link to={"/auth/signin"}>로그인</Link>
                    </div>
                )}
            </div>
        </div>
    );
}


export default Header;