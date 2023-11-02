import React from 'react';
import RootContainer from '../../components/RootContainer/RootContainer';
import SelectBtn from '../../components/SelectBtn/SelectBtn';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import FindAcademiesSidebar from '../../components/FindAcademiesSidebar/FindAcademiesSidebar';
import defalutProfile from './고양이.jpg';

function FindAcademies(props) {
    return (
        <RootContainer>
            <div css={S.SearchLayout}>
                <h1>학원찾기</h1>
                <div css={S.SearchContainer}>
                    <SelectBtn>지역</SelectBtn>
                    <SelectBtn>과목</SelectBtn>
                    <input type="text" placeholder='나에게 맞는 학원을 찾아보세요'/>
                    <button>검색</button>
                </div>
            </div>
            <div css={S.PageLayout}>
                <FindAcademiesSidebar />
                <div css={S.PageContainer}>
                    <div css={S.ClassifyBox}>
                        <div>n개의 학원이 있습니다.</div>
                        <div>
                            <SelectBtn>추천순</SelectBtn>
                        </div>
                    </div>
                    <div>
                        <div css={S.InfoBox}>
                            <h3>최신 학원 소식</h3>
                            <span>광고</span>
                        </div>
                        <ul css={S.UlBox}>
                            <li css={S.LiBox}>
                                <img src={defalutProfile} alt="" />
                                <strong>학원 이름</strong>
                                <div>학원 설명</div>
                            </li>
                            <li css={S.LiBox}>
                                <img src={defalutProfile} alt="" />
                                <strong>학원 이름</strong>
                                <div>학원 설명</div>
                            </li>
                            <li css={S.LiBox}>
                                <img src={defalutProfile} alt="" />
                                <strong>학원 이름</strong>
                                <div>학원 설명</div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div css={S.InfoBox}>
                            <h3>검색된 정보</h3>
                        </div>
                        <ul css={S.UlBox}>
                            <li css={S.LiBox}>
                                <img src={defalutProfile} alt="" />
                                <strong>학원 이름</strong>
                                <div>학원 설명</div>
                            </li>
                            <li css={S.LiBox}>
                                <img src={defalutProfile} alt="" />
                                <strong>학원 이름</strong>
                                <div>학원 설명</div>
                            </li>
                            <li css={S.LiBox}>
                                <img src={defalutProfile} alt="" />
                                <strong>학원 이름</strong>
                                <div>학원 설명</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </RootContainer>
    );
}

export default FindAcademies;