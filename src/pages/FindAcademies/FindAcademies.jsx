import React from 'react';
import RootContainer from '../../components/RootContainer/RootContainer';
import SelectBtn from '../../components/SelectBtn/SelectBtn';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import FindAcademiesSidebar from '../../components/FindAcademiesSidebar/FindAcademiesSidebar';
import defalutProfile from './고양이.jpg';
import { RiAdvertisementFill } from 'react-icons/ri';

function FindAcademies(props) {
    return (
        <RootContainer>
            <div css={S.SearchLayout}>
                <h1>학원찾기</h1>
                <div css={S.SearchContainer}>
                    <SelectBtn>지역 선택</SelectBtn>
                    <SelectBtn>카테고리 선택</SelectBtn>
                    <input type="text" placeholder='나에게 맞는 학원을 찾아보세요'/>
                    <button>검색</button>
                </div>
            </div>
            <div css={S.PageLayout}>
                <FindAcademiesSidebar />
                <div css={S.PageContainer}>
                    <div css={S.InfoBox}>
                        <div>n개의 학원이 있습니다.</div>
                    </div>
                    <div>
                        <div css={S.HeaderBox}>
                            <h3>이런 학원은 어떠세요?</h3>
                            <div>
                                <span>광고</span>
                                <RiAdvertisementFill size={22}/>
                            </div>
                        </div>
                        <ul css={S.UlBox}>
                            <li css={S.LiBox} className='recent'>
                                <img src={defalutProfile} alt="" />
                                <strong>학원 이름</strong>
                                <div>학원 설명</div>
                            </li>
                            <li css={S.LiBox} className='recent'>
                                <img src={defalutProfile} alt="" />
                                <strong>학원 이름</strong>
                                <div>학원 설명</div>
                            </li>
                            <li css={S.LiBox} className='recent'>
                                <img src={defalutProfile} alt="" />
                                <strong>학원 이름</strong>
                                <div>학원 설명</div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div css={S.HeaderBox}>
                            <h3>검색된 정보</h3>
                            <select css={S.ClassifyBox} name="classifyBox" id="">
                                <option value="최신순">최신순</option>
                                <option value="인기순">인기순</option>
                                <option value="좋아요순">좋아요순</option>
                            </select>
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