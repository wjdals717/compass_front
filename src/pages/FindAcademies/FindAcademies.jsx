import React, { useEffect, useState } from 'react';
import RootContainer from '../../components/RootContainer/RootContainer';
import SelectBtn from '../../components/SelectBtn/SelectBtn';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import FindAcademiesSidebar from '../../components/FindAcademiesSidebar/FindAcademiesSidebar';
import defalutProfile from './고양이.jpg';
import { RiAdvertisementFill } from 'react-icons/ri';
import Modal from '../../components/Modal/LocationModal/Modal';
import { instance } from '../../api/config/instance';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { selectedCategoryState, selectedLocationState } from '../../store/Modal';
import CategoryModal from '../../components/Modal/CategoryModal/CategoryModal';
import { useQuery } from 'react-query';

function FindAcademies(props) {
    const navigate = useNavigate();

    const [ selectedLocation, setSelectedLocation ] = useRecoilState(selectedLocationState); // 지역
    const [ selectedCategory, setSelectedCategory ] = useRecoilState(selectedCategoryState); // 카테고리
    const [ selectedContent, setSelectedContent ] = useState(""); // 학원 이름
    let aca_nm = "";

    console.log("atpt_ofcdc_sc_code:" + selectedLocation.atpt_ofcdc_sc_code);
    console.log("admst_zone_nm:" + selectedLocation.admst_zone_nm);
    console.log("realm_sc_nm:" + selectedCategory.realm_sc_nm);
    console.log("le_crse_nm:" + selectedCategory.le_crse_nm);
    console.log("selectedContent:" + selectedContent);

    const [ modalIsOpen, setModalIsOpen ] = useState(false);
    const [ categoryModalIsOpen, setCategoryModalIsOpen ] = useState(false);

    const [ totalCount, setTotalCount ] = useState(0);
    const { page } = useParams();
    const [ academyList, setAcademyList] = useState([]);
    
    const getAcademyList = useQuery(["getAcademyList"], async () => {
        try {
            const options = {
                params: {
                    pIndex: page,
                    pSize: 21
                },
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            
            // ATPT_OFCDC_SC_CODE가 selectedLocation에 존재하는지 확인
            if (selectedLocation.atpt_ofcdc_sc_code) {
                options.params.ATPT_OFCDC_SC_CODE = selectedLocation.atpt_ofcdc_sc_code;
            }
            
            // ADMST_ZONE_NM이 selectedLocation에 존재하는지 확인
            if (selectedLocation.admst_zone_nm) {
                options.params.ADMST_ZONE_NM = selectedLocation.admst_zone_nm;
            }

            // selectedCategory.realm_sc_nm가 존재하는지 확인
            if (selectedCategory.realm_sc_nm) {
                options.params.REALM_SC_NM = selectedCategory.realm_sc_nm;
            }
            // selectedCategory.le_crse_nm가 존재하는지 확인
            if (selectedCategory.le_crse_nm) {
                options.params.LE_CRSE_NM = selectedCategory.le_crse_nm;
            }

            // selectedContent(ACA_NM)가 존재하는지 확인
            if (selectedContent) {
                options.params.ACA_NM = selectedContent;
            }
    
            // api, options를 get 요청
            const response = await instance.get("/academies", options);
            console.log(response);

            // Update academyList with the data from the response
            setAcademyList(response.data.academies);

            // Set the total count
            setTotalCount(response.data.listTotalCount);
            
        } catch (error) {
            console.error(error);
        }
    }) 

    // 조건이 생길 때 학원목록 업데이트
    useEffect(() => {
        getAcademyList.refetch()
    }, [page, selectedLocation, selectedCategory, selectedContent]);
    

    const handleInputOnChange = (e) => {
        aca_nm = e.target.value
    }

    const handleSelectContent = () => {
        setSelectedContent(aca_nm);
    }

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

    const openLocationModal = () => {
        setModalIsOpen(true);
    };

    const openCategoryModal = () => {
        setCategoryModalIsOpen(true);
    };
    


    return (
        <RootContainer>
            <div css={S.SearchLayout}>
                <h1>학원찾기</h1>
                <div css={S.SearchContainer}>
                    <div onClick={openLocationModal}>
                        <SelectBtn>지역 선택</SelectBtn>
                    </div>
                    <div onClick={openCategoryModal}>
                        <SelectBtn>카테고리 선택</SelectBtn>
                    </div>
                    <input type="text" placeholder='나에게 맞는 학원을 찾아보세요' onChange={handleInputOnChange}/>
                    <button onClick={handleSelectContent}>검색</button>
                </div>
            </div>
            <div css={S.PageLayout}>
                <FindAcademiesSidebar />
                <div css={S.PageContainer}>
                    <div css={S.InfoBox}>
                        <div>{totalCount}개의 학원이 있습니다.</div>
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
                                <div>학원 위치</div>
                            </li>
                            <li css={S.LiBox} className='recent'>
                                <img src={defalutProfile} alt="" />
                                <strong>학원 이름</strong>
                                <div>학원 위치</div>
                            </li>
                            <li css={S.LiBox} className='recent'>
                                <img src={defalutProfile} alt="" />
                                <strong>학원 이름</strong>
                                <div>학원 위치</div>
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
                            {academyList.map((academy) => {
                                return <li key={academy.ACADEMY_ID} css={S.LiBox} onClick={()=> {navigate(`/academy/info?ACADEMY_ID=${academy.ACADEMY_ID}`)}}>
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
            <Modal modalIsOpen={modalIsOpen} 
                setModalIsOpen={setModalIsOpen} 
                setSelectedLocation={setSelectedLocation}/>
            <CategoryModal modalIsOpen={categoryModalIsOpen} 
                setModalIsOpen={setCategoryModalIsOpen} 
                setSelectedCategory={setSelectedCategory}/>

        </RootContainer>
    );
}

export default FindAcademies;