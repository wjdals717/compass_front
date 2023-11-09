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
import { useRecoilState } from 'recoil';
import { selectedLocationState } from '../../store/Modal';

function FindAcademies(props) {
    const navigate = useNavigate();

    const [ hasOptions, setHasOptions ] = useState(false); // 조건 여부(지역, 카테고리)
    const [selectedLocation, setSelectedLocation] = useRecoilState(selectedLocationState); // 지역
    const [ selectedCategory, setSelectedCategory ] = useState({    // 카테고리
        realm_sc_nm: "",
        le_crse_nm: ""
    });

    const [ modalIsOpen, setModalIsOpen ] = useState(false);
    const [ modalName, setModalName ] = useState("");

    const [ totalCount, setTotalCount ] = useState(2100);   // 아무 조건도 주지 않았을 경우 가져올 총 학원 수 2100개 조건이 있을경우 가지고온 학원 수에 따라 달라짐
    const { page } = useParams();
    const [ academyList, setAcademyList ] = useState();

    const educationOfficeCodes = ["B10", "C10", "D10", "E10", "F10", "G10", "H10", "I10", "J10", "K10", "M10", "N10", "P10", "Q10", "R10", "S10" , "T10"]

    console.log(selectedLocation);

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

    // 조건이 있는 경우
    const selectAcademyData = async () => {
        const allAcademyData = [];
        const academiesPerPage = 21;    // 페이지당 표시될 학원 수
        if (selectedLocation.atpt_ofcdc_sc_code) {
            try {
                const options = {
                    params: {
                        KEY: "5234f1f7767447b4abc251d862f281e5",
                        Type: "json",
                        pIndex: page,
                        pSize: academiesPerPage,
                        ATPT_OFCDC_SC_CODE: selectedLocation.atpt_ofcdc_sc_code,
                    }
                }

                // ADMST_ZONE_NM이 selectedLocation에 존재하는지 확인
                if (selectedLocation.admst_zone_nm) {
                    options.params.ADMST_ZONE_NM = selectedLocation.admst_zone_nm;
                }
    
                // api, options를 get 요청
                const response = await instance.get("https://open.neis.go.kr/hub/acaInsTiInfo", options);

                if (Object.keys(response?.data).includes("acaInsTiInfo")) {
                    response.data.acaInsTiInfo[1]?.row.forEach((academy) => {
                        allAcademyData.push(academy);
                    });
                }
            } catch (error) {
                console.error(error);
            }
            setAcademyList(allAcademyData);
        }
        // for (const code of educationOfficeCodes) {
        //     try {
        //         const optionsForTotalCount = {
        //             params: {
        //                 KEY: "5234f1f7767447b4abc251d862f281e5",
        //                 Type: "json",
        //                 pIndex: 1,
        //                 pSize: 1,
        //                 ATPT_OFCDC_SC_CODE: code
        //             }
        //         };
    
        //         const totalCountResponse = await instance.get("https://open.neis.go.kr/hub/acaInsTiInfo", optionsForTotalCount);
        //         const ListTotalCount = totalCountResponse?.data.acaInsTiInfo[0]?.head[0].list_total_count;
    
        //         if (!ListTotalCount) {
        //             continue;
        //         }
    
        //         // 현재 교육청의 학원 수를 총 학원 수에 더해 업데이트
        //         setTotalCount((prevTotalCount) => prevTotalCount + ListTotalCount);
    
        //         let currentPage = page;
        //         let academiesToFetch = academiesPerPage;
    
        //         if (academiesToFetch > ListTotalCount) {
        //             academiesToFetch = ListTotalCount;
        //             currentPage = 1;
        //         }
    
        //         const optionsForAcademies = {
        //             params: {
        //                 KEY: "5234f1f7767447b4abc251d862f281e5",
        //                 Type: "json",
        //                 pIndex: currentPage,
        //                 pSize: academiesToFetch,
        //                 ATPT_OFCDC_SC_CODE: code
        //             }
        //         };
    
        //         const response = await instance.get("https://open.neis.go.kr/hub/acaInsTiInfo", optionsForAcademies);
    
        //         if (Object.keys(response?.data).includes("acaInsTiInfo")) {
        //             response.data.acaInsTiInfo[1]?.row.forEach((academy) => {
        //                 allAcademyData.push(academy);
        //             });
        //         }
        //     } catch (error) {
        //         console.error(error);
        //     }
        // }
        // setAcademyList(allAcademyData);
    };

    useEffect(() => {
        if (!hasOptions) {
            fetchAcademyData();
        } else {
            selectAcademyData();
        }
    }, [page, selectedLocation, hasOptions]);
    
    // selectedLocation이 변경될 때 hasOptions 업데이트
    useEffect(() => {
        if (selectedLocation.atpt_ofcdc_sc_code) {
            setHasOptions(true);
            navigate("/academy/find/1");
        } else {
            setHasOptions(false);
        }
    }, [selectedLocation]);

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
                setAcademyList={setAcademyList}
                setSelectedLocation={setSelectedLocation}/>
        </RootContainer>
    );
}

export default FindAcademies;