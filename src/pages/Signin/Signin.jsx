import React from 'react';
import RootContainer from '../../components/RootContainer/RootContainer';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"

function Signin(props) {
    return (
        <RootContainer>
            <div css={S.SLayout}>
                <div css={S.SContainer}>
                    <div css={S.STitle}>
                        <h1>로그인</h1>
                        <h2>학습 나침반의 가치를 느껴보세요.</h2>
                    </div>
                </div>


                <div css={S.SLoginBox}>
                    <div><button css={S.SkakaoLoginBtn}>카카오 로그인</button></div>
                    <div><button>네이버 로그인</button></div>
                </div>
            </div>
        </RootContainer>
    );
}

export default Signin;