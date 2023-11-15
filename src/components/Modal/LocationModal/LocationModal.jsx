import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import ReactModal from 'react-modal';
import { useQuery } from 'react-query';
import { instance } from '../../../api/config/instance';
import { useRecoilState } from 'recoil';
import { selectedLocationState } from '../../../store/searchOptions';

function LocationModal({ modalIsOpen, setModalIsOpen, enableBodyScroll}) {

    const [ educationOfficeOptions, setEducationOfficeOptions ] = useState([]); // 교육청 목록
    const [ educationOfficeOption, setEducationOfficeOption ] = useState(""); // 선택된 교육청
    const [ districtOptionShow, setDistrictOptionShow ] = useState(false); // 교육청이 선택 됐을 때 행정구역 정보
    const [ administrativeDistrictOptions, setAdministrativeDistrictOptions ] = useState([]); // 행정구역 목록
    const [ administrativeDistrictOption, setAdministrativeDistrictOption ] = useState(""); // 선택된 행정구역
    const [selectedLocation, setSelectedLocation] = useRecoilState(selectedLocationState); // 선택된 교육청, 행정구역 정보

    // 선택 버튼
    const closeModal = () => {
        // 지역 검색 정보
        setSelectedLocation({
            ...selectedLocation,
            atpt_ofcdc_sc_code: educationOfficeOption,
            admst_zone_nm: administrativeDistrictOption
        })
        setModalIsOpen(false);
        enableBodyScroll();
    };

    // 초기화
    const handleResetButton = () => {
        setEducationOfficeOption("");
        setAdministrativeDistrictOption("");
    }

    const educationOfficeOptionsState = useQuery(["educationOfficeOptionsState"], async () => {
        try {
            return await instance.get("/option/education-offices");
        }catch(error) {
            console.error(error);
        }
    },
    {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setEducationOfficeOptions(response.data.map(option => {
                const label = option.educationOfficeName.substring(0, option.educationOfficeName.length - 3);
                return {value: option.educationOfficeCode, label: label};
            }));
        }
    });

    const getAdministrativeDistrictOptionsState = useQuery(["getAdministrativeDistrictOptionsState"], async () => {
        try {
            return await instance.get("/option/administrative-districts");
        } catch (error) {
            console.error(error);
        }
    },{
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setAdministrativeDistrictOptions(response.data);
        }
    });

    // educationOfficeOption과 일치하는 administrativeDistrictOptions 필터링
    const filteredAdministrativeDistrictOptions = administrativeDistrictOptions.filter(option => {
        return option.educationOfficeCode === educationOfficeOption;
    });
    

    return (
        <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal} css={S.SLayout}>
            <div>지역 선택</div>
            <div css={S.SListContainer}>
                <ul css={S.SEducationOfficeList}>
                    {educationOfficeOptions.map((option) => (
                        <li key={option.value} onClick={() => {
                            setEducationOfficeOption(option.value);
                            setDistrictOptionShow(true);
                            setAdministrativeDistrictOption("");
                            }}
                            css={[
                                S.SEducationOfficeListItem, // 기존 스타일을 포함
                                option.value === educationOfficeOption && S.SCategoryListItemSelected // 선택된 li에 대한 스타일
                            ]}
                            >
                            {option.label}
                        </li>
                    ))}
                </ul>
                <ul css={S.SDistrictOptionList(districtOptionShow)}>
                    {filteredAdministrativeDistrictOptions.map((option) => (
                        <li key={option.administrativeDistrictId} 
                        onClick={() => {setAdministrativeDistrictOption(option.administrativeDistrictName)}}
                        css={[
                            S.SDistrictOptionListItem, // 기존 스타일을 포함
                            option.administrativeDistrictName === administrativeDistrictOption && S.SDistrictOptionListItemSelected // 선택된 li에 대한 스타일
                        ]}
                        >
                            {option.administrativeDistrictName}
                        </li>
                    ))}
                </ul>
            </div>
            <div css={S.ButtonContainer}>
                <button onClick={handleResetButton}>초기화</button>
                <button onClick={closeModal}>선택</button>
            </div>
            
        </ReactModal>
    );
}

export default LocationModal;