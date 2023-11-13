import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import ReactModal from 'react-modal';
import { useQuery } from 'react-query';
import { instance } from '../../../api/config/instance';
import { useRecoilState } from 'recoil';
import { selectedLocationState } from '../../../store/Modal';

function Modal({ modalIsOpen, setModalIsOpen}) {

    const [ educationOfficeOptions, setEducationOfficeOptions ] = useState([]); // 교육청 목록
    const [ educationOfficeOption, setEducationOfficeOption ] = useState(""); // 선택된 교육청
    const [ districtOptionShow, setDistrictOptionShow ] = useState(false); // 교육청이 선택 됐을 때 행정구역 정보
    const [ administrativeDistrictOptions, setAdministrativeDistrictOptions ] = useState([]); // 행정구역 목록
    const [ administrativeDistrictOption, setAdministrativeDistrictOption ] = useState(""); // 선택된 행정구역
    const [selectedLocation, setSelectedLocation] = useRecoilState(selectedLocationState); // api로 넘길 교육청, 행정구역 정보

    const closeModal = () => {
        // 지역 검색 정보
        setSelectedLocation({
            ...selectedLocation,
            atpt_ofcdc_sc_code: educationOfficeOption,
            admst_zone_nm: administrativeDistrictOption
        })
        setModalIsOpen(false);
    };

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
                return {value: option.educationOfficeCode, label: option.educationOfficeName};
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
                        }}>
                            {option.label}
                        </li>
                    ))}
                </ul>
                <ul css={S.SDistrictOptionList(districtOptionShow)}>
                    {filteredAdministrativeDistrictOptions.map((option) => (
                        <li key={option.administrativeDistrictId} 
                        onClick={() => {setAdministrativeDistrictOption(option.administrativeDistrictName)}}>
                            {option.administrativeDistrictName}
                        </li>
                    ))}
                </ul>
            </div>
            <button onClick={closeModal}>선택</button>
        </ReactModal>
    );
}

export default Modal;