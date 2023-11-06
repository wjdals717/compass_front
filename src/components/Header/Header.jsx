import React, { useState } from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { Link, useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';

function Header(props) {

    const queryClient = useQueryClient();
    const principalState = queryClient.getQueryState("getPrincipal");

    const navigate = useNavigate();

    const [ isOpen, setIsOpen ] = useState(false);

    const handleDropdownBtnOnClick = () => {
        setIsOpen(!isOpen);
    }

    const handleLoginOnClick = () => {
        navigate("/auth/signin");
    }

    const handleLogoutOnClick = () => {
        if(window.confirm("로그아웃 하시겠습니까?")) {
            localStorage.removeItem("accessToken");
            window.location.replace("/");
        }
    }

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <Link to={"/"}><h1 css={S.SLogoButton}>학습 나침반</h1></Link>
                <div css={S.SButtonBox}>
                    <Link to={"/academy/find"}>학원 찾기</Link>
                    <Link to={"/academy/regist"}>학원 등록</Link>
                </div>
            </div>
            <div css={S.SLoginButtonBox}>
                {!!principalState?.data?.data ? (
                    <div css={S.SDropDownbar}>
                    <button css={S.SDropBtn} onClick={handleDropdownBtnOnClick}>{principalState.data.data.nickname} 님</button>
                    <div css={[S.SDropDownContent, isOpen && S.SDropDownContentVisible]}>
                        <div css={S.SDropDownbarMenu}>
                            <div css={S.SBtn1}><Link to="/account/mypage">마이페이지</Link></div>
                            <div css={S.SBtn2}><a href="/" onClick={handleLogoutOnClick}>로그아웃</a></div>
                        </div>
                    </div>
                </div>
                ) : (
                    <div>
                        <Link to={"/auth/signin"} onClick={handleLoginOnClick}>로그인</Link>
                    </div>
                )}
            </div>
        </div>
    );
}


export default Header;