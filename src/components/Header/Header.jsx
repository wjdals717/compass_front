import React from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <Link to={"/"}><h1>학습 나침반</h1></Link>
                <div css={S.SButtonBox}>
                    <Link to={"/academy/find"}>학원 찾기</Link>
                    <Link to={"/academy/regist"}>학원 등록</Link>
                </div>
            </div>
            <div css={S.SLoginButtonBox}>
                <Link to={"/auth/signin"}>로그인</Link>
            </div>
        </div>
    );
}

export default Header;