import React, { useEffect, useState } from 'react';
import RootContainer from '../../components/RootContainer/RootContainer';
import SelectBtn from '../../components/SelectBtn/SelectBtn';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import FindAcademiesSidebar from '../../components/FindAcademiesSidebar/FindAcademiesSidebar';
import defalutProfile from './고양이.jpg';
import { RiAdvertisementFill } from 'react-icons/ri';
import Modal from '../../components/Modal/Modal';
import { useQuery } from 'react-query';
import { instance } from '../../api/config/instance';
import { useNavigate, useParams } from 'react-router-dom';

function FindAcademies(props) {
    const navigate = useNavigate();

    const [ hasOptions, setHasOptions ] = useState(false); // 조건 여부(지역, 카테고리)
    const [ selectedLocation, setSelectedLocation ] = useState({    // 지역
        educationOfficeCodes: "",
        administrative_district_name: ""

    });
    const [ selectedCategory, setSelectedCategory ] = useState({    // 카테고리
        REALM_SC_NM: ""
    });

    const [ modalIsOpen, setModalIsOpen ] = useState(false);
    const [ modalName, setModalName ] = useState("");

    const [ totalCount, setTotalCount ] = useState(2100);   // 아무 조건도 주지 않았을 경우 가져올 총 학원 수 2100개
    const { page } = useParams();
    const [ academyList, setAcademyList ] = useState();

    const educationOfficeCodes = ["B10", "C10", "D10", "E10", "F10", "G10", "H10", "I10", "J10", "K10", "M10", "N10", "P10", "Q10", "R10", "S10" , "T10"]

    // 조건이 없을 경우
    const fetchAcademyData = async () => {
        const allAcademyData = [];
        for (const code of educationOfficeCodes) {
            try {
                const options = {
                    params: {
                        KEY: "5234f1f7767447b4abc251d862f281e5",
                        Type: "json",
                        pIndex: page,
                        pSize: (code === "B10" || code === "J10") ? 3 : 1,
                        ATPT_OFCDC_SC_CODE: code
                    }
                };

                const response = await instance.get("https://open.neis.go.kr/hub/acaInsTiInfo", options);

                if (Object.keys(response?.data).includes("acaInsTiInfo")) {
                    response.data.acaInsTiInfo[1]?.row.forEach((academy) => {
                        allAcademyData.push(academy);
                    });
                }
            } catch (error) {
                console.error(error);
            }
        }
        setAcademyList(allAcademyData);
    };

    useEffect(() => {
        fetchAcademyData(); // fetchAcademyData 함수를 호출
        
    },[page])

    const pagenation = () => {
        const totalAcademyCount = totalCount;
        const lastPage = totalAcademyCount % 21 === 0 
            ? totalAcademyCount / 21
            // Math.floor(): 절삭 = 나머지 버림
            : Math.floor(totalAcademyCount / 21) + 1

        const startIndex = parseInt(page) % 5 === 0 ? parseInt(page) - 4 : parseInt(page) - (parseInt(page) % 5) + 1;
        const endIndex = startIndex + 4 <= lastPage ? startIndex + 4 : lastPage;
        const pageNumbers = [];

        for (let i = startIndex; i <= endIndex; i++) {
            pageNumbers.push(i);
        }

        return (
            <>
                <button disabled={parseInt(page) === 1} onClick={() => {
                    navigate(`/academy/find/${parseInt(page) - 1}`);
                }}>&#60;</button>

                {pageNumbers.map(num => {
                    return <button key={num} onClick={() => {
                        navigate(`/academy/find/${num}`)
                    }}>{num}</button>
                })}

                <button disabled={parseInt(page) === lastPage} onClick={() => {
                    navigate(`/academy/find/${parseInt(page) + 1}`);
                }}>&#62;</button>
            </>

        )
    }

    return (
        <RootContainer>
            <div css={S.SearchLayout}>
                <h1>학원찾기</h1>
                <div css={S.SearchContainer}>
                    <SelectBtn setModalIsOpen={setModalIsOpen} name='지역 선택' setModalName={setModalName}>지역 선택</SelectBtn>
                    <SelectBtn setModalIsOpen={setModalIsOpen} name='카테고리 선택' setModalName={setModalName}>카테고리 선택</SelectBtn>
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
                            {academyList?.map((academy) => {
                                const key = `${academy.ATPT_OFCDC_SC_CODE}_${academy.ACA_ASNUM}`;
                                return <li key={key} css={S.LiBox} onClick={()=> {navigate(`/academy/info?education_office_codes=${academy.ATPT_OFCDC_SC_CODE}&academy_num=${academy.ACA_ASNUM}`)}}>
                                    <img src={defalutProfile} alt="" />
                                    <strong>{academy.ACA_NM}</strong>
                                    <div>{academy.FA_RDNMA}</div>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div css={S.PageButtonContainer}>
                {pagenation()}
            </div>
            <span css={S.Span(hasOptions)}>조건없이 검색 시 100페이지까지 보여집니다. 찾는 결과가 없다면 검색 조건을 이용해 주세요</span>
            <Modal modalIsOpen={modalIsOpen} 
                setModalIsOpen={setModalIsOpen} 
                modalName={modalName}
                setAcademyList={setAcademyList} />
        </RootContainer>
    );
}

export default FindAcademies;