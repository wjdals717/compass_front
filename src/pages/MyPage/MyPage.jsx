import React from 'react';
import { css } from '@emotion/react';
import RootContainer from '../../components/RootContainer/RootContainer';
import MyPageSidebar from '../../components/MyPageSidebar/MyPageSidebar';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import MypageContainer from '../../components/MyPageContainer/MypageContainer';

function MyPage(props) {
    return (
        <RootContainer>
            <MyPageSidebar />
            <MypageContainer title={"title"}>
                <div css={S.SInterestBox}>
                    <div css={S.SInterestListBox}>
                        <div>title list</div>
                        <div>title list</div>
                        <div>title list</div>
                    </div>
                </div>

            </MypageContainer>
                
        
        </RootContainer>
    );
}

export default MyPage;